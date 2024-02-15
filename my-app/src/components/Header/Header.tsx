import React from 'react';

const Header = () => {
  return (
    <header className=' mt-[31px] flex justify-center '>
      <div className='w-[1576px] flex justify-between'>
        <div className='text-xl font-Regular text-dark border-[1px] border-dark rounded-[41px] w-[145px] h-[51px] flex justify-center items-center'>
          NEXT BOT
        </div>
        <nav className='bg-cloud rounded-[41px] border-[1px] border-dark flex justify-between pl-7 pr-[29px] w-[511px] items-center'>
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
    </header>
  );
};

export default Header;
