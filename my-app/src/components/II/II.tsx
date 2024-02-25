'use client';
import React, { useEffect, useRef, useState } from 'react';
import { iiArr } from '@/Types/Arrays';
import Mobile from '@/Images/mobile.jpg';
import Line from '@/Images/IIline.svg';

const II = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 2000; // 2 seconds
      const startTime = performance.now();
      const initialWidth = imageWidth;

      const updateImageWidth = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(1, elapsedTime / animationDuration);
        const newWidth = initialWidth + 50 * progress; // Adjust the factor as needed

        setImageWidth(newWidth + 70);

        if (progress < 1) {
          requestAnimationFrame(updateImageWidth);
        }
      };

      requestAnimationFrame(updateImageWidth);
    }
  }, [isVisible]);

  const pathLength = 2400;
  return (
    <section className='pt-[71px] px-[10px] bb:pt-[180px] bb:px-0 lg:relative bb:flex justify-center lg:mb-[100px] bb:mb-0'>
      <div className='bb:w-[1920px] bb:relative'>
        <h2 className='text-[22px] leading-[26.4px] font-Regular md:text-[18px] md:leading-[21.6px] text-center text-dark bb:text-[36px] lg:text-[26px] bb:leading-[43.2px] max-w-[979px] lg:text-start bb:ml-[170px]'>
          ИИ-бот на 100% походит на человека и не придумывает ничего лишнего при{' '}
          <br className='md:hidden' />
          общении с клиентами
        </h2>
        <div className='flex flex-wrap md:hidden lg:flex gap-5 justify-center pt-6 bb:gap-[200px] bb:pt-[62px] bb:pl-[1110px]'>
          {iiArr.map((item, _) => (
            <div
              key={item.id}
              className={`flex flex-col items-center max-w-[355px] xx:gap-[5px] lg:flex-col-reverse ${
                item.id === 1 &&
                'lg:absolute bb:left-[232px] bb:bottom-[18px] lg:left-[58px] bottom-[-55px]'
              } ${
                item.id === 2 &&
                'lg:absolute bb:left-[778px] bb:bottom-[-50px] lg:left-[870px] bottom-[-37px]'
              }`}
            >
              <div
                className={`size-[21px] bg-cloud rounded-full justify-center items-center flex bb:mt-4 ${
                  item.id === 2 && 'bb:absolute bottom-[-50px] left-[178px]'
                } ${
                  item.id === 1 && 'bb:absolute bottom-[-42px] left-[168px]'
                }`}
              >
                <div className='size-[11px] bg-blue rounded-full' />
              </div>
              <p
                className={`text-[13px] leading-[16.8px] text-center text-dark pt-1 bb:text-xl bb:leading-6 bb:pt-3 ${
                  item.id === 1 && 'bb:w-[448px]'
                } ${item.id === 2 && 'bb:w-[390px] '} ${
                  item.id === 3 && 'bb:w-[396px]'
                }`}
              >
                {item.title}
              </p>
              <img
                src={Mobile.src}
                alt='icon'
                className='w-[197px] h-[308px] mt-[10px] md:w-[103px] md:h-[161px] lg:w-fit lg:h-fit'
              />
            </div>
          ))}
        </div>
        <div className='md:flex hidden lg:hidden flex-row gap-[30px] ml- justify-center pt-6'>
          {iiArr.map((item, _) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse items-center justify-between max-w-[355px]`}
            >
              <p
                className={`text-[12px] leading-[14.4px] text-center text-dark pt-1 ${
                  item.id === 1 && 'w-[177px]'
                } ${item.id === 2 && 'w-[173px] '} ${
                  item.id === 3 && 'w-[222px]'
                }`}
              >
                {item.title}
              </p>
              <div
                className={`size-2 bg-cloud rounded-full justify-center items-center flex bb:mt-4 ${
                  item.id === 2 && 'bb:absolute bottom-[-50px] left-[178px]'
                } ${
                  item.id === 1 && 'bb:absolute bottom-[-42px] left-[168px]'
                }`}
              >
                <div className='size-1 bg-blue rounded-full' />
              </div>
              <img
                src={Mobile.src}
                alt='icon'
                className='w-[197px] h-[308px] mt-[10px] md:w-[103px] md:h-[161px] lg:w-fit lg:h-fit'
              />
            </div>
          ))}
        </div>
        {/* <div
          ref={imageRef}
          className='absolute hidden lg:flex bb:block bottom-[-260px] lg:left-0 lg:max-w-[1280px] bb:max-w-none lg:overflow-hidden'
        >
          <svg
            width='1920'
            height='272'
            viewBox='0 0 1920 272'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='lg:scale-110 xx:scale-100'
          >
            <path
              d='M-327.5 121L410 27L967 103L1517 1.5L2446.5 271'
              stroke='#4F56D3'
              stroke-width='2'
              style={{
                strokeDasharray: `${pathLength}`,
                strokeDashoffset: `${pathLength}`,
              }}
              className={` ${isVisible && 'path-animation'}`}
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default II;
