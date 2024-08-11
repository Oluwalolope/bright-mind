import React from 'react';
import { FaPlay } from 'react-icons/fa';
import videoPreview from '../assets/video-preview.jpg';


const VideoPreview = () => {
    return (
      <section className="videoPreview">
        <div className="preview--info">
          <h2>Affordable Packages</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="videoPlayer">
            <div className='gradient'></div>
            <img src= { videoPreview } alt="An advertisement" className='media' />
            <button className='play'>
                <FaPlay />
            </button>
        </div>
      </section>
    );
}

export default VideoPreview;