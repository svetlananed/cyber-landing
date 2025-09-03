import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Video from './Video/Video'
import { VIDEOS } from './videos'

function App() {
  return (
    <>
      <div className='video-container'>
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
    </>
  )
}

export default App
