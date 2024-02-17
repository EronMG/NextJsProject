import { stepsArr } from '@/Types/Arrays';
import React from 'react';

const Steps = () => {
  return (
    <section className='pl-[10px] pt-[84px] overflow-hidden'>
      <div className='relative flex flex-col justify-center items-center'>
        <h2 className='text-dark text-[22px] font-Regular text-center leading-[26.4px]'>
          <span className='text-blue font-Medium'>Всего 5 шагов</span> и у вас
          будет свой ИИ-бот для бизнеса
        </h2>
        <img
          src='https://s3-alpha-sig.figma.com/img/2152/4b79/e4763653a5f4a7733547354e7fe3c1a9?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hd7rtRYYWvKle166qShVpjUu0Kf4n2MxmAqMW0NFKhujcW0xxLOm3uWU239NOrQAAvu~IeISFr~mNqL9oRk3GJ27ZQSubEjbjhAvmR467SuA~jhN3U~VhqvVx31P8avUUoGqA6PSJNnRSicapAc4vkHhSaFnpxCQk8-OhO5s3X1GGhVgJRLxc07kI9hnZYbfodx8pFHNZQ5JDnLePuuCdYuqQoXmwIXUWxTui8TOaSSQB9Pay6vtY0REHsGu4etAoLhsMZRyuSRYuzpqZvoWwqpl5MlAG8YTx5~QzkUQdOjuPjz-G15A8VrlZ1YT6aJayv8qJMOVEfncdcIvgsAQbQ__'
          alt='img'
          className='absolute top-0 w-[310px] h-[235px] scale-125'
        />
      </div>
      <div className='flex flex-wrap gap-5 pt-[148px]'>
        {stepsArr.map((item, _) => (
          <div key={item.id} className='flex flex-col gap-[10px]'>
            <div className='flex justify-center items-center bg-blue w-[72px] h-[45px] rounded-[10px] relative'>
              <p className=' text-white font-Regular text-[40px] absolute top-0'>
                {item.count}
              </p>
            </div>
            <h3
              className={`font-Medium text-blue text-base leading-[20.8px] ${
                item.id === 3 ? 'w-[260px]' : ''
              }`}
            >
              {item.name}
            </h3>
            <p className='text-[14px] leading-[16.8px] font-Regular'>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
