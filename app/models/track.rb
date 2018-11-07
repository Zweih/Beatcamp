require 'taglib' if File.basename($PROGRAM_NAME) != 'rake'

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

	def audio_len
		len = 0
		audio_path = "#{Rails.root.join('tmp').to_s}/#{self.audio.filename}"
		
		File.open(audio_path, 'wb') do |file|
			file.write(self.audio.download)
		end

		TagLib::MPEG::File.open(audio_path) do |file|
			properties = file.audio_properties
			len = properties.length
		end

		return len
	end
end