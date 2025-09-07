import { useState } from 'react'
import './Video.css'

function Video(props) {
  const { title, channelName, img } = props
  const [likesCount, setLikesCount] = useState(0)

  const increaseLikesByOne = () => {
    setLikesCount(likesCount + 1)
    //console.log(title, likesCount)
  }
  return (
    <div className="video">
      <img className="video-img" src={img}></img>
      <p>{title}</p>
      <p>{channelName}</p>
      <div className="video-footer bg-amber-300 text-amber-100">
        <p>Likes: {likesCount}</p>
        <button
          className="mt-10 block animate-bounce rounded border border-solid border-pink-700 bg-green-300 px-2 transition-colors duration-300 ease-in-out hover:bg-amber-400"
          onClick={increaseLikesByOne}
        >
          Like!
        </button>
      </div>
    </div>
  )
}

export default Video
