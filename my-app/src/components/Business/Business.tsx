'use client';
import React, { useEffect } from 'react';
import Person from '@/Images/Person.svg';
import Message from '@/Images/Message.svg';

const Business = () => {
  const images = Array(26).fill(Message);
  useEffect(() => {
    const handleScroll = () => {
      // Получаем все элементы с классом icon
      const icons = document.querySelectorAll('.icon');

      icons.forEach((icon) => {
        // Проверяем, является ли элемент HTMLElement
        if (icon instanceof HTMLElement) {
          let scrollDistance = window.scrollY;
          const initialOffset = 0;
          const moveDistance = scrollDistance * 0.1 + initialOffset; // Расстояние смещения с учетом прокрутки
          icon.style.transform = `translateX(${-moveDistance}px)`; // Применяем смещение
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Пустой массив зависимостей, чтобы эффект выполнялся один раз

  return (
    <section className='flex flex-col items-center pt-[78px] xx:pt-[82px] overflow-hidden'>
      <h2 className='text-[22px] font-Regular text-dark text-center w-[269px] ss:w-fit leading-[26.4px] xx:text-[36px] xx:w-[1039px] xx:leading-[43.2px]'>
        Идеально для бизнеса, где надо обрабатывать большой поток однотипных
        сообщений
      </h2>
      <div className='pt-[17px] flex justify-center items-center relative md:pt-6 xx:pt-5 w-full max-w-[700px] xx:max-w-[1700px]'>
        <img
          src={Person.src}
          alt='icon'
          className='ss:scale-125 md:scale-150 xx:w-[342px] xx:h-[191px] xx:scale-100'
        />
        <div className='scroll-wrapper h-[97px] xx:h-[130px] absolute xx:left-40 top-5 xx:top-0'>
          <div className='scroll-container top-[7px] left-1 absolute w-full xx:top-10  xx:left-[-400px]'>
            <div className='flex justify-center xx:gap-6'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className={`icon mr-4  xx:w-[91px] xx:h-[87px] ${
                    index === images.length - 1 ? 'last-icon' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
