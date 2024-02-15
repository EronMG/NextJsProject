import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className='md:mt-[31px] flex justify-center'>
      <div className='hidden md:flex w-full max-w-[1576px] justify-between gap-3'>
        <div className='text-xl font-Regular text-dark border-[1px] border-dark rounded-[41px] min-w-[145px] h-[51px] flex justify-center items-center'>
          NEXT BOT
        </div>
        <nav className='bg-cloud rounded-[41px] border-[1px] border-dark flex justify-between pl-7 pr-[29px] w-full max-w-[511px] items-center xl:ml-[140px]'>
          {['Кейсы', 'Тарифы', 'Бесплатное обучение'].map((item, index) => (
            <a key={index} className='text-dark font-Regular text-base'>
              {item}
            </a>
          ))}
        </nav>
        <div className='flex gap-5'>
          <button className='text-xl font-Regular text-dark border-[1px] border-dark rounded-[41px] w-[99px] h-[51px] flex justify-center items-center'>
            Вход
          </button>
          <button className='text-xl font-Regular text-dark border-[1px] border-dark rounded-[41px] w-[167px] h-[51px] flex justify-center items-center'>
            Регистрация
          </button>
        </div>
      </div>
      <div className='md:hidden flex justify-between items-center pt-[10px] w-full px-2 mm:px-8'>
        <div className='text-[10px] font-Regular text-dark border-[1px] border-dark rounded-[41px] min-w-[68px] h-[19px] flex justify-center items-center'>
          NEXT BOT
        </div>
        <RxHamburgerMenu className='text-lg' />
      </div>
    </header>
  );
};

export default Header;
