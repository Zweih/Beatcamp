require "open-uri"
require "fileutils"

class Album < ApplicationRecord
	validates :title, :user_id, presence: true
	validates :description, length: { maximum: 400 }

	has_one_attached :cover
	
	has_many :tracks, dependent: :destroy

	belongs_to :user

	def cover_url
		self.cover.attached? ? self.cover.variant(resize: '350x350').processed.service_url : nil
	end

	def mini_cover_url
		self.cover.attached? ? self.cover.variant(resize: '120x120').processed.service_url : nil
	end

	def med_cover_url
		self.cover.attached? ? self.cover.variant(resize: '200x200').processed.service_url : nil
	end

	def full_cover_url
		self.cover.attached? ? self.cover.service_url : nil
	end

	def attach_cover(url)
		url = URI.parse(url)
		file = open(url)

		if(should_upload?(file))
			self.cover.purge
			self.cover.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)
		end
	end

	private

	def should_upload?(file)
		return true if !self.cover.attached?
		
		currentFile = open(URI.parse(self.cover.service_url))
		!FileUtils.identical?(file, currentFile)
	end
end