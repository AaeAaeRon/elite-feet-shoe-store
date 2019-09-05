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
Shoe.create(name: "Kyrie 5 Bandulu", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhuazzp0een2du6zw4ww/kyrie-5-x-bandulu-basketball-shoe-tQ0QXX.jpg", price: 130, category: "Basketball")
Shoe.create(name: "Harden Vol 3", img_url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ffa48bf191d44f9a9c23a9f20176b881_9366/Harden_Vol._3_Shoes_Red_EG2626_01_standard.jpg", price: 110, category: "Basketball")
Shoe.create(name: "Marvel’s Iron Spider D.O.N Issue #1", img_url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d28fde4d72834193b0b5aa34000a154e_9366/MARVEL'S_IRON_SPIDER_or_D.O.N._ISSUE_1_SHOES_Red_EG0490_01_standard.jpg", price: 100, category: "Basketball")
Shoe.create(name: "Nike Joyride Run Flyknit", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ualleqdfvwn1t3ohf449/joyride-run-flyknit-mens-running-shoe-LcCzGq.jpg", price: 180, category: "Running")
Shoe.create(name: "Nike Epic React Flyknit 2", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/arroebv9hbiwws1hhaes/epic-react-flyknit-2-mens-running-shoe-0KFRGP.jpg", price: 150, category: "Running")
Shoe.create(name: "Nike React City Premium", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/tquewzztaeiodc0irhv0/react-city-premium-mens-running-shoe-4WLS34.jpg", price: 160, category: "Running")
Shoe.create(name: "Nike Free RN Flyknit 3.0", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iwqohstwcp6lcu2nf1nq/free-rn-flyknit-3-mens-running-shoe-Qkpd3C.jpg", price: 130, category: "Running")




o1 = Order.create(user_id: u1.id)
# byebug
Selection.create(shoe_id: s1.id, order_id: o1.id)



