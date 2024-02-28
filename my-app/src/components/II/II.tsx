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

  const pathLength = 1000;
  return (
    <section className='pt-[71px] px-[10px] bb:pt-[180px] bb:px-0 md:relative md:flex justify-center lg:mb-[100px] bb:mb-0'>
      <div className='bb:w-[1920px] md:relative md:w-[795px] lg:w-[1024px]'>
        <h2 className='text-[22px] leading-[26.4px] lg:ml-0 md:max-w-[491px] lg:max-w-[979px] md:text-start md:ml-[59px] font-Regular md:text-[18px] md:leading-[21.6px] text-center text-dark bb:text-[36px] lg:text-[26px] bb:leading-[43.2px] max-w-[979px] lg:text-start bb:ml-[170px]'>
          ИИ-бот на 100% походит на человека и не придумывает ничего лишнего при{' '}
          <br className='md:hidden' />
          общении с клиентами
        </h2>
        <div className='lg:flex hidden lg:relative flex-row gap-[30px] justify-center pt-20'>
          {iiArr.map((item, _) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse items-center justify-between max-w-[355px] ${
                item.id === 1 ? 'absolute left-[81px] top-[90px]' : ''
              } ${item.id === 3 ? 'absolute right-[75px] top-[75px]' : ''} ${
                item.id === 2 ? 'mt-[55px] ml-[11px]' : ''
              }`}
            >
              <p
                className={`text-[14px] leading-[14.4px] h-[84px] absolute text-center text-dark ${
                  item.id === 1 && 'w-[207px] left-[0px] top-[350px]'
                } ${item.id === 2 && 'w-[250px] top-[480px] '} ${
                  item.id === 3 && 'w-[252px] right-[-20px] top-[370px]'
                }`}
              >
                {item.title}
              </p>
              <div
                className={`size-4 bg-cloud rounded-full mt-[14.5px] justify-center items-center flex ${
                  item.id === 2 && 'bb:absolute bottom-[-50px] left-[178px]'
                } ${
                  item.id === 1 && 'bb:absolute bottom-[-42px] left-[168px]'
                }`}
              >
                <div className='size-2 bg-blue rounded-full' />
              </div>
              <img
                src={Mobile.src}
                alt='icon'
                className='w-[197px] h-[308px]'
              />
            </div>
          ))}
        </div>
        <div className='md:flex hidden lg:hidden md:relative flex-row gap-[30px] justify-center pt-6'>
          {iiArr.map((item, _) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse items-center justify-between max-w-[355px] ${
                item.id === 1 ? 'absolute left-[118px]' : ''
              } ${item.id === 3 ? 'absolute right-[115px] top-[14px]' : ''} ${
                item.id === 2 ? 'mt-8 ml-[6px]' : ''
              }`}
            >
              <p
                className={`text-[12px] leading-[14.4px] h-[84px] absolute text-center text-dark ${
                  item.id === 1 && 'w-[177px] left-[-30px] top-[210px]'
                } ${item.id === 2 && 'w-[173px] top-[260px] '} ${
                  item.id === 3 && 'w-[222px] right-[-60px] top-[220px]'
                }`}
              >
                {item.title}
              </p>
              <div
                className={`size-2 bg-cloud rounded-full mt-[14.5px] justify-center items-center flex ${
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
        <img
          src={Line.src}
          alt='icon'
          className='absolute hidden md:flex lg:hidden left-[0] top-[245px] w-[815px] h-[115px] lg:scale-[139%] lg:left-24 lg:top-[470px]'
        />
      </div>
    </section>
  );
};

export default II;
