'use client';
import React, { useEffect, useRef, useState } from 'react';

const NextBot = () => {
  const [showCircle, setShowCircle] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = animationRef.current;
    if (element) {
      const handleAnimationEnd = () => setShowCircle(true);
      element.addEventListener('animationend', handleAnimationEnd);

      return () => {
        element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

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

  const pathLength = 1246;
  return (
    <section className='px-[10px] pt-20 xx:pt-[171px] xx:flex flex-col items-center'>
      <div className='xx:flex justify-center'>
        <h2 className='text-[22px] text-dark font-Regular text-center leading-[26.4px] xx:w-[1024px] xx:text-[36px] xx:leading-[43.2px] md:text-[28px]'>
          В сервисе NextBot каждый может
          <span className='text-blue font-Bold'>
            {' '}
            легко и быстро,
            <br className='ss:hidden xx:flex' /> без специальных знаний
          </span>{' '}
          создать ИИ-бота для бизнеса
        </h2>
      </div>
      <div className='flex flex-col items-center pt-[10px] md:pt-5 xx:pt-3 relative max-w-[1920px] xx:justify-center'>
        <div className='pb-2 px-6 xx:flex justify-center xx:border-b-0  border-b-[1px] border-blue rounded-[20px]'>
          <p className='text-base text-dark font-Regular text-center leading-[20.8px] w-[259px] mm:w-fit xx:text-[22px] xx:leading-[28.4px] xx:px-[150px] xx:pb-3 md:text-[18px]'>
            Мы бесплатно научим, как правильно выставить настройки
            <br className='ss:hidden' /> и какую{' '}
            <br className='md:flex hidden' /> инструкцию написать для бота,
            чтобы он отвечал корректно
          </p>
          <div
            ref={headingRef}
            className='absolute left-0 top-[68px] hidden xx:flex'
          >
            <svg
              width='1047'
              height='21'
              viewBox='0 0 1047 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1046 1V1C1046 11.4934 1037.49 20 1027 20H20C9.50657 20 1 11.4934 1 1V1'
                stroke='#4F56D3'
                strokeLinecap='round'
                style={{
                  strokeDasharray: `${pathLength}`,
                  strokeDashoffset: `${pathLength}`,
                }}
                className={` ${isVisible && 'path-animation'}`}
              />
            </svg>
          </div>
        </div>
        <div className='w-[1px] h-[67px] bg-blue relative xx:h-[113px] mr-[1px] xx:hidden'>
          <div className='trans bottom-[-15px] absolute w-4 h-4 xx:size-[21px] flex justify-center items-center bg-cloud rounded-full'>
            <div className=' w-2 h-2 bg-blue rounded-full xx:size-[11px]' />
          </div>
        </div>
        <div
          ref={animationRef}
          className={`hidden xx:block w-[1px] bg-blue relative ${
            isVisible && 'fill-height-animation'
          }`}
        >
          {showCircle && (
            <div className='outer-circle trans bottom-[-15px] absolute'>
              <div className='inner-circle'></div>
            </div>
          )}
        </div>
      </div>
      <div className='pt-[14px] flex flex-col items-center mm:pt-5 xx:pt-[28px]'>
        <p className=' text-[14px] text-dark font-Regular text-center leading-[18.2px] mm:text-base xx:leading-[26px] md:w-[479px] xx:pr-[10px] md:text-[20px]'>
          Посмотрите видео и за 5 минут сами убедитесь, что собрать ИИ-бота под{' '}
          <br className='ss:hidden' /> силу каждому
        </p>
        <div className='bg-blue flex justify-center items-center rounded-[10px] h-[168px] mt-2 ss:w-[355px] w-[300px]  md:w-[558px] md:h-[306px]  xx:w-[778px] xx:h-[436px] xx:rounded-[20px]'>
          <div className='size-[67px] md:size-[113px] flex justify-center items-center bg-cloud rounded-full xx:size-[173px] pl-2'>
            <div
              className='relative w-0 h-0 rotate-90 md:hidden'
              style={{
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderBottom: '30px solid #CDFF65',
              }}
            ></div>
            <div
              className='md:flex hidden relative w-0 h-0 rotate-90 ml-4'
              style={{
                borderLeft: '42px solid transparent',
                borderRight: '42px solid transparent',
                borderBottom: '70px solid #CDFF65',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextBot;
