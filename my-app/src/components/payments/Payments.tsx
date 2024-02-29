'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Arrow from '@/Images/ArrowCloud.svg';
import Hand from '@/Images/HandVector.svg';
import Star from '@/Images/star.svg';
import StarBlack from '@/Images/StarBlack.svg';
import { paymentsArr } from '@/Types/Arrays';
import ArrowBtn from '@/Images/ArrowBtn.svg';
import Eye1 from '@/Images/Eye1.svg';

const Payments = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Для сброса анимации

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1); // Сброс анимации стрелки
  };

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

  const [isVisible, setIsVisible] = useState(true);
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
  const [active, setActive] = useState('first');

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % paymentsArr.length);
    setActive((prevActive) => {
      switch (prevActive) {
        case 'first':
          return 'second';
        case 'second':
          return 'third';
        case 'third':
          return 'first';
        default:
          return 'first';
      }
    });
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prevActive) => {
      switch (prevActive) {
        case 'first':
          return 'third';
        case 'second':
          return 'first';
        case 'third':
          return 'second';
        default:
          return 'first';
      }
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const rotateImage = (degrees: number) => {
    return {
      transform: `rotateY(${degrees}deg)`,
      transition: 'transform 0.5s ease',
    } as React.CSSProperties;
  };

  useEffect(() => {
    const icon = document.getElementById('icon') as HTMLImageElement;

    const rotateRight = () => {
      icon.style.cssText = Object.entries(rotateImage(180))
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
      setTimeout(() => {
        icon.style.cssText = '';
      }, 500);
    };

    const rotateLeft = () => {
      icon.style.cssText = Object.entries(rotateImage(-180))
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
      setTimeout(() => {
        icon.style.cssText = '';
      }, 500);
    };

    const rightInterval = setInterval(rotateRight, 6000);
    const leftInterval = setInterval(rotateLeft, 12000);

    // Очистка интервалов при размонтировании компонента
    return () => {
      clearInterval(rightInterval);
      clearInterval(leftInterval);
    };
  }, []);
  return (
    <section className='px-[10px] pt-20 xx:pt-[180px] md:pt-[60px]'>
      <div className='flex flex-col items-center '>
        <h2 className='font-Regular text-[22px] md:text-lg md:leading-[21.6px] leading-[26.4px] text-center text-dark lg:text-[36px] lg:leading-[43.2px] md:text-[26px]'>
          Вы можете попробовать сервис <br className='hidden md:flex' /> NextBot
          бесплатно
        </h2>
        <div className='flex flex-col items-center pt-[10px] md:relative md:pt-[3px] lg:pt-2'>
          <div className='border-b-[1px] md:border-b-0 rounded-[20px] border-blue pb-2 px-6 md:pb-[11px] lg:pb-[20px] xl:pb-[23px] lg:px-[115px] md:px-11'>
            <p className='font-Regular text-base leading-[19.2px] md:text-[12px] text-center text-dark lg:text-[22px] lg:leading-[26.4px] md:leading-[14.4px]'>
              БЕСПЛАТНОЕ обучение, как ПРАВИЛЬНО делать ИИ-ботов
            </p>
            {/* <div
              ref={headingRef}
              className='absolute left-0 top-[35px] hidden xx:flex'
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
            <div
              ref={headingRef}
              className='absolute left-[0] top-[20px] hidden md:flex lg:top-[38px] lg:-left-[80px] xl:-left-[132px]'
            >
              <svg
                width='425'
                height='21'
                viewBox='0 0 1047 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-[300px] h-[12.47px] md:w-[418px] md:h-[9.2px] lg:w-[1024px] lg:h-[17px] xl:w-[1145px] xl:h-[21px]'
              >
                <path
                  d='M1046 1V1C1046 11.4934 1037.49 20 1027 20H20C9.50657 20 1 11.4934 1 1V1'
                  stroke='#4F56D3'
                  strokeLinecap='round'
                  stroke-width='3'
                  style={{
                    strokeDasharray: `${pathLength}`,
                    strokeDashoffset: `${pathLength}`,
                  }}
                  className={` ${isVisible && 'path-animation'}`}
                />
              </svg>
            </div>
          </div>
          <div className='w-[1px] h-[67px] md:h-[43px] lg:h-[70px] bg-blue relative xx:h-[113px] mr-[-1px] md:hidden'>
            <div className='trans bottom-[-15px] absolute w-4 h-4 lg:size-4 md:size-2 xx:size-[21px] lg:top-16 md:top-10 flex justify-center items-center bg-cloud rounded-full'>
              <div className='w-2 h-2 bg-blue md:size-1 rounded-full lg:size-2 xx:size-[11px]' />
            </div>
          </div>
          <div
            ref={animationRef}
            className={`hidden md:block w-[1px] bg-blue relative ${
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
        <p className='font-Regular lg:pt-5 text-[14px] md:pt-[10px] leading-[16.8px] text-center text-dark xm:w-[600px] w-[218px] pt-[18px] lg:text-[18px] xx:text-[22px] xx:leading-[26.4px] lg:w-fit md:text-[12px] md:leading-[14.4px] md:w-[252px]'>
          Можете выбрать любой тариф – от пробного до премиум
        </p>
      </div>
      <div className='pt-6 flex flex-col items-center justify-center md:pt-4'>
        <div className='flex items-center gap-3 md:hidden'>
          <img
            src={Arrow.src}
            alt='icon'
            className='cursor-pointer active:scale-110 duration-300 md:scale-125'
            onClick={handlePrev}
          />
          <img src={Hand.src} alt='icon' className=' md:scale-125' />
          <img
            src={Arrow.src}
            alt='icon'
            onClick={handleNext}
            className='rotate-180 cursor-pointer active:scale-110 duration-300 md:scale-125'
          />
        </div>
        <div className='flex justify-center gap-[10px] pt-4 md:hidden xx:hidden'>
          {paymentsArr.map((item, index) => (
            <div
              key={item.id}
              className={`size-2 rounded-full ${
                index === activeIndex ? 'active' : ''
              } ${index === activeIndex ? 'bg-blue' : 'bg-cloud'}`}
            ></div>
          ))}
        </div>
        <div className='flex' id='payments'>
          <div className='hidden xx:flex gap-5 pt-[78px]'>
            {paymentsArr.map((item, _) => (
              <div
                key={item.id}
                className={`relative pt-8 pb-12 ${
                  item.id !== 2 ? 'h-[1308px]' : 'h-[1410px]'
                } pl-[13px] pr-[48px] bg-cloud ${
                  item.id === 1 && 'mt-[52px]'
                } ${item.id === 3 && 'mt-[52px]'} rounded-[20px] w-[513px] ${
                  item.id === 2 && 'border-[2px] border-blue'
                }`}
              >
                {item.id === 2 && (
                  <div className='bg-blue rounded-[10px] w-[326px] h-[45px] flex justify-center items-center absolute top-[-24px] pt-[6px] left-[17.8%]'>
                    <p className='  text-[22px] leading-[28.6px] text-white font-Regular'>
                      Самый популярный вариант
                    </p>
                  </div>
                )}
                <h2
                  className={`text-[56px] ${
                    item.id !== 2 && ' pl-8'
                  } text-dark font-Regular leading-[67.2px] text-center pt-6 ${
                    item.id === 2 &&
                    'flex items-center justify-center pl-[40px]'
                  }`}
                >
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='pr-[11.6px] pb-[10px]'
                    />
                  )}{' '}
                  {item.name}{' '}
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='pb-[10px] pl-[19px]'
                    />
                  )}
                </h2>
                <div className='pl-[7.5px] pt-[13px]'>
                  <p className='text-blue font-Medium  text-[22px] w-[322px] leading-[26.4px]'>
                    {item.title}
                  </p>
                  <div className='flex flex-col gap-[5px] pt-4'>
                    {item.titleArr.map((item, _) => (
                      <span
                        key={item.id}
                        className='text-[20px] leading-[26px] text-dark font-Regular flex gap-1 items-start'
                      >
                        <img src={Star.src} alt='icon' className='pt-1' />
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-5 pt-[42px] pl-6'>
                  {item.spanArr.map((item, _) => (
                    <p
                      key={item.id}
                      className='max-w-[350px] text-[22px] leading-[28.6px] text-dark font-Medium'
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
                <div>
                  <div
                    className={`flex gap-6 flex-row-reverse justify-center ${
                      item.id === 1 && 'pt-[164px] pl-[34px]'
                    } ${item.id === 3 && 'pt-[58px] pl-[27px]'}
                    ${item.id === 2 && 'pt-[214px] pl-[27px]'}`}
                  >
                    <h3
                      className={`font-Regular text-[56px] leading-[67.2px] ${
                        item.id !== 1 && 'text-blue'
                      }`}
                    >
                      {item.deleteCost} ₽
                    </h3>
                    {item.id === 2 && (
                      <h3 className='font-Regular text-[56px] leading-[67.2px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                    {item.id === 3 && (
                      <h3 className='font-Regular text-[56px] leading-[67.2px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                  </div>
                  <div className='flex justify-center pl-8'>
                    <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 justify-end rounded-[40px] bg-lime md:w-[280px] mt-6'>
                      <p className='text-[14px] text-dark font-Medium md:text-[18px] mr-8'>
                        Создать ии-бота
                      </p>
                      <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                        <img src={ArrowBtn.src} alt='ArrowBtn' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`pt-[10px]  xx:hidden md:hidden`}>
            {active &&
              paymentsArr
                .slice(
                  active === 'first'
                    ? 0
                    : active === 'second'
                    ? 1
                    : active === 'third'
                    ? 2
                    : 0,
                  active === 'first'
                    ? 1
                    : active === 'second'
                    ? 2
                    : active === 'third'
                    ? 3
                    : 0
                )
                .map((item, _) => (
                  <div
                    key={item.id}
                    className={`pt-8 max-w-[300px] md:max-w-[500px] pb-12 px-[13px] bg-cloud rounded-[20px] ${
                      active === 'second' &&
                      'relative border-[2px] border-blue mt-5'
                    }`}
                  >
                    {item.id === 2 && (
                      <div className='bg-blue hidden rounded-[10px] w-[326px] h-[45px] md:flex justify-center items-center absolute top-[-24px] pt-[6px] left-[17.8%]'>
                        <p className='  text-[22px] leading-[28.6px] text-white font-Regular'>
                          Самый популярный вариант
                        </p>
                      </div>
                    )}
                    <h2 className='text-[36px] text-dark font-Regular leading-[43.2px] text-center'>
                      {item.name}
                    </h2>
                    <div className='pt-4'>
                      <p className='text-blue font-Medium leading-[19.2px] text-[16px] md:text-xl max-w-[300px]'>
                        {item.title}
                      </p>
                      <div className='flex flex-col gap-[5.5px] pt-3'>
                        {item.titleArr.map((item, _) => (
                          <span
                            key={item.id}
                            className='text-[12px] leading-[15.6px] gap-1 text-dark font-Regular flex items-start md:text-base'
                          >
                            <img
                              src={Star.src}
                              alt='icon'
                              className='md:pt-1'
                            />
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 pt-[23px]'>
                      {item.spanArr.map((item, _) => (
                        <p
                          key={item.id}
                          className='text-base leading-[20.8px] text-dark font-Medium md:text-xl'
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                    <div className='flex flex-col items-center pt-[136px]'>
                      <div className='flex gap-3 flex-row-reverse'>
                        <h3
                          className={`font-Regular text-[39px] leading-[47px] ${
                            active === 'second' ? 'text-blue' : 'text-dark'
                          }`}
                        >
                          {item.cost} ₽
                        </h3>
                        {active === 'second' && (
                          <h3 className='font-Regular text-[39px] leading-[47px] text-dark line-through decoration-2 decoration-lime'>
                            {item.deleteCost}
                          </h3>
                        )}
                      </div>
                      <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 justify-end rounded-[40px] bg-lime md:w-[280px] mt-3'>
                        <p className='text-[14px] text-dark font-Medium md:text-[18px] mr-8'>
                          Создать ии-бота
                        </p>
                        <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                          <img src={ArrowBtn.src} alt='ArrowBtn' />
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
          </div>
          <div className='hidden xx:hidden lg:flex pt-10  gap-5'>
            {paymentsArr.map((item, _) => (
              <div
                key={item.id}
                className={`relative pt-8 pb-12 ${
                  item.id !== 2 ? 'h-[1258px]' : 'h-[1360px]'
                } pl-[13px] pr-[18px] bg-cloud ${
                  item.id === 1 && 'mt-[52px]'
                } ${
                  item.id === 3 && 'mt-[52px]'
                } rounded-[20px] max-w-[320px] xm:max-w-[470px] ${
                  item.id === 2 && 'border-[2px] border-blue'
                }`}
              >
                {item.id === 2 && (
                  <div className='bg-blue rounded-[10px] xm:w-[250px] w-[196px] h-[45px] xm:left-[20%] xm:pt-0 flex justify-center items-center absolute top-[-24px] pt-[6px] left-[17.8%]'>
                    <p className='  text-[13px] leading-[28.6px] text-white xm:text-[18px]  font-Regular'>
                      Самый популярный вариант
                    </p>
                  </div>
                )}
                <h2
                  className={`text-[36px] xm:text-[46px] ${
                    item.id !== 2 && ' pl-0'
                  } text-dark font-Regular leading-[67.2px] text-center pt-0 ${
                    item.id === 2 && 'flex items-center justify-center xm:ml-2'
                  }`}
                >
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='pr-[11.6px] xm:pr-2 pb-[10px]'
                    />
                  )}{' '}
                  {item.name}{' '}
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='pb-[10px] xm:pl-2 pl-[19px]'
                    />
                  )}
                </h2>
                <div className='pl-[7.5px] pt-[13px]'>
                  <p className='text-blue font-Medium xm:text-[22px] xm:w-[330px]  text-[16px] w-[262px] leading-[26.4px]'>
                    {item.title}
                  </p>
                  <div className='flex flex-col gap-[5px] pt-4'>
                    {item.titleArr.map((item, _) => (
                      <span
                        key={item.id}
                        className='text-[16px] xm:text-[18px]  leading-[26px] text-dark font-Regular flex gap-1 items-start'
                      >
                        <img src={Star.src} alt='icon' className='pt-1' />
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-5 pt-[42px] pl-6'>
                  {item.spanArr.map((item, _) => (
                    <p
                      key={item.id}
                      className='max-w-[350px] xm:text-[22px]  text-[20px] leading-[28.6px] text-dark font-Medium'
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
                <div>
                  <div
                    className={`flex gap-2 flex-row-reverse items-center justify-center ${
                      item.id === 1 && 'pt-[164px] '
                    } ${item.id === 3 && 'pt-[28px] xm:pt-[60px]'}
                    ${item.id === 2 && 'pt-[244px] '}`}
                  >
                    <h3
                      className={`font-Regular text-[36px] xm:text-[44px]  leading-[67.2px] ${
                        item.id !== 1 && 'text-blue'
                      }`}
                    >
                      {item.deleteCost} ₽
                    </h3>
                    {item.id === 2 && (
                      <h3 className='font-Regular text-[36px] xm:text-[44px] leading-[67.2px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                    {item.id === 3 && (
                      <h3 className='font-Regular text-[36px] xm:text-[44px] leading-[67.2px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                  </div>
                  <div className='flex justify-center pl-0'>
                    <button
                      className={`relative z-10 w-[234px] h-[50px] hidden flex-row items-center gap-12 pr-4 justify-end rounded-[40px] lg:flex bg-lime md:w-[280px] ${
                        isHovered ? 'button-hovered' : ''
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <p
                        className={`text-[14px] font-Medium ml-7 md:text-[18px] ${
                          isHovered ? 'text-blue duration-300' : ' text-dark'
                        }`}
                      >
                        Создать ии-бота
                      </p>
                      <div
                        className={`flex items-center justify-center size-7 rounded-full  ${
                          isHovered ? ' bg-blue duration-300' : 'bg-dark'
                        }`}
                      >
                        <img
                          src={ArrowBtn.src}
                          alt='ArrowBtn'
                          className={`transition-opacity duration-500 ${
                            isHovered ? 'arrow-out' : ''
                          }`}
                          key={animationKey}
                        />
                        {isHovered && (
                          <img
                            src={ArrowBtn.src}
                            alt='ArrowBtn'
                            className='arrow-in'
                            style={{
                              position: 'absolute',
                              right: '25.5px',
                              top: '20px',
                            }}
                          />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='hidden lg:hidden md:flex gap-[10px]'>
            {paymentsArr.map((item, _) => (
              <div
                key={item.id}
                className={`relative pt-[22px] ${
                  item.id !== 2 ? 'h-[751px]' : 'h-[807px]'
                } pl-[5px] pr-[10px] bg-cloud ${item.id === 1 && 'mt-[28px]'} ${
                  item.id === 3 && 'mt-[28px]'
                } rounded-[8px] max-w-[216px] ${
                  item.id === 2 && 'border-[2px] border-blue'
                }`}
              >
                {item.id === 2 && (
                  <div className='bg-blue rounded-[4px] w-[175px] h-[21px] flex justify-center items-center absolute top-[-13px] pt-[6px] left-[7.8%]'>
                    <p className='  text-[12px] leading-[15.6px] text-white font-Regular'>
                      Самый популярный вариант
                    </p>
                  </div>
                )}
                <h2
                  className={`text-[18px] ${
                    item.id !== 2 && ' pl-0'
                  } text-dark font-Regular leading-[21.6px] text-center pt-0 ${
                    item.id === 2 &&
                    'flex items-center justify-center mr-0 gap-[5px]'
                  }`}
                >
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='w-[7px] mb-1'
                    />
                  )}{' '}
                  {item.name}{' '}
                  {item.id === 2 && (
                    <img
                      src={StarBlack.src}
                      alt='icon'
                      className='w-[7px] mb-1'
                    />
                  )}
                </h2>
                <div className='pl-[3px] pt-[10px]'>
                  <p className='text-blue font-Medium text-[12px] leading-[14.4px]'>
                    {item.title}
                  </p>
                  <div className='flex flex-col gap-[2.7px] pt-2'>
                    {item.titleArr.map((item, _) => (
                      <span
                        key={item.id}
                        className='text-[12px] leading-[15.6px] text-dark font-Regular flex gap-1 items-start'
                      >
                        <img src={Star.src} alt='icon' className='' />
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-2 pt-[20px] pl-1'>
                  {item.spanArr.map((item, _) => (
                    <p
                      key={item.id}
                      className='text-[12px] leading-[15.6px] text-dark font-Medium'
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
                <div>
                  <div
                    className={`flex gap-2 flex-row-reverse items-center justify-center ${
                      item.id === 1 && 'pt-[95px] '
                    } ${item.id === 3 && 'pt-[40px]'}
                    ${item.id === 2 && 'pt-[121px] '}`}
                  >
                    <h3
                      className={`font-Regular text-[22px]  leading-[26.5px] ${
                        item.id !== 1 && 'text-blue'
                      }`}
                    >
                      {item.deleteCost} ₽
                    </h3>
                    {item.id === 2 && (
                      <h3 className='font-Regular text-[22px]  leading-[26.5px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                    {item.id === 3 && (
                      <h3 className='font-Regular text-[22px]  leading-[26.5px] text-dark line-through decoration-2 decoration-lime'>
                        {item.cost}
                      </h3>
                    )}
                  </div>
                  <div className='flex justify-center pl-0'>
                    <button
                      className={`relative z-10 xx:hidden md:w-[153px] md:h-[30px] w-[234px] h-[50px] mt-[6px] lg:absolute left-0 mr-[7px] lg:bottom-10 lg:left-[100px] flex flex-row items-center justify-center gap-2 pr-7 rounded-[40px] bg-lime ${
                        isHovered ? 'button-hovered' : ''
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <p
                        className={`text-[14px] font-Medium ml-7 md:text-[10px] md:leading-[13px] md:ml-4 ${
                          isHovered ? 'text-blue duration-300' : ' text-dark'
                        }`}
                      >
                        Создать ии-бота
                      </p>
                      <div
                        className={`flex items-center justify-center size-7 md:size-5 rounded-full  ${
                          isHovered ? ' bg-blue duration-300' : 'bg-dark'
                        }`}
                      >
                        <img
                          src={ArrowBtn.src}
                          alt='ArrowBtn'
                          className={`transition-opacity duration-500 ${
                            isHovered ? 'arrow-out' : ''
                          }`}
                          key={animationKey}
                        />
                        {isHovered && (
                          <img
                            src={ArrowBtn.src}
                            alt='ArrowBtn'
                            className='arrow-in md:hidden lg:flex'
                            style={{
                              position: 'absolute',
                              right: '52.5px',
                              top: '20px',
                            }}
                          />
                        )}
                        {isHovered && (
                          <img
                            src={ArrowBtn.src}
                            alt='ArrowBtn'
                            className='arrow-in md:flex hidden lg:hidden'
                            style={{
                              position: 'absolute',
                              right: '34.5px',
                              top: '10px',
                            }}
                          />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center pt-[59px] md:pt-[30px] xx:pt-[71px]'>
        <div className='border-t-[1px] rounded-[20px] border-blue pt-6 md:pt-[10px] xm:pt-[15px] px-6 flex justify-center xm:w-[1045px]'>
          <p className='font-Regular text-base leading-[19.2px] text-center max-w-[220px] md:max-w-[374px] md:text-[12px] md:leading-[14.4px] text-dark xx:text-[22px] xx:leading-[26.4px] xm:text-[20px] xm:leading-[24.4px] xm:max-w-[674px] xx:pt-[6px]'>
            Оплатить можно с любой карты РФ. Для работы не нужен VPN
          </p>
        </div>
        <div className='xm:hidden flex flex-col items-center mt-[5px] gap-[5px] md:gap-[0px]'>
          <p className='font-Regular text-base leading-[19.2px] text-center max-w-[271px] md:max-w-[380px] md:text-[12px] md:leading-[14.4px]  xm:text-[20px] text-dark'>
            У вас будет доступ к сервису NextBot в течение месяца, или пока не
            израсходуются все токены, предусмотренные тарифом.
          </p>
          <p className='font-Regular text-base leading-[19.2px] text-center max-w-[233px] md:max-w-[400px] md:text-[12px] md:leading-[14.4px] xm:text-[20px] text-dark'>
            За это время вы можете собрать ИИ-ассистента не только для Telegran,
            но и виджет с ИИ-консультантом для сайта.
          </p>
        </div>
        <p className='hidden xl:flex font-Regular text-center text-dark pt-5 xx:text-[22px] xx:leading-[26.4px] xm:text-[20px] xm:leading-[24.4px] max-w-[948px]'>
          У вас будет доступ к сервису NextBot в течение месяца, или пока не
          израсходуются <br /> все токены, предусмотренные тарифом. За это время
          вы можете собрать ИИ-ассистента <br /> не только для Telegran, но и
          виджет с ИИ-консультантом для сайта.
        </p>
        <p className='font-Regular text-base leading-[19.2px] text-center md:text-[12px] md:max-w-[301px] xm:max-w-[754px] md:leading-[14.4px] text-dark md:mt-[5px] mt-[14px] xm:mt-[20px] xx:text-[22px] xm:text-[20px] xm:leading-[24.4px] xx:leading-[26.4px] max-w-[754px]'>
          А если у вас будет доступ к подключению SaleBot, то ИИ-ассистента
          можно подключить к WhatsApp, Avito или Instagram*
        </p>
        <div className='flex justify-center items-center flex-col mt-[46px] md:mt-[43px] xx:pt-[53px] xm:mt-[2px]'>
          <div className='size-[58px] bg-gray rounded-[10px] xm:rounded-[10px] xm:size-[58px] md:size-[47px] md:rounded-[4px] flex justify-center items-center'>
            <img
              src={Eye1.src}
              alt='icon'
              id='icon'
              className='md:w-[32px] md:h-[23px] xm:w-[38px] xm:h-[27px]'
            />
          </div>
          <p className='font-Medium text-base leading-[20.8px] xx:pt-[14px] text-center md:max-w-[314px] md:text-[12px] md:leading-[14.4px] xm:text-[20px] xm:leading-[24.4px] text-gray pt-2 xx:text-[22px] xx:leading-[26.4px] xm:max-w-[589px]'>
            В некоторых случаях ИИ-ассистент
            <br className='md:hidden xx:hidden' /> от NextBot может полностью{' '}
            <br className='md:hidden xx:hidden' />
            заменить сотрудника на рядовых задачах
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payments;
