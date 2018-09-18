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
Album.create(title: "softness", description: "its good", user_id: cat.id)