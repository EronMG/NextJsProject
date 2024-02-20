'use client';
import React, { useState } from 'react';
import Press from '@/Images/press.svg';
import Star from '@/Images/star.svg';
import { FaArrowUp } from 'react-icons/fa6';
import { courseArr } from '@/Types/Arrays';
import ArrowBtn from '@/Images/ArrowBtn.svg';

const Course = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Для сброса анимации

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1); // Сброс анимации стрелки
  };
  return (
    <section className='px-[10px] pt-[77px] xx:pt-[270px]' id='case'>
      <div className='xx:flex justify-center'>
        <div className='flex flex-wrap xx:relative justify-center xx:justify-between items-center border-b-[2px] border-blue xx:w-[1576px]'>
          <h2 className=' font-Regular text-dark text-[22px] leading-[26.4px] text-center max-w-[278px] xx:pb-[14px] ss:max-w-[450px] xx:text-[36px] xx:leading-[43.2px] xx:max-w-[1198px] xx:text-start'>
            На бесплатном обучении вы получите пошаговую инструкцию,
            <br className='sm:hidden xx:flex' /> как собрать ИИ-бота, который
            поддерживает беседу и мотивирует клиента оставить заявку
          </h2>
          <img
            src={Press.src}
            alt='icon'
            className='mt-[11px] xx:w-[260px] xx:h-[233px] xx:mr-20 xx:absolute right-[-4px] top-[-95px]'
          />
        </div>
      </div>
      <div className='pt-3 flex flex-col items-center mm:pt-6 xx:pt-12'>
        <div className='flex flex-wrap justify-end gap-2 ss:justify-center mm:flex-col mm:items-center'>
          <p className='text-[14px] leading-[18.2px] text-dark font-Regular text-center mm:max-w-[500px] md:text-base md:text-[22px] md:leading-[28.6px] md:max-w-[720px] xx:text-start '>
            Вам не нужно программировать. Достаточно текстом ПРАВИЛЬНО описать,
            как должен действовать бот. Этому мы вас тоже научим
          </p>
          <div className='flex gap-3 md:hidden'>
            <button className=' size-[47px] bg-cloud rounded-full flex justify-center items-center'>
              <FaArrowUp className='-rotate-90 text-white' />
            </button>
            <button className='size-[47px] flex bg-blue rounded-full justify-center items-center'>
              <FaArrowUp className='rotate-90 text-white' />
            </button>
          </div>
        </div>
        <div className='flex overflow-hidden pt-[25px] max-w-[300px] md:flex-wrap md:max-w-[1576px] xx:max-w-[1920px] md:justify-center md:gap-3 xx:gap-5 xx:pt-[34px]'>
          {courseArr.map((item, _) => (
            <div
              key={item.id}
              className='p-3 rounded-[10px] bg-cloud min-w-[300px] md:w-[300px] md:h-[416px] xx:w-[440px] xx:h-[513px]'
            >
              <div className='flex flex-col gap-2'>
                <div className='rounded-[5px] bg-blue text-white text-[14px] font-Regular w-[64px] h-6 flex justify-center items-center xx:text-xl xx:leading-[26px] xx:w-[94px] xx:h-[45px]'>
                  День {item.id}
                </div>
                <h2 className='text-blue text-[14px] font-Medium leading-[18.2px] xx:text-xl xx:leading-[26px]'>
                  {item.name}
                </h2>
              </div>
              <div className='pt-[10px] flex flex-col gap-[10px]'>
                {item.titleArr.map((item, _) => (
                  <div key={item.id}>
                    <p className='text-dark text-[14px] font-Medium leading-[18.2px] xx:text-base xx:leading-[20.8px]'>
                      {item.title}
                    </p>
                    <div className='flex flex-col pl-3'>
                      {item.liArr.map((item, _) => (
                        <span
                          key={item.id}
                          className='flex items-start text-dark text-[12px] font-Regular leading-[15.6px] pt-[6px] gap-[6px] xx:text-base xx:leading-[20.8px]'
                        >
                          <img src={Star.src} alt='icon' className='pt-[0px]' />
                          {item.span}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center xx:pt-12 pt-[34px]'>
          <button
            className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime md:w-[280px] ${
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
              Создать ии-ассистента
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
                    right: '23px',
                    top: '20px',
                  }}
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
