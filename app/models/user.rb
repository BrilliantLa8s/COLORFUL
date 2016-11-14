class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  # validations
  validates_presence_of :name, :email, :password, :password_confirmation

  # [registration] generate unique id and skip email confirmation
  before_save -> do
    self.uid = SecureRandom.uuid
    skip_confirmation!
  end
end
