import React from 'react';
import Settings from '@/Images/Settings.svg';
import Diagramms from '@/Images/diagramms.svg';
import Messanger from '@/Images/Messanger.jpg';
import AI from '@/Images/AI.svg';
import { bussinesArr } from '@/Types/Arrays';
import { FaArrowUp } from 'react-icons/fa6';

function Array() {
  return (
    <div className='flex flex-wrap gap-[10px] justify-center pt-[13px]'>
      {bussinesArr.map((item, _) => (
        <div
          key={item.id}
          className={`bg-blue mm:max-w-[440px] w-full flex p-[10px] gap-[10px] justify-between rounded-[10px] ${
            item.id === 1
              ? 'flex-row'
              : item.id === 3
              ? 'flex-row'
              : item.id === 5
              ? 'flex-row'
              : 'flex-row-reverse'
          }`}
        >
          <img
            src={Messanger.src}
            alt='jpg'
            className='w-[140px] h-[117px] rounded-[5px] mm:w-[200px] mm:h-[160px]'
          />
          <div
            className={`flex flex-col justify-between  ${
              item.id === 1
                ? ' items-end'
                : item.id === 3
                ? ' items-end'
                : item.id === 5
                ? ' items-end'
                : ''
            }`}
          >
            <img src={AI.src} alt='icon' className='w-[35px] mm:w-[50px]' />
            <h4 className='text-white text-[12px] font-Regular mm:max-w-[210px] mm:text-base leading-[15.4px]'>
              <span className='text-lime'>{item.title.split(' ')[0]}</span>{' '}
              {item.title.slice(item.title.indexOf(' ') + 1)}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const Create = () => {
  return (
    <section className='flex flex-col items-center px-[10px] pt-[78px] leading-[26.4px]'>
      <div className='md:flex flex-wrap justify-center items-center md:gap-6'>
        <h2 className='text-[22px] font-Regular text-dark text-center w-[267px] ss:max-w-[472px] ss:w-fit'>
          Вы соберете ИИ-бота под задачи вашего бизнеса, который может заменить
          <span className='text-blue italic'>
            консультанта, администратора, менеджера по продажам, помощника РОПа
          </span>
        </h2>
        <div className='flex border-b-[4px] pb-1 border-blue gap-3 justify-between pt-7 md:pt-0'>
          <img
            src={Settings.src}
            alt='icon'
            className='rotate-icon w-[65px] h-[65px]'
          />
          <h3 className='text-blue text-base font-Medium mm:text-lg  mm:w-[400px] leading-[20.8px]'>
            Можете пройти бесплатное обучение и создать ИИ-бота самостоятельно
            или заказать разработку у нас
          </h3>
        </div>
      </div>
      <div className='flex pt-8 md:items-center'>
        <h4 className='text-[14px] text-dark font-Medium mm:max-w-[274px] mm:text-lg leading-[18.2px]'>
          Бот совершает столько касаний, чтобы к вам попадал максимально теплый
          лид
        </h4>
        <img src={Diagramms.src} alt='icon' className='mm:w-[200px]' />
      </div>
      <FaArrowUp className='rotate-180 text-cloud text-[28px] mt-1' />
      {Array()}
    </section>
  );
};

export default Create;
