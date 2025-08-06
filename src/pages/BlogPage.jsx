import React from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import ManaliImage from '../assets/manaliimg.jpg'
import GoaImage from '../assets/goaimg.jpg'
import RajasthanImage from '../assets/rajimg.jpg'
import KokanImage from '../assets/kokanimg.jpg'

export default function BlogPage(props) {
    let blogs = {
        manali: {
            title:"Manali",
            img: ManaliImage,
            desc:"Manali, located in the heart of Himachal Pradesh, India, is a picturesque hill station renowned for its stunning natural beauty and rich cultural heritage. Nestled on the banks of the Beas River and surrounded by snow-capped Himalayan peaks, Manali’s lush green valleys, dense forests, and clear rivers create a breathtaking landscape often called the Valley of the Gods. It is historically significant as the abode of Manu, the legendary sage who is believed to have re-established human life here after a great flood. The town offers a blend of adventure and serenity with activities like trekking, skiing, paragliding, and white-water rafting, making it a favored destination for thrill-seekers. Key cultural landmarks include the Hadimba Devi Temple with its unique pagoda architecture, the Manu Temple, and the hot springs of Vashisht village known for their therapeutic properties. Manali’s vibrant local festivals, diverse cuisine featuring both vegetarian and non-vegetarian Himachali dishes, and bustling markets add to its charm. It serves as a base for exploring the Rohtang Pass, Solang Valley, and nearby wildlife sanctuaries, attracting tourists for both leisure and adventure throughout the year, especially during the pleasant summer months."
        },
        goa: {
            title:"Goa",
            img: GoaImage,
            desc:"Goa is a vibrant coastal state in western India known for its beautiful beaches, rich cultural heritage, and lively nightlife. It attracts tourists with its stunning shorelines like Baga, Calangute, and Palolem, offering opportunities for water sports such as kayaking, windsurfing, and scuba diving. Besides beaches, Goa features important historical sites like the Basilica of Bom Jesus, a UNESCO World Heritage Site, and several forts including Fort Aguada and Chapora Fort. The state is also famous for its vibrant festivals, delicious seafood, spice plantations, and unique blend of Portuguese and Indian architecture. Nature lovers can explore wildlife sanctuaries, waterfalls like Dudhsagar, and scenic hill forts. Goa’s warm climate, friendly vibe, and diverse attractions make it a popular destination for leisure, adventure, and cultural tourism."
        },
        rajasthan: {
            title:"Rajasthan",
            img: RajasthanImage,
            desc:"Rajasthan is a vibrant and culturally rich state in northwest India, known for its majestic forts, palaces, vast deserts, and colorful traditions. It has a history that dates back over 5000 years, with influences from the Indus Valley civilization and rule by Rajput kings, Mughals, and Marathas. The state is famous for its unique art forms, including miniature paintings, block printing, and blue pottery. Rajasthani culture is marked by traditional music, dance forms like Ghoomar and Kalbeliya, and distinctive attire such as colorful ghagras and turbans. Its cuisine features iconic dishes like dal bati churma and laal maas. Hospitality is integral to the culture, with the belief that guests are akin to gods. Rajasthan celebrates numerous vibrant festivals and maintains a rich heritage reflected in its architecture, handicrafts, and social customs, making it a captivating blend of history and tradition."
        },
        kokan: {
            title:"Kokan",
            img: KokanImage,
            desc:"The Konkan region is a coastal plain along the western coast of India, extending about 530 kilometers from the Daman Ganga River near Mumbai in the north to the Terekhol River on the border of Maharashtra and Goa in the south. It lies between the Arabian Sea to the west and the Western Ghats mountain range to the east. The region spans parts of Maharashtra, Goa, and Karnataka states and includes districts like Thane, Mumbai, Ratnagiri, and Raigad. The terrain consists of forested hills, lateritic plateaus, and a coastline with alternating bays and headlands. Seasonal rivers flow from the Western Ghats, draining heavy monsoon rains. The Konkan area is known for its rich biodiversity, dense mangroves, and marine flora and fauna. The region's economy relies on agriculture, with crops such as rice, pulses, fruits, vegetables, and coconuts, alongside fishing and salt production. Mumbai, the largest city in Konkan, acts as the main economic hub. Historically, the Konkan coast was an important trading area that hosted ancient civilizations and various cultural influences. The local population includes communities like Bhil, Kathkari, and Kokana, with diverse cultural practices. The Konkan region is also known for its scenic beaches, forts, temples, and a unique cultural and culinary heritage, making it a notable destination for tourism and cultural exploration."
        }
    }
    const {name} = useParams();
  return (
    <>
    <Navbar/>
    <h1 className='text-center'>{blogs[name].title}</h1>
    <img src={blogs[name].img} alt={name} height={"350px"} />
    <p className='text-break, fst-italic, text-secondary'>{blogs[name].desc}</p>

    </>
  )
}
