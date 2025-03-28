"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure refs are current
    if (!videoRef.current || !imageContainerRef.current || !pageRef.current) return;

    // Create scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top top", // When the top of the trigger hits the top of the viewport
        end: "bottom bottom", // When the bottom of the trigger hits the bottom of the viewport
        scrub: true, // Smooth scrubbing effect
        pin: true, // Pin the page during animation
      }
    });

    // Video animation
    tl.fromTo(
      videoRef.current,
      { 
        scale: 1,
        opacity: 1
      },
      { 
        scale: 1.2, 
        opacity: 0.7,
        ease: "power1.inOut"
      }
    );

    // Image container animation
    if (imageContainerRef.current) {
      tl.fromTo(
        imageContainerRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.out"
        },
        0 // Start at the same time as the video animation
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={pageRef} 
      className='page1 relative h-screen w-full overflow-hidden'
    >
      <video 
        ref={videoRef} 
        className='absolute top-0 left-0 w-full h-full object-cover'
        src="/sample.mp4" 
        preload="auto"
        muted 
        loop 
      />
      <div 
        ref={imageContainerRef} 
        className='relative z-10 p-4 text-white'
      >
        {/* Your content goes here */}
        <h1 className='text-4xl font-bold'>Your Title</h1>
        <p className='mt-4'>Your descriptive text</p>
      </div>
    </div>
  );
};

export default VideoAnimation;