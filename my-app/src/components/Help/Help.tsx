import React from 'react';
import NEXTBOT from '@/Images/nextbot.svg';
import Rotate from '@/Images/rotate.svg';
import Hands from '@/Images/hands.svg';
import BG from '@/Images/helpBG.svg';
import { helpArr } from '@/Types/Arrays';

const Help = () => {
  return (
    <section className='bg-dark rounded-[40px] pt-[30px] pb-[33px] mx-[10px] mt-[78.5px]'>
      <div className='px-[10px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='border-b-[2px] border-white flex justify-center'>
            <img src={NEXTBOT.src} alt='nextbot' />
          </div>
          <h2 className='text-white font-Regular leading-[28.6px] text-center text-[22px] '>
            Давайте посмотрим на конкретном примере,{' '}
            <span className='text-lime italic'>что умеет ИИ-бот</span>
          </h2>
        </div>
        <div className='pt-[30px] pl-[6px] w-full'>
          <p className='text-white font-Regular leading-[19.2px] text-[16px]'>
            ИИ-консультант обработал{' '}
            <span className='text-lime italic'>
              <br className='md:hidden' />
              440 обращений
            </span>{' '}
            на Avito
          </p>
          <div className='flex items-end justify-end pt-9 relative'>
            <img
              src='https://s3-alpha-sig.figma.com/img/4be6/c15e/79d43dd925d1f844dce8930a03e43f91?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8nUcuxgLUUdb4qbSLhaFINh4JQhbKrAaNa~BASSG8B3do16DDs7KC~EL00mzdoRM43Br~x5t4V066n-qd5TItrEY7fhDyHbsqQ5bSO2yGsAgEh7ltLoNCPjEZ6iHaaWCfEjjPuVqYUyEA0u9g4JaLQqe9RuCyL9ywCCC20LoP-cTna7m054ZS3aYEgIbM0jUoYNUpXgwQ0sp3qDWQlDzbwC-j3BiVPXmz2A7LVC7q8chVB9YEW-s08JDZFYnjKUdJadMQeDK7IsQWsRdGxR3~W0Le6v~Nnaj4-guhiao8tUC6G-2-hb-PmD5Ht2v1qh9VnrHMtMyasmWyJ-hxQDJw__'
              alt='icon'
              className='w-[100px] h-[90px] absolute left-16 top-[-5px] '
            />
            <p className='text-white font-Regular leading-[19.2px] w-[125px] text-end text-[16px]'>
              сэкономил почти <span className='text-lime'>50 000 ₽</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] pt-7'>
          <p className='text-white text-sm bg-[#1E2121] rounded-[10px]  font-Regular leading-[18.2px] pt-3 pl-[13px] pb-[9px] pr-2'>
            В декабре мы продавали настоящие елки. За две недели до Нового года
            спрос на товар традиционно самый высокий. Заявки поступают со всей
            России, круглосуточно.
          </p>
          <p className='text-white text-sm bg-[#1E2121] rounded-[10px]  font-Regular leading-[18.2px] pt-3 pl-[13px] pb-[9px] pr-2'>
            Чтобы оперативно обрабатывать все заявки и сократить расходы на
            работу менеджера, подключили ИИ-консультанта на Avito.
          </p>
        </div>
        <div className='pt-[45.5px]'>
          <div>
            <div className='flex flex-col gap-7'>
              <div className='relative flex justify-end pr-[15px]'>
                <p className='w-[237px] z-50 text-base font-Regular leading-[20.8px] pl-[14px] pt-[7px] pb-[5px] pr-[18px] text-white bg-blue rounded-[10px]'>
                  Прописали для ИИ-бота сценарий и настройки в сервисе NextBot
                </p>
                <div className='absolute top-[-30px] z-10 left-0'>
                  <img src={Rotate.src} alt='icon' />
                  <div className='size-4 rounded-full bg-cloud flex justify-center items-center absolute top-[22px] left-[20px]'>
                    <div className='size-2 rounded-full bg-blue' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[14px] text-white font-Regular leading-[18.2px]'>
                  Поставили ИИ-боту задачу – собрать все необходимые данные для
                  оформления доставки.
                </p>
                <p className='text-[14px] text-white font-Regular leading-[18.2px]'>
                  Второй допустимый конечный результат – клиент должен был
                  спросить, по какому адресу он может прийти и купить елку
                </p>
              </div>
            </div>
            <img src={Hands.src} alt='icon' className='mt-4 ml-[6px]' />
          </div>
          <div className='pt-[30px]'>
            {helpArr.map((item, _) => (
              <p
                key={item.id}
                className={`${
                  item.id === 1
                    ? 'text-blue text-[16px] italic font-Regular leading-[20.8px] px-[10px] bg-cloud rounded-full w-fit mb-4 h-[27px] flex justify-center items-center'
                    : 'text-cloud text-[11px] font-Regular leading-[15.6px] px-[10px] border-[1px] border-cloud  rounded-full w-fit mb-[5px] h-[27px] flex justify-center items-center'
                }`}
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='pt-10 relative'>
        <img src={BG.src} alt='bg' className='absolute top-2' />
        <div className='pt-[82px] flex flex-col gap-[14px] items-center'>
          <h3 className='text-base leading-[20.8px] text-white  text-center font-Regular'>
            Периодически читали переписки
            <br className='md:hidden' /> ИИ-ассистента с клиентами и
            <br className='md:hidden' /> вносили корректировки,
            <span className='text-lime italic'>
              чтобы бот обучался и совершенствовался
            </span>
          </h3>
          <img
            src='https://s3-alpha-sig.figma.com/img/cba6/7c30/673c2f4819285845035110e2f532ff98?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VjrwpkZYEANX8-H9-uFxjHm~bcpwK9AHbZ1-nGFbC8Xktdd9v1K54CyNWNCE-TJXyeZl98Be34hPZJM5nUgJ8CsHr2Ws6CeTvwXdUacceBcqfAbnaOKgKrDB-Jg3-4c7AkdgbnKeCgxka-5x9HoMZ0I0J-0ic-aVA95xjiBwjthw6r1o6aYR6eOTZOnmp7ebRar8fzduuKrVeAIX9CQKMgCjDhUCzPc7Fr5sDWlsIReROpWBtUyPfZzpjjQ6DSxmrBrZ~QudZsX5WLIkzAhHobIviWkJluaaoNdb0ghfzs4VjB8o-1YGK5olcvXRL6XcCgKZ9Z3tS18Y~8BvBFdHKQ__'
            alt='image'
            className='rounded-[10px] w-[280px] h-[183px]'
          />
        </div>
      </div>
      <div className='px-[10px] pt-[30px]'>
        <h2 className='text-white font-Regular text-base leading-[20.8px] text-center'>
          ИИ-ассистент за месяц обработал{' '}
          <span className='text-lime font-Bold'>
            440 обращений, отправил 2640 сообщений.
          </span>{' '}
          В 2023 г. нам потребовалось бы нанять для этого двух менеджеров
        </h2>
        <div className='flex flex-wrap gap-[10px]'></div>
      </div>
    </section>
  );
};

export default Help;
