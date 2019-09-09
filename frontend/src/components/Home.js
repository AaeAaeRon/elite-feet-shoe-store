import React from 'react'
// import NavBar from './NavBar'
import images from './images'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

 
const Home = () => {

    const [index, setIndex] = React.useState(0)

    return(
        <Gallery 
        index={index}
        onRequestChange={i => {
            setIndex(i)
        }}>
            {images.map(image => (
                <GalleryImage src={image}/>
            ))}
        
        </Gallery>
    )
}

export default Home;


