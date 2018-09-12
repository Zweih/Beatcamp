class User < ApplicationRecord
  attr_reader :password

  validates :username, :session_token, :password_digest, presence: :true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
end