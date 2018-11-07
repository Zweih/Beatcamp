# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'open_uri_redirections'

User.delete_all
Album.delete_all

cat = User.create(username: "sennacy", password: "password1234", bio: "I am a cat", location: "New York")
file = File.open('app/assets/images/sennacy.jpg')
cat.avatar.attach(io: file, filename: 'sennacy.jpg')

cat_album = Album.create(title: "Demo Album 1", description: "Above is an example album. This is an example description.", user_id: cat.id)
file = File.open('app/assets/images/1.jpg')
cat_album.cover.attach(io: file, filename: 'softness.jpg')

cat_album = Album.create(title: "Second Demo", description: "A sharp album for a sharp demo. This is yet another demo description.", user_id: cat.id)
file = File.open('app/assets/images/2.jpg')
cat_album.cover.attach(io: file, filename: 'attac.jpg')

cat_album = Album.create(title: "Album Number 3", description: "that one album that's superb because it's the third demo!", user_id: cat.id)
file = File.open('app/assets/images/3.jpg')
cat_album.cover.attach(io: file, filename: 'v7ycqdgxzan11.jpg')

Faker::UniqueGenerator.clear


def get_words(num)
  words = [
    Faker::HeyArnold.quote,
    Faker::GreekPhilosophers.quote,
    Faker::Dog.meme_phrase,
    Faker::WorldOfWarcraft.quote,
    Faker::Hacker.say_something_smart,
    Faker::HarryPotter.quote
  ]

  words[num]
end

def get_locations(num)
  locations = [
    Faker::LordOfTheRings.location,
    Faker::Address.city,
    Faker::HeyArnold.location
  ]

  locations[num]
end

10.times do |i|
  cat = User.create(username: Faker::RockBand.unique.name, password: Faker::Internet.password(10, 20, true), bio: get_words(rand(0..5)), location: get_locations(rand(0..2)))
  profileUrl = (i % 2) ? Faker::LoremFlickr.image("400x400", ['cat']) : Faker::LoremFlickr.image("400x400", ['dog'])
  url = URI.parse(profileUrl)
  file = open(url, :allow_redirections => :safe)
  cat.avatar.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)

  rando = rand(1..6)

  rando.times do
    albumTitle = (rando % 2) ? Faker::Music.album : Faker::Book.title
    cat_album = Album.create(title: albumTitle, description: get_words(rand(0..5)), user_id: cat.id)
    albumUrl = (rando % 2) ? Faker::LoremFlickr.image("400x400", ['music']) : Faker::LoremFlickr.image("400x400", ['band'])
    url = URI.parse(albumUrl)
    file = open(url, :allow_redirections => :safe)
    cat_album.cover.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)
  end
end