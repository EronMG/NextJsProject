'use client';
import { stepsArr } from '@/Types/Arrays';
import React, { useEffect, useRef, useState } from 'react';

const Steps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLImageElement>(null);

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
    <div className='xx:flex justify-center'>
      <section className='pl-[10px] pt-[84px] xx:relative overflow-hidden xx:mt-[285px] xx:pt-0 xx:pl-[38px] xx:w-[1657px]'>
        <div className='relative flex flex-col justify-center items-center xx:hidden'>
          <h2 className='text-dark text-[22px] font-Regular text-center leading-[26.4px]'>
            <span className='text-blue font-Medium'>Всего 5 шагов</span> и у вас
            будет свой ИИ-бот для бизнеса
          </h2>
          <img
            ref={headingRef}
            src='https://s3-alpha-sig.figma.com/img/2152/4b79/e4763653a5f4a7733547354e7fe3c1a9?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hd7rtRYYWvKle166qShVpjUu0Kf4n2MxmAqMW0NFKhujcW0xxLOm3uWU239NOrQAAvu~IeISFr~mNqL9oRk3GJ27ZQSubEjbjhAvmR467SuA~jhN3U~VhqvVx31P8avUUoGqA6PSJNnRSicapAc4vkHhSaFnpxCQk8-OhO5s3X1GGhVgJRLxc07kI9hnZYbfodx8pFHNZQ5JDnLePuuCdYuqQoXmwIXUWxTui8TOaSSQB9Pay6vtY0REHsGu4etAoLhsMZRyuSRYuzpqZvoWwqpl5MlAG8YTx5~QzkUQdOjuPjz-G15A8VrlZ1YT6aJayv8qJMOVEfncdcIvgsAQbQ__'
            alt='img'
            className={`${
              isVisible ? 'fade-in-out' : ''
            } absolute top-0 w-[310px] h-[235px] scale-125`}
          />
        </div>
        <div className='flex flex-wrap gap-5 pt-[148px] xx:hidden'>
          {stepsArr.map((item, _) => (
            <div key={item.id} className='flex flex-col gap-[10px]'>
              <div className='flex justify-center items-center bg-blue w-[72px] h-[45px] rounded-[10px] relative'>
                <p className=' text-white font-Regular text-[40px] absolute top-0'>
                  {item.count}
                </p>
              </div>
              <h3
                className={`font-Medium text-blue text-base leading-[20.8px] ${
                  item.id === 3 ? 'w-[260px]' : ''
                }`}
              >
                {item.name}
              </h3>
              <p className='text-[14px] leading-[16.8px] font-Regular'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <h2 className='text-dark text-[36px] leading-[39.2px] hidden xx:block'>
          <span className='text-blue font-Medium'>Всего 5 шагов</span> и у вас
          будет <br /> свой ИИ-бот для бизнеса
        </h2>
        <div className='hidden xx:flex flex-col pt-[67px] pl-[1px]'>
          <div className='flex gap-[70px]'>
            {stepsArr.slice(0, 2).map((item, _) => (
              <div
                key={item.id}
                className='flex flex-col gap-[5px] w-[329px] h-[175px]'
              >
                <div className='flex justify-center items-center bg-blue w-[72px] min-h-[45px] rounded-[10px] relative'>
                  <p className=' text-white font-Regular text-[40px] absolute top-0'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[22px] leading-[28.6px] pt-[4.5px] ${
                    item.id === 1 && ' w-[298px]'
                  } ${item.id === 2 && ' w-[278px]'}`}
                >
                  {item.name}
                </h3>
                <p className='text-[16px] leading-[19.2px] font-Regular pt-[2px]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-end pr-[56px] pt-[60px]'>
            {stepsArr.slice(2, 5).map((item, _) => (
              <div
                key={item.id}
                className={`flex flex-col gap-[5px] ${
                  item.id === 3 && 'w-[346px] mr-[55px]'
                }  ${item.id === 4 && 'w-[360px] mr-[41px]'}  ${
                  item.id === 5 && 'w-[361px]'
                } `}
              >
                <div className='flex justify-center items-center bg-blue w-[72px] h-[45px] rounded-[10px] relative'>
                  <p className=' text-white font-Regular text-[40px] absolute top-0'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[22px] leading-[28.6px] pt-[4.5px] ${
                    item.id === 4 && 'w-[295px]'
                  }`}
                >
                  {item.name}
                </h3>
                <p className='text-[16px] leading-[19.2px] font-Regular pt-[2px]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          ref={headingRef}
          src='https://s3-alpha-sig.figma.com/img/2152/4b79/e4763653a5f4a7733547354e7fe3c1a9?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hd7rtRYYWvKle166qShVpjUu0Kf4n2MxmAqMW0NFKhujcW0xxLOm3uWU239NOrQAAvu~IeISFr~mNqL9oRk3GJ27ZQSubEjbjhAvmR467SuA~jhN3U~VhqvVx31P8avUUoGqA6PSJNnRSicapAc4vkHhSaFnpxCQk8-OhO5s3X1GGhVgJRLxc07kI9hnZYbfodx8pFHNZQ5JDnLePuuCdYuqQoXmwIXUWxTui8TOaSSQB9Pay6vtY0REHsGu4etAoLhsMZRyuSRYuzpqZvoWwqpl5MlAG8YTx5~QzkUQdOjuPjz-G15A8VrlZ1YT6aJayv8qJMOVEfncdcIvgsAQbQ__'
          alt='img'
          className={`${
            isVisible ? 'fade-in-out' : ''
          } absolute top-[5px] w-[936px] right-[-37px] h-[330px] object-cover hidden xx:flex`}
        />
      </section>
    </div>
  );
};

export default Steps;
