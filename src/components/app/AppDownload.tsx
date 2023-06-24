import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import "./appDownload.css";
import StarRating from "../../theme/rating/StarRating";
const AppDownload = () => {
  return (
    <div className="app-section">
      <div className="text">
        <h1>Get the app</h1>
        <h4>Rated 4.9 out of 5 by more than 150k reviewers.</h4>
        <p>
          Register in the app and be ready to see a doctor, therapist or
          psychiatrist anytime, anywhere. Available for iPhone and Android.
        </p>
      </div>
      <div className="icons">
        <div className="play-app-store">
          <img src='/playStore.png' alt='playStore'/>
          <img src='/appStore.png' alt='appStore'/>
        </div>
        <div className="reviews">
          <span>4.9</span>
          <StarRating rating={4.9} />
          
         

        </div>
        <p>190.7k Rating</p>
      </div>
    </div>
  );
};

export default AppDownload;
