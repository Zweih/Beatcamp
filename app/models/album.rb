class Album < ApplicationRecord
	validates :title, :user_id, presence: true
	validates :description, length: { maximum: 400 }

	has_one_attached :cover
	
	has_many :tracks, dependent: :destroy

	belongs_to :user

	def cover_url
		if(self.cover.attached?)
			self.cover.service.url_expires_in = 1.hour
			self.cover.service_url
		else
			""
		end
	end
end