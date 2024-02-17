'use client';
import React from 'react';
import Person from '@/Images/Person.svg';
import Message from '@/Images/Message.svg';

const Business = () => {
  const images = Array(9).fill(Message);

  return (
    <section className='flex flex-col items-center pt-[78px]'>
      <h2 className='text-[22px] font-Regular text-dark text-center w-[269px] ss:w-fit leading-[26.4px]'>
        Идеально для бизнеса, где надо обрабатывать большой поток однотипных
        сообщений
      </h2>
      <div className='pt-[17px] flex justify-center relative md:pt-6'>
        <img
          src={Person.src}
          alt='icon'
          className='ss:scale-125 md:scale-150'
        />
        {/* <div className='overflow-x-scroll whitespace-nowrap w-full absolute top-7  left-4'>
          <div className='flex justify-center '>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                className='mr-4'
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Business;
