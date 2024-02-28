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
    <section className='px-[10px] pt-20 lg:pt-[171px] xm:pt-20 lg:flex flex-col items-center md:pt-[70px]'>
      <div className='lg:flex justify-center'>
        <h2 className='text-[22px] text-dark font-Regular text-center leading-[26.4px] lg:w-[1024px] lg:text-[36px] lg:leading-[43.2px] md:text-[18px] md:leading-[21.6px]'>
          В сервисе NextBot каждый может
          <span className='text-blue font-Bold'>
            {' '}
            легко и быстро,
            <br className='ss:hidden md:flex' /> без специальных знаний
          </span>{' '}
          создать ИИ-бота для бизнеса
        </h2>
      </div>
      <div className='flex flex-col items-center pt-[10px] md:pt-1 lg:pt-3 relative max-w-[1920px] lg:justify-center'>
        <div className='pb-2 px-6 lg:flex justify-center md:border-b-0 relative border-b-[1px] border-blue rounded-[20px] md:rounded-[10px]'>
          <p className='text-base text-dark font-Regular text-center leading-[20.8px] w-[259px] mm:w-fit lg:text-[22px] lg:leading-[28.4px] lg:px-[50px] lg:pb-[10px] md:text-[12px] md:leading-[15.6px]'>
            Мы бесплатно научим, как правильно выставить настройки
            <br className='ss:hidden' /> и{' '}
            <br className='hidden md:flex lg:hidden' /> какую{' '}
            <br className='lg:flex hidden' /> инструкцию написать для бота,
            чтобы он отвечал корректно
          </p>

          <div
            ref={headingRef}
            className='absolute left-[0] top-[25px] hidden lg:hidden md:flex'
          >
            <svg
              width='425'
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

          {/* <div
            ref={headingRef}
            className='absolute left-[-100px] top-[68px] hidden xx:flex'
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
          </div> */}
        </div>
        <div className='w-[1px] h-[43.2px] bg-blue relative hidden md:hidden '>
          <div className='trans bottom-[-7px] absolute size-[8px] flex justify-center items-center bg-cloud rounded-full'>
            <div className='size-[4px] bg-blue rounded-full lg:size-[11px]' />
          </div>
        </div>
        <div
          ref={animationRef}
          className={`hidden md:block lg:hidden w-[1px] bg-blue relative ${
            isVisible && 'fill-height-animation'
          }`}
        >
          {showCircle && (
            <div className='outer-circle2 trans bottom-[-15px] absolute'>
              <div className='inner-circle2'></div>
            </div>
          )}
        </div>
      </div>
      <div className='pt-[14px] flex flex-col items-center mm:pt-5 lg:pt-[28px] md:pt-[11px]'>
        <p className='lg:text-[14px] text-dark font-Regular text-center  md:text-[10px] lg:leading-[26px] md:leading-[13px] lg:w-fit md:w-[240px] lg:pr-[10px]'>
          Посмотрите видео и за 5 минут сами убедитесь, что собрать ИИ-бота под{' '}
          <br className='ss:hidden' /> силу каждому
        </p>
        <div className='bg-blue flex justify-center md:mt-[10px] items-center rounded-[10px] h-[168px] mt-2 ss:w-[355px] w-[300px]  md:w-[329px] md:h-[185px]  lg:w-[778px] lg:h-[436px] lg:rounded-[20px]'>
          <div className='size-[67px] md:size-[73.5px] flex justify-center items-center bg-cloud rounded-full lg:size-[173px] pl-2'>
            <div
              className='relative w-0 h-0 rotate-90 md:hidden'
              style={{
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderBottom: '30px solid #CDFF65',
              }}
            ></div>
            <div
              className='md:flex lg:hidden hidden relative w-0 h-0 rotate-90 ml-1'
              style={{
                borderLeft: '18px solid transparent',
                borderRight: '18px solid transparent',
                borderBottom: '31px solid #CDFF65',
              }}
            ></div>
            <div
              className='lg:flex hidden relative w-0 h-0 rotate-90 ml-4'
              style={{
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
                borderBottom: '81px solid #CDFF65',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextBot;
