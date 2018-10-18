class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    @track.description = ""

    if @track.save
      login!(@track)
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def index
		@tracks = Track.all
    render "api/tracks/index"
  end

  def show
    @track = Track.find_by(id: params[:id])
    render "api/tracks/show"
  end

  private

  def track_params
    params.require(:track).permit(:title, :list_num, :album_id)
  end
end