import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loadingV2.json';
import './LottieAnimation1.css'

const LottieAnimation1 = () => {
  return (
    <>
      <Lottie className='animationLoader' animationData={animationData} loop={true} />
    </>
  );
};

export default LottieAnimation1;
