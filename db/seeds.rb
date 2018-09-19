# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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

cat_album = Album.create(title: "homeresonance", description: "that one album", user_id: cat.id)
file = File.open('app/assets/images/homeresonance.jpg')
cat_album.cover.attach(io: file, filename: 'homeresonance.jpg')