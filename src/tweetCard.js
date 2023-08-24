import React, { useState } from 'react';
import './tweetCard.css'
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { PiHeart } from "react-icons/pi";
import { FiBarChart2 } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";

const TweetCard = ({ name, username, image, tweetText, timestamp, style }) => {

    const [count, setCounter] = useState(0);

    const handleButtonClick = () => {
        setCounter(count + 1);
    };

    return (
      <div className={`card ${style} mb-3`}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src={image} alt={name} className="profile-img rounded-circle mr-3" />
            <div className="d-flex align-items-center">
              <h6 className="mb-0 margin-name">{name}</h6>
              <img src="./img/verified.png" alt="Verified" className="margin-verified" />
              <small className="margin-usarname">{username}</small>
              <small className="margin-date">· {timestamp}</small>
              <SlOptions alt="Reply" className="icon options margin-options rounded-circle" />
            </div>
          </div>
          <p className="card-text content-padding" dangerouslySetInnerHTML={{ __html: tweetText }}></p>
          <div className="d-flex justify-content-between content-padding">
            <BiMessageRounded alt="Reply" className="icon reply rounded-circle" onClick={handleButtonClick} />
              <small className="icon-count">{count}</small>
            <AiOutlineRetweet alt="Retweet" className="icon retweet rounded-circle" onClick={handleButtonClick} />
              <small className="icon-count">{count}</small>
            <PiHeart alt="Like" className="icon like rounded-circle" onClick={handleButtonClick} />
              <small className="icon-count">{count}</small>
            <FiBarChart2 alt="Analytics" className="icon analytics rounded-circle" onClick={handleButtonClick} />
              <small className="icon-count">{count}</small>
            <FiShare alt="Share" className="icon share rounded-circle" />
          </div>
        </div>
      </div>
    );
  };
  
  export default TweetCard;