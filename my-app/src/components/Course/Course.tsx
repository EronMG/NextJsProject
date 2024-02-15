import React from 'react';
import Press from '@/Images/press.svg';
import Star from '@/Images/star.svg';
import { FaArrowUp } from 'react-icons/fa6';
import { courseArr } from '@/Types/Arrays';

const Course = () => {
  return (
    <section className='px-[10px] pt-[77px]'>
      <div className='flex flex-wrap justify-center items-center border-b-[2px] border-blue'>
        <h2 className=' font-Regular text-dark text-[22px] leading-[26.4px] text-center w-[278px]'>
          На бесплатном обучении вы получите пошаговую инструкцию,
          <br /> как собрать ИИ-бота, который поддерживает беседу и мотивирует
          клиента оставить заявку
        </h2>
        <img src={Press.src} alt='icon' className='mt-[11px]' />
      </div>
      <div className='pt-3'>
        <div className='flex flex-wrap justify-end gap-2'>
          <p className='text-[14px] leading-[18.2px] text-dark font-Regular text-center'>
            Вам не нужно программировать. Достаточно текстом ПРАВИЛЬНО описать,
            как должен действовать бот. Этому мы вас тоже научим
          </p>
          <div className='flex gap-3'>
            <button className=' size-[47px] bg-cloud rounded-full flex justify-center items-center'>
              <FaArrowUp className='-rotate-90 text-white' />
            </button>
            <button className='size-[47px] flex bg-blue rounded-full justify-center items-center'>
              <FaArrowUp className='rotate-90 text-white' />
            </button>
          </div>
        </div>
        <div className='flex overflow-hidden pt-[25px]'>
          {courseArr.map((item, _) => (
            <div
              key={item.id}
              className='p-3 rounded-[10px] bg-cloud min-w-[300px]'
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
      </div>
    </section>
  );
};

export default Course;
