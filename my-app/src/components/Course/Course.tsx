import React from 'react';
import Press from '@/Images/press.svg';
import Star from '@/Images/star.svg';
import { FaArrowUp } from 'react-icons/fa6';
import { courseArr } from '@/Types/Arrays';
import ArrowBtn from '@/Images/ArrowBtn.svg';

const Course = () => {
  return (
    <section className='px-[10px] pt-[77px]' id='case'>
      <div className='flex flex-wrap justify-center items-center border-b-[2px] border-blue'>
        <h2 className=' font-Regular text-dark text-[22px] leading-[26.4px] text-center max-w-[278px] ss:max-w-[450px]'>
          На бесплатном обучении вы получите пошаговую инструкцию,
          <br className='sm:hidden' /> как собрать ИИ-бота, который поддерживает
          беседу и мотивирует клиента оставить заявку
        </h2>
        <img src={Press.src} alt='icon' className='mt-[11px]' />
      </div>
      <div className='pt-3 flex flex-col items-center mm:pt-6'>
        <div className='flex flex-wrap justify-end gap-2 ss:justify-center mm:flex-col mm:items-center'>
          <p className='text-[14px] leading-[18.2px] text-dark font-Regular text-center mm:max-w-[500px] md:text-base'>
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
        <div className='flex overflow-hidden pt-[25px] max-w-[300px] md:flex-wrap md:max-w-[1576px] md:justify-center md:gap-3'>
          {courseArr.map((item, _) => (
            <div
              key={item.id}
              className='p-3 rounded-[10px] bg-cloud min-w-[300px] md:w-[300px] md:h-[416px]'
            >
              <div className='flex flex-col gap-2'>
                <div className='rounded-[5px] bg-blue text-white text-[14px] font-Regular w-[64px] h-6 flex justify-center items-center'>
                  День {item.id}
                </div>
                <h2 className='text-blue text-[14px] font-Medium leading-[18.2px]'>
                  {item.name}
                </h2>
              </div>
              <div className='pt-[10px] flex flex-col gap-[10px]'>
                {item.titleArr.map((item, _) => (
                  <div key={item.id}>
                    <p className='text-dark text-[14px] font-Medium leading-[18.2px]'>
                      {item.title}
                    </p>
                    <div className='flex flex-col pl-3'>
                      {item.liArr.map((item, _) => (
                        <span
                          key={item.id}
                          className='flex items-start text-dark text-[12px] font-Regular leading-[15.6px] pt-[6px] gap-[6px]'
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
        <div className='flex justify-center items-center'>
          <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime md:w-[280px] mt-[35px]'>
            <p className='text-[14px] text-dark font-Medium ml-7 md:text-[18px]'>
              Создать ии-ассистента
            </p>
            <div className='flex items-center justify-center size-7 rounded-full bg-dark'>
              <img src={ArrowBtn.src} alt='ArrowBtn' />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
