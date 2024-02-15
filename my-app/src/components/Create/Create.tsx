import React from 'react';
import Settings from '@/Images/Settings.svg';
import Diagramms from '@/Images/diagramms.svg';
import Messanger from '@/Images/Messanger.jpg';
import AI from '@/Images/AI.svg';
import { bussinesArr } from '@/Types/Arrays';

function Array() {
  return (
    <div className='flex flex-wrap gap-[10px] justify-center'>
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
            <h4 className='text-white text-[12px] font-Regular mm:max-w-[210px] mm:text-base'>
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
    <section className='flex flex-col items-center px-[10px]'>
      <h2 className='text-[22px] font-Regular text-dark text-center w-[267px]'>
        Вы соберете ИИ-бота под задачи вашего бизнеса, который может заменить
        <span className='text-blue italic'>
          консультанта, администратора, менеджера по продажам, помощника РОПа
        </span>
      </h2>
      <div className='flex border-b-[4px] border-blue justify-between'>
        <img
          src={Settings.src}
          alt='icon'
          className='rotate-icon w-[63px] h-[63px]'
        />
        <h3 className='text-blue text-base font-Medium mm:text-lg mm:w-[400px]'>
          Можете пройти бесплатное обучение и создать ИИ-бота самостоятельно или
          заказать разработку у нас
        </h3>
      </div>
      <div className='flex'>
        <h4 className='text-[14px] text-dark font-Medium mm:max-w-[274px] mm:text-lg'>
          Бот совершает столько касаний, чтобы к вам попадал максимально теплый
          лид
        </h4>
        <img src={Diagramms.src} alt='icon' className='mm:w-[200px]' />
      </div>
      {Array()}
    </section>
  );
};

export default Create;
