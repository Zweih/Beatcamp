class Track < ApplicationRecord
  validates :title, :album_id, :list_num, presence: true

  has_one_attached :audio

  belongs_to :album

  def cover_url
    self.audio.attached? ? self.audio.service_url : nil
  end
end