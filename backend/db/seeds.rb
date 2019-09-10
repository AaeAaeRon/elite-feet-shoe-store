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



u1 =User.create(username: "Jack", password: "pwd" )

s1 = Shoe.create(name: "Zoom Freak 1", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/assphgg2fhsggu5t09cm/zoom-freak-1-basketball-shoe-tmk8Hw.jpg", description: "Get the speed, power, and control you need on the hardwood with the Nike Zoom Freak 1. Giannis Antetokounmpo's first signature shoe has the locked-down fit, responsive cushioning, and multidirectional traction to help you perform at your best.", quantity: 1, price: 120, category: "Basketball")
s2 = Shoe.create(name: "Kyrie 5 Bandulu", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhuazzp0een2du6zw4ww/kyrie-5-x-bandulu-basketball-shoe-tQ0QXX.jpg", description: "Designed in collaboration with Pat Peltier, the mind behind up-cycled vintage label Bandulu, the Kyrie 5 x Bandulu explores process, approach and technique. The brand's signature paint splatters give the shoe an expression that speaks to Kyrie's creativity and dedication to his craft—on and off the court.", quantity: 1, price: 130, category: "Basketball")
s3 = Shoe.create(name: "Harden Vol 3", img_url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ffa48bf191d44f9a9c23a9f20176b881_9366/Harden_Vol._3_Shoes_Red_EG2626_01_standard.jpg", description: "Slow down fast. These basketball shoes combine the creativity and cultural impact of the Harlem Renaissance with James Harden's signature style. They're built with a leather upper for a locked-down feel that supports quick changes of direction. A responsive midsole returns energy on every Euro step. The herringbone outsole provides extra traction as you start and stop on a dime." , quantity: 1, price: 110, category: "Basketball")
s4 = Shoe.create(name: "Marvel’s Iron Spider", img_url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d28fde4d72834193b0b5aa34000a154e_9366/MARVEL'S_IRON_SPIDER_or_D.O.N._ISSUE_1_SHOES_Red_EG0490_01_standard.jpg", description: "This iteration of the shoe is dubbed, “Iron Spider” which is a direct nod to the suit designed and built by Tony Stark for Peter Parker. It features a Red upper paired with Gold accents, a spider logo on the tongues completed with co-branded insoles.", quantity: 1, price: 100, category: "Basketball")
s5 = Shoe.create(name: "Nike Joyride Run Flyknit", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ualleqdfvwn1t3ohf449/joyride-run-flyknit-mens-running-shoe-LcCzGq.jpg", description: "The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage.", quantity: 1, price: 180, category: "Running")
s6 = Shoe.create(name: "Nike Epic React Flyknit 2", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/arroebv9hbiwws1hhaes/epic-react-flyknit-2-mens-running-shoe-0KFRGP.jpg", description: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.", quantity: 1, price: 150, category: "Running")
s7 = Shoe.create(name: "Nike React City Premium", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/tquewzztaeiodc0irhv0/react-city-premium-mens-running-shoe-4WLS34.jpg", description: "Named the React City, this running shoe was designed as a lightweight option for those living in urban environments that love hitting the pavement. Free of laces, the React City quickly slips on the foot and is secured with an asymmetrical zipper at the front.", quantity: 1, price: 160, category: "Running")
s8 = Shoe.create(name: "Nike Free RN Flyknit 3.0", img_url: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iwqohstwcp6lcu2nf1nq/free-rn-flyknit-3-mens-running-shoe-Qkpd3C.jpg", description: "Anatomical outsole follows your foot for the right amount of cushioning.", quantity: 1, price: 130, category: "Running")




o1 = Order.create(user_id: u1.id)

Selection.create(shoe_id: s1.id, order_id: o1.id)



