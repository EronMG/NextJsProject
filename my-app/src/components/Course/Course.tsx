'use client';
import React, { useCallback, useState } from 'react';
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

  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive(true);
  }, []);

  const handleBack = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <section className='px-[10px] pt-[77px] xx:pt-[270px] md:pt-[49px]'>
      <div className='md:flex justify-center'>
        <div className='flex flex-col md:w-[668px] md:justify-between lg:items-end md:flex-row xx:relative justify-center xx:justify-between items-center border-b-[2px] md:border-b-[1px] border-blue  lg:flex-row lg:pb-[10px] xx:w-[1576px]'>
          <h2 className=' font-Regular text-dark md:mt-4 md:text-[18px] md:leading-[21.6px] md:max-w-[509px] md:text-start text-[22px] leading-[26.4px] text-center max-w-[278px] xx:pb-[14px] ss:max-w-[450px] xx:text-[30px] xx:leading-[36.2px] lg:max-w-[1058px] lg:text-start bb:text-[36px] bb:leading-[41.6px] bb:max-w-[1198px]'>
            На бесплатном обучении вы получите пошаговую инструкцию,
            <br className='sm:hidden xx:flex' /> как собрать ИИ-бота, который
            поддерживает беседу и мотивирует клиента оставить заявку
          </h2>
          <img
            src={Press.src}
            alt='icon'
            className='mt-[11px] xx:w-[260px] xx:h-[233px] md:w-[104px] md:h-[89px] md:mr-[28px] xx:mr-20 xx:absolute right-[-4px]'
          />
        </div>
      </div>
      <div className='pt-3 flex flex-col items-center mm:pt-6 xx:pt-12 md:pt-4'>
        <div className='flex flex-wrap md:flex-row justify-end gap-2 md:gap-[56px] md:justify-end md:ml-[70px] ss:justify-center mm:flex-col mm:items-center'>
          <p className='text-[14px] leading-[18.2px] md:text-xs md:text-start md:leading-[15.6px] text-dark font-Regular text-center mm:max-w-[500px] md:max-w-[402px] lg:text-start '>
            Вам не нужно программировать. Достаточно текстом ПРАВИЛЬНО описать,
            как должен действовать бот. Этому мы вас тоже научим
          </p>
          <div className='flex gap-3 lg:hidden md:gap-1'>
            <button
              className={`size-[47px] ${
                active === false ? 'bg-cloud' : 'bg-blue'
              } md:size-[31px] rounded-full flex justify-center duration-300 transition-all active:scale-110 items-center`}
            >
              <FaArrowUp
                onClick={handleBack}
                className='-rotate-90 text-white'
              />
            </button>
            <button
              onClick={handleActive}
              className={`size-[47px] md:size-[31px] flex duration-300 transition-all active:scale-110 rounded-full justify-center items-center ${
                active === true ? 'bg-cloud' : 'bg-blue'
              }`}
            >
              <FaArrowUp className='rotate-90 text-white' />
            </button>
          </div>
        </div>
        <div
          className='flex md:hidden lg:max-w-[800px] lg:gap-10 overflow-hidden pt-[25px] max-w-[300px] md:flex-wrap md:max-w-[1576px] xx:max-w-[1920px] md:justify-center md:gap-3 xx:grid xx:grid-cols-2 xx:gap-5 xx:pt-[34px]'
          id='course'
        >
          {courseArr.map((item, _) => (
            <div
              key={item.id}
              className='p-3 rounded-[10px] bg-cloud min-w-[300px] md:w-[300px] md:h-[416px] xx:w-[440px] xx:h-[513px]'
            >
              <div className='flex flex-col gap-2'>
                <div className='rounded-[5px] pt-1 bg-blue text-white text-[14px] font-Regular w-[64px] h-6 flex justify-center items-center xx:text-xl xx:leading-[26px] xx:w-[94px] xx:h-[45px]'>
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
        <div className='hidden pt-5 md:flex xl:hidden overflow-hidden gap-[10px]'>
          {active === false
            ? courseArr.slice(0, 2).map((item, _) => (
                <div
                  key={item.id}
                  className='p-3 rounded-[10px] bg-cloud min-w-[300px] w-[329px] h-[339px]'
                >
                  <div className='flex flex-col gap-2'>
                    <div className='rounded-[5px] pt-1 bg-blue text-white text-[14px] leading-[18.2px] font-Regular w-[56px] h-[26px] flex justify-center items-center'>
                      День {item.id}
                    </div>
                    <h2 className='text-blue text-[14px] font-Medium leading-[18.2px]'>
                      {item.name}
                    </h2>
                  </div>
                  <div className='pt-[10px] flex flex-col gap-[13px]'>
                    {item.titleArr.map((item, _) => (
                      <div key={item.id}>
                        <p className='text-dark text-[12px] font-Medium leading-[15.6px]'>
                          {item.title}
                        </p>
                        <div className='flex flex-col pl-1'>
                          {item.liArr.map((item, _) => (
                            <span
                              key={item.id}
                              className='flex items-start text-dark text-[12px] font-Regular leading-[15.6px] pt-[2px] gap-[6px]'
                            >
                              <img
                                src={Star.src}
                                alt='icon'
                                className='pt-[0px]'
                              />
                              {item.span}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : courseArr.slice(2, 4).map((item, _) => (
                <div
                  key={item.id}
                  className='p-3 rounded-[10px] bg-cloud min-w-[300px] w-[329px] h-[339px]'
                >
                  <div className='flex flex-col gap-2'>
                    <div className='rounded-[5px] pt-1 bg-blue text-white text-[14px] leading-[18.2px] font-Regular w-[56px] h-[26px] flex justify-center items-center'>
                      День {item.id}
                    </div>
                    <h2 className='text-blue text-[14px] font-Medium leading-[18.2px]'>
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
                              <img
                                src={Star.src}
                                alt='icon'
                                className='pt-[0px]'
                              />
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
        <div className='flex justify-center items-center md:justify-start md:w-full xx:pt-12 pt-[34px] md:pt-[32px]'>
          <button
            className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center md:ml-10 gap-2 rounded-[40px] bg-lime md:w-[152px] md:h-[30px] ${
              isHovered ? 'button-hovered' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p
              className={`text-[14px] font-Medium ml-7 md:ml-2 md:text-[10px] md:leading-[13px] ${
                isHovered ? 'text-blue duration-300' : ' text-dark'
              }`}
            >
              Создать ии-ассистента
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
                  className='arrow-in'
                  style={{
                    position: 'absolute',
                    right: '9px',
                    top: '9px',
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
