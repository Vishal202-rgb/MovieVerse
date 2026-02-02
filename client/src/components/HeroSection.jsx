import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} className='max-h-11 lg:h-11 mt-20' alt="" />
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Every Screen Has a Story <br/> Secure Your Seat.</h1>
        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | </span>
          <span>Adventure | </span>
          <span>Comedy | </span>
          <span>Drama | </span>
          <div className='flex items-center gap-1'>
            <CalendarIcon className='inline-block w-5 h-5 mr-1' /> 2026
          </div>
          <div className='flex items-center gap-1'>
            <ClockIcon className='inline-block w-5 h-5 mr-1' /> 3h 26m
          </div>
        </div>
        <p className='text-gray-300'>Experience the thrill of cinema with our exclusive movie listings and showtimes.</p>
        <button onClick={()=>navigate('/movies')} className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md mt-4'>
          Explore Movies
          <ArrowRight className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HeroSection