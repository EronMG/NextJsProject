'use client';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  size: 'large' | 'normal';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`${
        isVisible ? 'fade-in-out' : ''
      } md:max-w-[1000px] max-w-[287px] text-[22px] leading-[26.4px] text-center font-Bold text-dark pl-2 md:text-[32px] md:leading-[36.4px] lg:text-[42px] lg:leading-[50.4px]`}
    >
      <em className='text-blue not-italic underline underline-offset-4 decoration-[1.5px] lg:underline-offset-[8px]'>
        Создай ИИ-ассистента
      </em>
      для бизнеса
      <em className='font-Regular'> за 5 минут</em> без знаний программирования
    </h1>
  );
};

export default AnimatedHeading;
