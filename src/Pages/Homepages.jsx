import React from 'react'
import Cards from '../components/Cards'

function Homepages() {
  return (
    <div>
         <div 
        className='relative bg-cover bg-center  shadow-lg w-full h-[450px] flex justify-center items-center'
        style={{ backgroundImage: `url("https://i.pinimg.com/1200x/7c/a1/13/7ca113b5a7d018870e27ff0465caaae0.jpg")` }}>
       
        <div className="absolute inset-0 bg-black/30"></div>

        <div className='relative z-10 w-[90%] max-w-6xl flex justify-between items-center p-5'>
        
          <div className='w-96'>
            <h1 className='text-4xl font-bold mt-25 text-g-900 leading-snug'>
            New Collection Will Coming Soon. <div className='text-xl text-gray-700'>Get Ready To Shop With Us.</div> 
            </h1>
            <button type="button" className='bg-gray-600 text-white rounded-lg mt-7 h-12 px-8 text-2xl font-semibold shadow-xl transition-all'>
              Buy Now
            </button>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <img 
                src="https://i.pinimg.com/736x/14/32/24/1432244c04b4e46547b947e876cfde69.jpg" 
                alt="Headphone 1"
                className="w-40 h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
              />
              <img 
                src="https://i.pinimg.com/originals/26/0f/a2/260fa2cd8230ef947686bf32fb8ae7a7.png" 
                alt="Headphone 2"
                className="w-40 h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
              />
            </div>
            
            <img 
              src="https://i.pinimg.com/1200x/8c/c2/72/8cc27283dbb2d5498d74fc28a23a6d8f.jpg" 
              alt="Headphone 3"
              className="w-48 h-[21.5rem] object-cover rounded-2xl shadow-2xl border-4 border-white/50"
            />
          </div>
        </div>
        
      </div>
        <Cards />
    </div>
  )
}

export default Homepages