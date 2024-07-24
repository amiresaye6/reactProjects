import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loadingV3.json';

const LottieAnimation2 = () => {
  return (
    <>
      <Lottie className='animationLoader' animationData={animationData} loop={true} />
    </>
  );
};

export default LottieAnimation2;
