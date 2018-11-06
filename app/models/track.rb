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
end