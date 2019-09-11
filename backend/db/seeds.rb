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
s9 = Shoe.create(name: "Nike Air Force 1 Low Retro", img_url: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803263_1.jpg", description: "The Nike Air Force 1 Low is inarguably one of the most essential sneakers of all time. First debuting on the basketball court in 1982, the Air Force 1 quickly became a staple of the streets where it’s remained ever since. When sneaker technology progressed and the Air Force 1 was no longer commonly found on the court, it was then adopted by the sneaker fanatics and hip-hop kids in New York City in the mid ’80s. Since then, it’s gone on to be one of the most worn shoes ever, with millions of pairs sold worldwide. With its clean, simple – yet bold – look, the amazingly comfortable Air Force 1has become a true classic. If you don’t have a pair of Air Force 1’s, can you really even call yourself a sneakerhead?", quantity: 1, price: 145 , category: "Casual")
s10 = Shoe.create(name: "Yeezy BoosT 350 V2 Lundmark", img_url: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg", description: "Like newer 350 V2 models, the adidas Yeezy Boost 350 V2 Lundmark sports a subtle summer color with the back heel tab removed. Replacing the SPLY-350 boost stripe that was traditionally found on the original 350s is a transparent stripe that reveals a more cream colored inner. A boost midsole is covered by a light tan rubber outsole that features a pink middle stripe. Adding to the exclusivity of these is the fact this colorway is a North and Latin America exclusive. ", quantity: 1, price: 340, category: "Casual")
s11 = Shoe.create(name: "Yeezy Boost 350 V2 Static", img_url: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805220_01.jpg", description: "Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. This Yeezy 350 V2 comes with a grey and white upper and a white sole.", quantity: 1, price: 475, category: "Casual")
s12 = Shoe.create(name: "CT ALL STAR DAINTY OX", img_url: "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/4/143390_01.jpg", description: "Set yourself apart from the rest with this diva-esque low-pro Chuck Taylor® All Star® Dainty Oxford", quantity: 1, price: 70, category: "Casual")
s13 = Shoe.create(name: "Nike Free X Metcon 2", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xhwcxmnavh1u6vh8prq5/free-x-metcon-2-mens-training-shoe-Jxsdml.jpg", description: "The Nike Free X Metcon will take you from a short run to your gym workout. Superior breathability and comfort combined with durability and response make this stable trainer perfect for even the most ambitious of fitness goals.", quantity: 1, price: 120, category: "Training")
s14 = Shoe.create(name: "Nike Metcon Sport", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xxrpk2ywr44uxlmvtlwh/metcon-sport-mens-training-shoe-bqcHgn.jpg", description: "The Nike Metcon Sport is designed for heavy weightlifting like all Metcons, but is updated for increased agility during explosive movements and speed drills.", quantity: 1, price: 100, category: "Training")
s15 = Shoe.create(name: "Nike Free TR 8", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rf586ydeyn6ax3h2hvvh/free-tr-8-mens-training-shoe-KCv0FL.jpg", description: "The Nike Free TR 8 Shoe provides a combination of lightweight stability and natural motion designed for your workout routine. Flywire technology locks you in, while the rubber pods on the outsole offer multi-surface traction so you can be at your best in and out of the gym.", quantity: 1, price: 100, category: "Training")
s16 = Shoe.create(name: "Jordan React Havoc Michigan", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zqw0c7k6njjavadrbjnr/jordan-react-havoc-michigan-mens-training-shoe-Jk6l5T.jpg", description: "The Jordan React Havoc Michigan is built for your toughest workouts. It features an energy-returning foam midsole paired with smooth cushioning for a responsive underfoot sensation. Wolverine details show off your team pride.", quantity: 1, price: 130, category: "Training")
s17 = Shoe.create(name: "Nike Air Max 1 G", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/iqtcf7jrzbihmzo08zrr/air-max-1-g-mens-golf-shoe-JHs1SV.jpg", description: "The Nike Air Max 1 G elevates an icon with details made for the course. Synthetic overlays mimic the design of the original Air Max 1, while helping keep your feet dry. A visible Max Air unit cushions each step for comfort from the first tee to the final green.", quantity: 1, price: 120 , category: "Golf")
s18 = Shoe.create(name: "Nike Roshe G", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wquvpxfbraigakzum9e0/roshe-g-mens-golf-shoe-Gkg9w1.jpg", description: "The Nike Roshe G Men's Golf Shoe features a mesh upper for breathability and a modern look, while the soft and flexible foam midsole cushions every step on and off the course.", quantity: 1, price: 80, category: "Golf")
s19 = Shoe.create(name: "Nike Janoski G", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uk35t21nv5ov5kdaxf8z/janoski-g-mens-golf-shoe-trQzc9.jpg", description: "The Nike Janoski G pairs the minimal look of a classic low-top skate shoe with the grip and cushioning you need to play 18 holes.", quantity: 1, price: 95, category: "Golf")
s20 = Shoe.create(name: "Nike Air Zoom Victory Tour", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c4p1j6bhyl22wxqwihbp/air-zoom-victory-tour-mens-golf-shoe-pwTh12.jpg", description: "The Nike Air Zoom Victory Tour redefines premium performance. Revolutionary cushioning delivers a soft, responsive ride, while sleek leather adds sophistication to every round.", quantity: 1, price: 180, category: "Golf")
# Shoe.create(name: " ", img_url: " ", description: " ", quantity: 1, price: , category: " ")




o1 = Order.create(user_id: u1.id)

Selection.create(shoe_id: s1.id, order_id: o1.id)



