import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import ManaliImage from './assets/manali.jpg'
import GoaImage from './assets/goa.jpg'
import RajasthanImage from './assets/rajasthan.jpg'
import KokanImage from './assets/kokan.jpg'
import './App.css'
import BlogCard from './components/BlogCard'
import HomeImage from './assets/travel.jpg'


export default function App() {
  return (
    <>
    <Navbar/>
    <img src={HomeImage}/>
    <h1 className='text-center mx-auto p-1'>My Blogs</h1>
    <div className='d-flex justify-content-evenly flex-wrap, mb-lg-5'>
    <BlogCard image = {ManaliImage} title="Manali" desc="Manali is a popular hill station in Himachal Pradesh, India, known for its stunning natural beauty and adventurous activities. " link="/manali"/>
    <BlogCard image = {GoaImage} title="Goa" desc="Goa, India's smallest state, is a popular tourist destination known for its beautiful beaches" link="/goa"/>
    <BlogCard image = {RajasthanImage} title="Rajasthan" desc="Rajasthan, known as the Land of Kings is India's largest state, famous for its rich history, vibrant culture, and stunning architecture" link="/rajasthan"/>
    <BlogCard image = {KokanImage} title="Kokan" desc="Goa, India's smallest state, is a popular tourist destination known for its beautiful beaches" link="/kokan"/>
    </div>
    </>

  )
}
