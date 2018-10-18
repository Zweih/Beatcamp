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

  def index
    num = params[:num].to_i
    
    if num
      @albums = Album.first(num)
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
end