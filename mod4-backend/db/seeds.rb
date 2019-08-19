# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "location"
    t.string "program"
    t.integer "mod_number"
    t.boolean "admin"

User.create(username: "goatrodeo", location: "seattle", program: "web dev", mod_number:060319, admin: false),
User.create(username: "michael", location:"seattle", program: "web dev", mod_number:060319, admin: false)