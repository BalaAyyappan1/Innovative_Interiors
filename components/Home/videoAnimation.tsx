"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoAnimation: React.FC = () => {
  //

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    })
  }, [])

  return (
    <div>
      hi
      <video ref={videoRef} src="/vd.mov" preload="auto" />
    </div>
  );
};

export default VideoAnimation;
