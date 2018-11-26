require 'open-uri'
require 'ruby-filemagic'
require 'tempfile'

class User < ApplicationRecord
	attr_reader :password
	
	validates :username, :session_token, :password_digest, presence: true
	validates :username, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: true }
	validates :bio, length: { maximum: 400 }

	has_one_attached :avatar

	has_many :albums, dependent: :destroy
	has_many :tracks, through: :albums
	
	after_initialize :ensure_session_token

	def self.generate_session_token
		SecureRandom::urlsafe_base64(16)
	end
	
	def password=(password)
		@password = password
		self.password = BCrypt::Password.create(password)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user && user.is_password?(password) ? user : nil
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

	def reset_session_token!
		self.session_token = self.class.generate_session_token
		self.save!
		self.session_token
	end

	def avatar_url
		self.avatar.attached? ? self.avatar.service_url : nil
	end
	
	def attach_avatar!(url)
		url = URI.parse(url)

		begin
			file = open(url)
			tmp_file = Tempfile.new
			File.binwrite(tmp_file, IO.binread(file))
			fm = FileMagic.new
			type = fm.file(tmp_file.path, true)
			tmp_file.unlink

			unless ["png", "jpg", "jpeg"].include?(type.downcase)
				return ["Invalid file type: image must be .png, .jpg, or .png", "422"]
			end

			self.avatar.purge
			self.avatar.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)

			return nil
		rescue OpenURI::HTTPError => error
			response = error.io
			
			puts "OpenURI HTTPError: "
			puts response.status
			puts response.string

			return ["Invalid image URL", response.status[0]]
		end
	end
end