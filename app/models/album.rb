class Album < ApplicationRecord

  validates :title, :user_id, presence: true
  validates :description, length: { maximum: 400 }

  has_one_attached :cover

  belongs_to :user

  def cover_url
    self.cover.attached? ? self.cover.service_url : nil
  end
end