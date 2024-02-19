'use client';
import React, { useEffect, useState } from 'react';
import Settings from '@/Images/Settings.svg';
import Diagramms from '@/Images/diagramms.svg';
import Messanger from '@/Images/Messanger.jpg';
import AI from '@/Images/AI.svg';
import { bussinesArr } from '@/Types/Arrays';
import { FaArrowUp } from 'react-icons/fa6';
import Eye1 from '@/Images/Eye1.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';

function Array() {
  return (
    <div className='flex flex-wrap gap-[10px] justify-center pt-[13px] xx:hidden'>
      {bussinesArr.map((item, _) => (
        <div
          key={item.id}
          className={`bg-blue mm:max-w-[440px] w-full flex p-[10px] gap-[10px] justify-between rounded-[10px] ${
            item.id === 1
              ? 'flex-row'
              : item.id === 3
              ? 'flex-row'
              : item.id === 5
              ? 'flex-row'
              : 'flex-row-reverse'
          }`}
        >
          <img
            src={Messanger.src}
            alt='jpg'
            className='w-[140px] h-[117px] rounded-[5px] mm:w-[200px] mm:h-[160px]'
          />
          <div
            className={`flex flex-col justify-between  ${
              item.id === 1
                ? ' items-end'
                : item.id === 3
                ? ' items-end'
                : item.id === 5
                ? ' items-end'
                : ''
            }`}
          >
            <img src={AI.src} alt='icon' className='w-[35px] mm:w-[50px]' />
            <h4 className='text-white text-[12px] font-Regular mm:max-w-[210px] mm:text-base leading-[15.4px]'>
              <span className='text-lime'>{item.title.split(' ')[0]}</span>{' '}
              {item.title.slice(item.title.indexOf(' ') + 1)}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const Create = () => {
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

    return () => {
      clearInterval(rightInterval);
      clearInterval(leftInterval);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className='flex flex-col items-center px-[10px] pt-[78px] leading-[26.4px] xx:pt-[184px]'>
      <div className='md:flex flex-wrap justify-center items-center md:gap-6 xx:gap-20'>
        <h2 className='text-[22px] font-Regular text-dark text-center w-[267px] ss:max-w-[472px] ss:w-fit xx:text-[36px] xx:leading-[43.2px] xx:max-w-[982px] xx:text-start'>
          Вы соберете ИИ-бота под задачи вашего бизнеса, который может заменить
          <span className='text-blue italic'>
            консультанта, администратора, менеджера по продажам, помощника РОПа
          </span>
        </h2>
        <div className='flex border-b-[4px] pb-1 border-blue gap-3 justify-between pt-7 md:pt-0 xx:gap-[31px]'>
          <img
            src={Settings.src}
            alt='icon'
            className='rotate-icon w-[65px] h-[65px] xx:w-[83px] xx:h-[87px]'
          />
          <h3 className='text-blue text-base font-Medium mm:text-lg  mm:w-[400px] leading-[20.8px] xx:text-[20px] xx:leading-[26px]'>
            Можете пройти бесплатное обучение и создать ИИ-бота самостоятельно
            или заказать разработку у нас
          </h3>
        </div>
      </div>
      <div className='flex pt-8 md:items-center xx:hidden'>
        <h4 className='text-[14px] text-dark font-Medium mm:max-w-[274px] mm:text-lg leading-[18.2px]'>
          Бот совершает столько касаний, чтобы к вам попадал максимально теплый
          лид
        </h4>
        <img src={Diagramms.src} alt='icon' className='mm:w-[200px]' />
      </div>
      <div className='hidden xx:flex xx:pt-20 gap-[107px]'>
        <div className='flex flex-col gap-[33px]'>
          <h4 className='text-[22px] text-dark font-Medium leading-[28.6px] max-w-[429px]'>
            Бот совершает столько касаний, чтобы к вам попадал максимально
            теплый лид
          </h4>
          <img
            src={Diagramms.src}
            alt='icon'
            className='w-[381px] h-[215px] transform -scale-x-100'
          />
        </div>
        <div>
          <div className='overflow-hidden pt-1'>
            {bussinesArr.map((item, index) => (
              <div
                key={item.id}
                className={`flex w-[1044px] gap-[37px] items-center h-[93px]  ${
                  item.id === bussinesArr.length
                    ? 'border-b-[1px] border-t-[1px] border-blue'
                    : 'border-t-[1px]  border-blue'
                } hover-effect`}
              >
                <span className='text text-[20px] leading-[26px] font-Regular text-dark w-[621px]'>
                  {item.title}
                </span>
                <img src={AI.src} alt='icon' className='w-[66px] h-[59px]' />
              </div>
            ))}
          </div>
          <div className='flex items-center pt-12'>
            <div className='size-[58px] bg-gray rounded-[10px] flex justify-center items-center mr-[12px]'>
              <img src={Eye1.src} alt='icon' id='icon' />
            </div>
            <p className='w-[694px] text-gray leading-[20.8px] text-base'>
              Возможности ИИ-бота не ограничены. Вам нужно только прописать в
              инструкции,
              <br /> что должен делать бот, что от него нужно. Но в первую
              очередь, ИИ-ассистент закрывает рутинные операции, освобождает
              время для развития бизнеса и решения важных задач
            </p>
            <button
              className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-12 pr-4 justify-end rounded-[40px] bg-lime md:w-[280px] ${
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
                      right: '25px',
                      top: '21px',
                    }}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <FaArrowUp className='rotate-180 text-cloud text-[28px] mt-1 xx:hidden' />
      {Array()}
    </section>
  );
};

export default Create;
