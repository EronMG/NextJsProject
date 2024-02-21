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

  return (
    <section className='pt-[71px] px-[10px] xx:pt-[180px] xx:px-0 xx:relative xx:flex justify-center'>
      <div className='xx:w-[1920px] xx:relative'>
        <h2 className='text-[22px] leading-[26.4px] font-Regular text-center text-dark xx:text-[36px] xx:leading-[43.2px] max-w-[979px] xx:text-start xx:ml-[170px]'>
          ИИ-бот на 100% походит на человека и не придумывает ничего лишнего при{' '}
          <br className='md:hidden' />
          общении с клиентами
        </h2>
        <div className='flex flex-wrap gap-5 justify-center pt-6 xx:gap-[200px] xx:pt-[62px] xx:pl-[1110px]'>
          {iiArr.map((item, _) => (
            <div
              key={item.id}
              className={`flex flex-col items-center max-w-[355px] xx:gap-[5px] xx:flex-col-reverse ${
                item.id === 1 && 'xx:absolute left-[232px] bottom-[18px]'
              } ${item.id === 2 && 'xx:absolute left-[778px] bottom-[-50px]'}`}
            >
              <div
                className={`size-[21px] bg-cloud rounded-full justify-center items-center flex xx:mt-4 ${
                  item.id === 2 && 'xx:absolute bottom-[-50px] left-[178px]'
                } ${
                  item.id === 1 && 'xx:absolute bottom-[-42px] left-[168px]'
                }`}
              >
                <div className='size-[11px] bg-blue rounded-full' />
              </div>
              <p
                className={`text-[13px] leading-[16.8px] text-center text-dark pt-1 xx:text-xl xx:leading-6 xx:pt-3 ${
                  item.id === 1 && 'xx:w-[448px]'
                } ${item.id === 2 && 'xx:w-[390px] '} ${
                  item.id === 3 && 'xx:w-[396px]'
                }`}
              >
                {item.title}
              </p>
              <img
                src={Mobile.src}
                alt='icon'
                className='w-[197px] h-[308px] mt-[10px]'
              />
            </div>
          ))}
        </div>
        <img
          src={Line.src}
          alt='line'
          // style={{
          //   width: `${imageWidth}%`,
          //   height: '308px', // Set the height explicitly
          //   left: '50%', // Center the image
          //   transform: 'translateX(-50%)', // Center the image
          //   transition: 'width 2s ease', // Adjust the duration and easing function as needed
          // }}
          className='absolute bottom-[-260px] xx:flex hidden'
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default II;
