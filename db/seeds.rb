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

cat_album = Album.create(title: "softness", description: "its good", user_id: cat.id)
file = File.open('app/assets/images/softness.jpg')
cat_album.cover.attach(io: file, filename: 'softness.jpg')

cat_album = Album.create(title: "attac", description: "he sharp", user_id: cat.id)
file = File.open('app/assets/images/attac.jpg')
cat_album.cover.attach(io: file, filename: 'attac.jpg')

cat_album = Album.create(title: "funky little cowboy", description: "that one album that's superb", user_id: cat.id)
file = File.open('app/assets/images/v7ycqdgxzan11.jpg')
cat_album.cover.attach(io: file, filename: 'v7ycqdgxzan11.jpg')

Faker::UniqueGenerator.clear

words = [
    Faker::HeyArnold.quote,
    Faker::GreekPhilosophers.quote,
    Faker::Dog.meme_phrase,
    Faker::WorldOfWarcraft.quote,
    Faker::Hacker.say_something_smart,
    Faker::HarryPotter.quote
]

locations = [
  Faker::LordOfTheRings.location,
  Faker::Address.city,
  Faker::HeyArnold.location
]

names = [
  Faker::SiliconValley.company,
  Faker::RockBand.name
]

100.times do |i|
  cat = User.create(username: Faker::RockBand.unique.name, password: Faker::Internet.password(10, 20, true), bio: words[rand(0..5)], location: locations[rand(0..2)])
  profileUrl = (i % 2) ? Faker::LoremFlickr.image("400x400", ['cat']) : Faker::LoremFlickr.image("400x400", ['dog'])
  url = URI.parse(profileUrl)
  file = open(url, :allow_redirections => :safe)
  cat.avatar.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)

  rando = rand(1..6)

  rando.times do
    albumTitle = (rando % 2) ? Faker::Music.album : Faker::Book.title
    cat_album = Album.create(title: albumTitle, description: words[rand(0..5)], user_id: cat.id)
    albumUrl = (rando % 2) ? Faker::LoremFlickr.image("400x400", ['music']) : Faker::LoremFlickr.image("400x400", ['band'])
    url = URI.parse(albumUrl)
    file = open(url, :allow_redirections => :safe)
    cat_album.cover.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)
  end
end