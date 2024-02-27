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
    <div className='lg:flex justify-center xm:justify-start xb:justify-center md:justify-center md:flex bb:justify-center md:mt-[350px]'>
      <section className='pl-[10px] pt-[84px] md:w-[815px] xx:pl-0 lg:w-fit lg:relative overflow-hidden xx:mt-[285px] xx:pt-0 xx:w-[1657px] xx:max-w-[1657px] xm:max-w-[1400px] lg:max-w-[1280px]'>
        <div className='relative flex flex-col justify-center md:items-start md:pl-10 items-center lg:hidden'>
          <h2 className='text-dark text-[22px] font-Regular text-center md:text-start md:text-[18px] md:leading-[21.6px] leading-[26.4px]'>
            <span className='text-blue font-Medium'>Всего 5 шагов</span> и у вас
            будет <br className='md:flex hidden' /> свой ИИ-бот для бизнеса
          </h2>
          <img
            ref={headingRef}
            src='https://s3-alpha-sig.figma.com/img/2152/4b79/e4763653a5f4a7733547354e7fe3c1a9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEIOZP0Z7zqyq~QAnmj8sDzCimcgDcHRQd56TUidedaPpgNlCmAfyy5CN18LwiVH8~eRIHIG~-a1Mo8Vcw1KZd4oi4yT~cFXTHnw3DeljexqvMzYF6D-Yo1qCkSL73vBtJuvQkYs-TuPGtitNJjPPCgJH45AlBL7oypGy7IiuWmAUMu5PPNCl0edc0OOGtVMZ7w-7Z~oN6G473zKqf3xx8JaEeg7BVuM64jJgBuntB-j12rPY9zvSYWe6m5AfhpleVcMqPXaSJIsrSCEDGNay1g6lgnLaVP9G2KqLzrJLMrJ1QztrrgKfqN237zcsnqts5JSDclUIl0BElk3TnkV3g__'
            alt='img'
            className={`${
              isVisible ? 'fade-in-out' : ''
            } absolute top-0 w-[310px] h-[235px] md:top-[20px] scale-125 md:w-[411px] md:h-[144px] md:scale-100 md:object-cover md:left-[344px]`}
          />
        </div>
        <div className='flex flex-wrap gap-5 pt-[148px] md:justify-center md:hidden md:pt-[240px]'>
          {stepsArr.map((item, _) => (
            <div
              key={item.id}
              className='flex flex-col gap-[10px] md:max-w-[300px]'
            >
              <div className='flex justify-center items-center bg-blue w-[72px] h-[45px] rounded-[10px] relative'>
                <p className=' text-white font-Regular text-[40px] pt-2'>
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
        <h2 className='text-dark text-[36px] leading-[39.2px] hidden lg:block'>
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
                <div className='flex justify-center items-center bg-blue w-[72px] h-[45px] rounded-[10px] relative'>
                  <p className=' text-white font-Regular text-[40px] absolute top-[-3px] left-[10px]'>
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
          <div className='flex justify-end pr-[10px] xb:pr-[90px] pt-[60px]'>
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
                  <p className=' text-white font-Regular text-[40px] absolute top-[-3px] left-[10px]'>
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
        <div className='hidden lg:flex flex-col xx:hidden pt-[67px] pl-[1px]'>
          <div className='flex gap-[30px]'>
            {stepsArr.slice(0, 2).map((item, _) => (
              <div
                key={item.id}
                className='flex flex-col gap-[5px] w-[309px] h-[175px]'
              >
                <div className='flex justify-center items-center bg-blue pt-2 w-[72px] min-h-[45px] rounded-[10px] relative'>
                  <p className=' text-white font-Regular text-[40px]'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[20px] leading-[28.6px] pt-[4.5px] ${
                    item.id === 1 && ' w-[298px]'
                  } ${item.id === 2 && ' w-[278px]'}`}
                >
                  {item.name}
                </h3>
                <p className='text-[16px] leading-[19.2px] xm:text-[15px] font-Regular pt-[2px]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-end xm:ml-[340px] pr-[6px] pt-[60px]'>
            {stepsArr.slice(2, 5).map((item, _) => (
              <div
                key={item.id}
                className={`flex flex-col gap-[5px] ${
                  item.id === 3 && 'w-[346px] mr-[55px]'
                }  ${item.id === 4 && 'w-[360px] mr-[41px]'}  ${
                  item.id === 5 && 'w-[361px]'
                } `}
              >
                <div className='flex justify-center items-center bg-blue pt-2 w-[72px] h-[45px] rounded-[10px] relative'>
                  <p className=' text-white font-Regular text-[40px]'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[20px] leading-[28.6px] pt-[4.5px] ${
                    item.id === 4 && 'w-[295px]'
                  }`}
                >
                  {item.name}
                </h3>
                <p className='text-[16px] leading-[19.2px] xm:text-[15px] font-Regular pt-[2px]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:flex ml-10 lg:hidden flex-col pt-[16px] '>
          <div className='flex gap-[5px]'>
            {stepsArr.slice(0, 2).map((item, _) => (
              <div
                key={item.id}
                className='flex flex-col gap-[5px] max-w-[164px] h-[110px]'
              >
                <div className='flex justify-center items-center bg-blue w-[29px] h-[18px] pt-1 rounded-[4px] relative'>
                  <p className=' text-white font-Regular text-[16px] leading-[20.8px]'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[12px] leading-[15.6px] pt-[4px] ${
                    item.id === 1 && ' w-[148px]'
                  } ${item.id === 2 && ' w-[135x]'}`}
                >
                  {item.name}
                </h3>
                <p className='text-[10px] leading-[12px] font-Regular'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-end  pr-[78px] gap-[6px] pt-[21px]'>
            {stepsArr.slice(2, 5).map((item, _) => (
              <div
                key={item.id}
                className='flex flex-col max-w-[177px] h-[131px]'
              >
                <div className='flex justify-center items-center bg-blue w-[29px] h-[18px] pt-1 rounded-[4px] relative'>
                  <p className=' text-white font-Regular text-[16px] leading-[20.8px]'>
                    {item.count}
                  </p>
                </div>
                <h3
                  className={`font-Medium text-blue text-[12px] leading-[15.6px] pt-[8.2px] ${
                    item.id === 3 && ' w-[147px]'
                  } ${item.id === 4 && 'w-[146px]'}`}
                >
                  {item.name}
                </h3>
                <p
                  className={`text-[10px] leading-[12px] font-Regular pt-1 ${
                    item.id !== 5 ? 'w-[164px]' : 'w-[142px]'
                  } ${item.id === 4 ? 'pt-[37px]' : ''}  ${
                    item.id === 5 ? 'pt-[22px]' : ''
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          ref={headingRef}
          src='https://s3-alpha-sig.figma.com/img/2152/4b79/e4763653a5f4a7733547354e7fe3c1a9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEIOZP0Z7zqyq~QAnmj8sDzCimcgDcHRQd56TUidedaPpgNlCmAfyy5CN18LwiVH8~eRIHIG~-a1Mo8Vcw1KZd4oi4yT~cFXTHnw3DeljexqvMzYF6D-Yo1qCkSL73vBtJuvQkYs-TuPGtitNJjPPCgJH45AlBL7oypGy7IiuWmAUMu5PPNCl0edc0OOGtVMZ7w-7Z~oN6G473zKqf3xx8JaEeg7BVuM64jJgBuntB-j12rPY9zvSYWe6m5AfhpleVcMqPXaSJIsrSCEDGNay1g6lgnLaVP9G2KqLzrJLMrJ1QztrrgKfqN237zcsnqts5JSDclUIl0BElk3TnkV3g__'
          alt='img'
          className={`${
            isVisible ? 'fade-in-out' : ''
          } absolute xx:top-[5px] xx:w-[936px] xx:left-[700px]  xm:left-[600px] xm:w-[750px] xm:top-[150px] xm:h-[300px] xx:h-[330px] lg:w-[636px] lg:right-[-75px] lg:h-[240px] lg:top-[220px] object-cover hidden lg:flex`}
        />
      </section>
    </div>
  );
};

export default Steps;
