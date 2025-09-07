import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import Video from './Video/Video'
import { VIDEOS } from './videos'
import Header from "./Header";


function App() {
  return (
    <>
    <div className='font-oxanium'>
      <Header />
      {/* сюда пойдёт остальная страница */}



      <section id="about" className="h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-4xl">ABOUT US</h2>
      </section>

      <section id="services" className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl">Services</h2>
      </section>

      <section id="prices" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h2 className="text-4xl">Prices</h2>
      </section>
   

        <div className="video-container, inset-0 mx-auto bg-amber-200">
          <div className="flex items-center gap-2">
            <div className="h-20 w-20 bg-purple-600" />
            <div className="h-20 w-20 bg-purple-600" />
            <div className="h-20 w-20 bg-purple-600" />
            <div className="h-20 w-20 bg-purple-600" />
          </div>

          <h1 className="mt-5 text-center text-4xl font-bold text-pink-500">
            Hello world!
          </h1>
          <div className="m-5 h-32 w-24 bg-blue-400">fghjkl</div>
          {/*<Video title='Video1' channelName='Channel1' img={reactLogo}/>*/}
          {VIDEOS.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              channelName={video.channelName}
              img={video.img}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
