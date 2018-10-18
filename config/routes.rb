Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
		resources :albums, only: [:create, :index, :show, :update]
		resources :tracks, only: [:create, :index, :destroy, :show]
    resource :session, only: [:create, :destroy]
  end
end
