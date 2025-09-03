import { useState } from 'react';
import './Video.css';

function Video(props) {
    const { title, channelName, img } = props;
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesByOne = () => {
        setLikesCount(likesCount + 1);
        //console.log(title, likesCount)
    };
    return (
        <div className='video'>
            <img className='video-img' src = {img}></img>
            <p>{title}</p>
            <p>{channelName}</p>
            <div className='video-footer'>
                <p>Likes: {likesCount}</p>
                <button onClick={increaseLikesByOne}>Like!</button>
            </div>
        </div>
    );
}

export default Video;