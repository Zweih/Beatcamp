require "open-uri"

require "taglib" if File.basename($PROGRAM_NAME) != "rake" && File.basename($PROGRAM_NAME) != "rails"

class Track < ApplicationRecord
	validates :title, :album_id, :list_num, presence: true

	has_one_attached :audio

	belongs_to :album

	def audio_url
		if(self.audio.attached?)
			self.audio.service.url_expires_in = 1.hour
			self.audio.service_url
		else
			""
		end
	end

	def attach_audio(url)
		url = URI.parse(url)
		file = open(url)

		self.audio.purge
		filepath = "temp.#{file.content_type_parse.first.split("/").last}"
		self.audio.attach(io: file, filename: filepath, content_type: file.content_type_parse.first)

		len = 0

		TagLib::MPEG::File.open(file.path) do |file|
			properties = file.audio_properties
			len = properties.length
		end

		self.length = len
		self.save!
	end
end