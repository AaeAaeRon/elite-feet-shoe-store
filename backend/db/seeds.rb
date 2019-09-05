# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shoe.destroy_all
User.destroy_all
Selection.destroy_all
Order.destroy_all



u1 =User.create(username: "Jack", name: "Jackie Chan" )
s1 = Shoe.create(name: "Zoom Freak 1", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/assphgg2fhsggu5t09cm/zoom-freak-1-basketball-shoe-tmk8Hw.jpg", price: 120, category: "Basketball")


o1 = Order.create(user_id: u1.id)
# byebug
Selection.create(shoe_id: s1.id, order_id: o1.id)



