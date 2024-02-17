'use client';
import React, { useCallback, useState } from 'react';
import Arrow from '@/Images/ArrowCloud.svg';
import Hand from '@/Images/HandVector.svg';
import Star from '@/Images/star.svg';
import { paymentsArr } from '@/Types/Arrays';
import ArrowBtn from '@/Images/ArrowBtn.svg';
import Eye from '@/Images/Eye.svg';

const Payments = () => {
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

  return (
    <section className='px-[10px] pt-20'>
      <div className='flex flex-col items-center'>
        <h2 className='font-Regular text-[22px] leading-[26.4px] text-center text-dark'>
          Вы можете попробовать сервис NextBot бесплатно
        </h2>
        <div className='flex flex-col items-center pt-[10px]'>
          <div className='border-b-[1px] rounded-[20px] border-blue pb-2 px-6'>
            <p className='font-Regular text-base leading-[19.2px] text-center text-dark'>
              БЕСПЛАТНОЕ обучение, как ПРАВИЛЬНО делать ИИ-ботов
            </p>
          </div>
          <div className='w-[1px] h-[67px] bg-blue relative'>
            <div className='trans bottom-[-15px] absolute w-4 h-4 flex justify-center items-center bg-cloud rounded-full'>
              <div className=' w-2 h-2 bg-blue rounded-full' />
            </div>
          </div>
        </div>
        <p className='font-Regular text-[14px] leading-[16.8px] text-center text-dark w-[218px] pt-[18px]'>
          Можете выбрать любой тариф – от пробного до премиум
        </p>
      </div>
      <div className='pt-6 flex flex-wrap justify-center'>
        <div className='flex items-center gap-3'>
          <img
            src={Arrow.src}
            alt='icon'
            className='cursor-pointer active:scale-110 duration-300'
            onClick={handlePrev}
          />
          <img src={Hand.src} alt='icon' className='' />
          <img
            src={Arrow.src}
            alt='icon'
            onClick={handleNext}
            className='rotate-180 cursor-pointer active:scale-110 duration-300'
          />
        </div>
        <div>
          <div className='flex justify-center gap-[10px] pt-4'>
            {paymentsArr.map((item, index) => (
              <div
                key={item.id}
                className={`size-2 rounded-full ${
                  index === activeIndex ? 'active' : ''
                } ${index === activeIndex ? 'bg-blue' : 'bg-cloud'}`}
              ></div>
            ))}
          </div>
          <div className='hidden xl:flex'>
            {paymentsArr.map((item, _) => (
              <div
                key={item.id}
                className='pt-8 pb-12 pl-[13px] bg-cloud rounded-[20px]'
              >
                <h2 className='text-[36px] text-dark font-Regular leading-[43.2px]'>
                  {item.name}
                </h2>
                <div>
                  <p className='text-blue font-Medium leading-[19.2px] text-[16px]'>
                    {item.title}
                  </p>
                  <div>
                    {item.titleArr.map((item, _) => (
                      <span
                        key={item.id}
                        className='text-[12px] leading-[15.6px] text-dark font-Regular flex items-start'
                      >
                        <img src={Star.src} alt='icon' className='' />
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  {item.spanArr.map((item, _) => (
                    <p key={item.id}>{item.title}</p>
                  ))}
                </div>
                <div>
                  <h3>{item.cost} ₽</h3>
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
            ))}
          </div>
          <div className={` ${active === 'second' ? 'pt-6' : 'pt-3'}`}>
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
                .map((item, index) => (
                  <div
                    key={item.id}
                    className={`pt-8 pb-12 px-[13px] bg-cloud rounded-[20px] ${
                      active === 'second' && 'relative border-[1px] border-blue'
                    }`}
                  >
                    {active === 'second' && index === 0 && (
                      <div className='absolute bg-blue rounded-[10px] flex justify-center items-center h-11 px-3 top-[-20px] left-11'>
                        <p className='text-white font-Regular text-[14px] leading-[28.6px]'>
                          Самый популярный вариант
                        </p>
                      </div>
                    )}
                    <h2 className='text-[36px] text-dark font-Regular leading-[43.2px] text-center'>
                      {item.name}
                    </h2>
                    <div className='pt-4'>
                      <p className='text-blue font-Medium leading-[19.2px] text-[16px]'>
                        {item.title}
                      </p>
                      <div className='flex flex-col gap-[5.5px] pt-3'>
                        {item.titleArr.map((item, _) => (
                          <span
                            key={item.id}
                            className='text-[12px] leading-[15.6px] gap-1 text-dark font-Regular flex items-start'
                          >
                            <img src={Star.src} alt='icon' className='' />
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 pt-[23px]'>
                      {item.spanArr.map((item, _) => (
                        <p key={item.id}>{item.title}</p>
                      ))}
                    </div>
                    <div className='flex flex-col items-center pt-[122px]'>
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
        </div>
      </div>
      <div className='flex flex-col items-center pt-[59px]'>
        <div className='border-t-[1px] rounded-[20px] border-blue pt-6 px-6'>
          <p className='font-Regular text-base leading-[19.2px] text-center text-dark'>
            Оплатить можно с любой карты РФ. Для работы не нужен VPN
          </p>
        </div>
        <p className='font-Regular text-base leading-[19.2px] text-center text-dark pt-4'>
          У вас будет доступ к сервису NextBot в течение месяца, или пока не
          израсходуются все токены, предусмотренные тарифом.
        </p>
        <p className='font-Regular text-base leading-[19.2px] text-center text-dark pt-4'>
          За это время вы можете собрать ИИ-ассистента не только для Telegran,
          но и виджет с ИИ-консультантом для сайта.
        </p>
        <p className='font-Regular text-base leading-[19.2px] text-center text-dark pt-4'>
          А если у вас будет доступ к подключению SaleBot, то ИИ-ассистента
          можно подключить к WhatsApp, Avito или Instagram*
        </p>
        <div className='flex justify-center items-center flex-col pt-20'>
          <img src={Eye.src} alt='icon' />
          <p className='font-Medium text-base leading-[20.8px] text-center text-gray pt-2'>
            В некоторых случаях ИИ-ассистент
            <br /> от NextBot может полностью <br />
            заменить сотрудника на рядовых задачах
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payments;
