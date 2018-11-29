class Api::AlbumsController < ApplicationController
	def create
		@album = Album.new(album_params)
		@album.description = ""

		if @album.save
			render "api/albums/show"
		else
			render json: @album.errors.full_messages, status: 422
		end
	end

	def update
		@album = Album.find_by(id: params[:id])

		if @album
			if @album.user_id != params[:user][:id]
				unless params[:album][:cover_url].blank?
					@album.attach_cover(params[:album][:cover_url])
				end
				
				if @album.update_attributes(update_params)
					render "api/albums/show"
				else
					render json: @album.errors.full_messages, status: 422
				end
			else
				render json: ["Invalid credentials"], status: 401
			end
		else
			render json: ["No such album"], status: 401
		end
	end

	def index
		if params[:home]
			@albums = Album.find([1, 70, 104, 160, 170, 244, 306, 325, 329])
		else 
			@albums = Album.all
		end

		render "api/albums/index"
	end

	def show
		@album = Album.find_by(id: params[:id])
		render "api/albums/show"
	end

	private

	def album_params
		params.require(:album).permit(:title, :description, :user_id)
	end

	def update_params
		params.require(:album).permit(:title, :description, :user_id)
	end
end