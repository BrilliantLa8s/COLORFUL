class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?

  # disable csrf for state-less api calls
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render file: 'layouts/application'
  end

  protected

  # whitelist signup parameters
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:subdomain, :name, :image])
  end

end
