# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bio.destroy_all
WorkHistory.destroy_all
# Task.destroy_all
User.destroy_all

puts "seeding users"

u1 = User.create(username: "Rayden", password: "12345")


puts "seeding bios"

b1 = Bio.create(name: "Ray", address: "Niagra Falls", phone: "12345", email: "rayden@kombat.com", linkedin: "earthrealm.com", user_id: u1.id)

w1 = WorkHistory.create(title: "Manager", company:"Flatiron", start_date: Date.new(2019,06,21), end_date: Date.new(2020,05,05), user_id: u1.id )

# t1 = Task.create(details: "Got lit!!!!!", work_history_id: w1.id)



puts "done seeding ✅"