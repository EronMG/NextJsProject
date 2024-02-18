import { iiArr } from '@/Types/Arrays';
import React from 'react';
import Mobile from '@/Images/mobile.jpg';

const II = () => {
  return (
    <section className='pt-[71px] px-[10px]'>
      <h2 className='text-[22px] leading-[26.4px] font-Regular text-center text-dark'>
        ИИ-бот на 100% походит на человека и не придумывает ничего лишнего при{' '}
        <br className='md:hidden' />
        общении с клиентами
      </h2>
      <div className='flex flex-wrap gap-7 justify-center pt-6'>
        {iiArr.map((item, _) => (
          <div
            key={item.id}
            className='flex flex-col items-center max-w-[355px]'
          >
            <div className='size-[21px] bg-cloud rounded-full justify-center items-center flex'>
              <div className='size-[11px] bg-blue rounded-full' />
            </div>
            <p className=' text-[13px] leading-[16.8px] text-center text-dark pt-1'>
              {item.title}
            </p>
            <img
              src={Mobile.src}
              alt='icon'
              className='w-[197px] h-[308px] pt-[10px]'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default II;
