"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null); // Reference for the image container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the image container while the video is playing
    const pinAnimation = gsap.to(imageContainerRef.current, {
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top top",
        end: "+=500", // Adjust this value based on your animation length
        pin: true,
        scrub: true,
        markers:true,
        onLeave: () => {
          // Unpin when scrolling past the trigger
          gsap.to(imageContainerRef.current, { clearProps: "all" });
        },
      },
      duration: 1,
    });

    const handleVideoEnd = () => {
      // Unpin the images when the video ends
      gsap.to(imageContainerRef.current, { clearProps: "all" });
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      pinAnimation.kill(); // Clean up the animation on component unmount
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <div>
      hi
      <video ref={videoRef} src="/sample.mp4" preload="auto" />
      <div ref={imageContainerRef}>
        {/* Your images go here */}
      </div>
    </div>
  );
};

export default VideoAnimation;