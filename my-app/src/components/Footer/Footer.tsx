import React from 'react';
import Star from '@/Images/StarWhite.svg';
import Cursor from '@/Images/Cursor.svg';
import Comp from '@/Images/Comp.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';

const Footer = () => {
  return (
    <section className='mx-[10px] bg-dark rounded-t-[40px] pt-[33px] mt-10'>
      <div className='px-[10px]'>
        <h2 className='text-white text-[22px] leading-[26.4px] font-Regular text-center w-[279px]'>
          Сделайте ИИ-бота и больше{' '}
          <span className='text-lime'>не теряйте ни одного клиента</span> при
          обращениях
        </h2>

        <div className='pt-[31px] relative pb-[87px]'>
          <div className='relative pl-4 py-4 bg-blue rounded-[20px] max-w-[280px]'>
            <p className='text-base leading-[19.2px] font-Regular text-white w-[225px]'>
              С ИИ-ботом стоимость обработки одного сообщения в{' '}
              <span className='font-Medium'>4 раза ниже</span>
            </p>
            <img
              src={Star.src}
              alt='icon'
              className='absolute right-4 bottom-3'
            />
          </div>
          <div className='absolute right-1 bottom-6'>
            <img src={Cursor.src} alt='cursor' className='' />
            <div className='bg-white text-[20px] text-dark font-Regular w-[114px] h-[31px] pt-1 flex justify-center items-center rounded-[16px] ml-3'>
              NEXTBOT
            </div>
          </div>
        </div>
      </div>
      <div></div> {/* FOR ANDREW!!! */}
      <div className='pt-[573px]'>
        <div>
          <h2 className='text-[22px] text-white leading-[26.4px] font-Medium text-center'>
            Чем больше однотипных обращений вы получаете, тем больше экономите с
            ИИ-ботом:
          </h2>
          <div className='flex flex-col items-center justify-center pt-[19px] gap-[13px]'>
            <div className='flex flex-col items-center justify-center gap-[7px]'>
              <div className='size-[9px] rounded-full bg-lime' />
              <p className='text-[12px] text-white leading-[14.4px] font-Regular w-[226px] text-center'>
                Для обработки 1000 обращений нужно 4-5 менеджеров (100-150 тысяч
                ₽) или 1 ИИ-бот (11 000 ₽ на работу сервиса)
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[7px]'>
              <div className='size-[9px] rounded-full bg-lime' />
              <p className='text-[12px] text-white leading-[14.4px] font-Regular w-[251px] text-center'>
                Для обработки 2000 обращений нужно 10 менеджеров (200-250 тысяч
                ₽) или все еще 1 ИИ-бот (11 000 ₽ на работу сервиса)
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center flex-col items-center pt-6'>
          <img src={Comp.src} alt='computer' />
          <div className='w-[276px] flex justify-center items-center border-[1px] border-lime bg-[#1E2121] rounded-[10px] py-3 px-1'>
            <p className='text-white text-[14px] leading-[16.8px] text-center'>
              При одинаковой конверсии{' '}
              <span className='text-lime font-Medium'>ваша прибыль растет</span>{' '}
              просто за счет увеличения трафика и быстро обработанных заявок
            </p>
          </div>
        </div>
        <button className='ml-[10px] z-10 h-[50px] flex flex-row items-center gap-2 justify-center rounded-[40px] bg-lime w-[280px] mt-6'>
          <p className='text-[18px] text-dark font-Medium mr-1'>
            Создать ии-бота
          </p>
          <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
            <img src={ArrowBtn.src} alt='ArrowBtn' />
          </div>
        </button>
      </div>
      <div className='flex-wrap flex justify-between items-center px-7 gap-[67px] pt-20 pb-10'>
        <div className='flex flex-wrap justify-between items-center gap-[13px] max-w-[550px]'>
          <span className='text-white text-base leading-[19.2px] font-Regular text-center max-w-[286px]'>
            Если у вас остались вопросы, свяжитесь с нами в WhatsApp
          </span>
          <button className='text-lime border-[1px] border-lime rounded-[40px] w-[242px] h-[51px] flex justify-center items-center text-[18px] font-Medium'>
            написать в WhatsApp
          </button>
        </div>
        <p className='text-white text-[11.5px] leading-[14.4px] font-Regular text-center'>
          Политика обработки персональных данных
        </p>
      </div>
    </section>
  );
};

export default Footer;
