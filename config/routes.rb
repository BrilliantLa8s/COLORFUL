Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    namespace :v1, defaults: {format: :json} do
    end

  end
  # catchall route for client
  get '*path', to: 'application#index'
  root 'application#index', defaults: {format: :html}
end
