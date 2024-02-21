'use client';
import tabs from '@/Images/tabs.svg';
import { useState } from 'react';

const TabContent = [
  {
    title: 'ИИ-бот на основе ChatGPT 3,5 Turbo и ChatGPT 4 Turbo',
    imageSrc:
      'https://www.figma.com/file/2xzC7PiYlt9Zkqn9M7sAST/image/34eda0e497db142bfac37284807115474f9d0027',
  },
  {
    title: 'Настройка без знаний программирования',
    imageSrc:
      'https://www.figma.com/file/2xzC7PiYlt9Zkqn9M7sAST/image/34eda0e497db142bfac37284807115474f9d0027',
  },
  {
    title: 'Все основные настройки вынесены в интерфейс сервиса',
    imageSrc:
      'https://www.figma.com/file/2xzC7PiYlt9Zkqn9M7sAST/image/34eda0e497db142bfac37284807115474f9d0027',
  },
  {
    title: 'Понятное объяснение для каждого пункта настроек',
    imageSrc:
      'https://www.figma.com/file/2xzC7PiYlt9Zkqn9M7sAST/image/34eda0e497db142bfac37284807115474f9d0027',
  },
];

function Tryit() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <section className='w-screen flex flex-col items-center mt-[80px] xx:mt-[189px]'>
        <div className='flex justify-center items-center pb-[11px] border-b-2 border-blue'>
          <h2 className='max-w-[292px] text-[22px] leading-[26.4px] text-center font-Regular md:max-w-[600px] xx:mr-1 xx:w-[1576px] xx:max-w-[1576px] xx:text-start xx:text-[36px] xx:leading-[43.2px]'>
            В NextBot вы создадите бота с искусственным интеллектом. Он общается{' '}
            <br className='hidden xx:flex' />
            как человек. Клиенты не отличают его от настоящего консультанта
          </h2>
        </div>
        <div className='flex flex-col items-center pt-5 lg:hidden'>
          <p className='text-[16px] leading-[20.8px] text-center font-Regular pb-5 md:text-xl'>
            Без сложных настроек
          </p>
          <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
            {[
              'ИИ-бот на основе ChatGPT 3,5 Turbo и ChatGPT 4 Turbo',
              'Настройка без знаний программирования',
              'Все основные настройки вынесены в интерфейс сервиса',
              'Понятное объяснение для каждого пункта настроек',
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center gap-[5px]'>
                <div className='w-[300px] h-[52px] flex items-center justify-center bg-blue rounded-[10px]'>
                  <p
                    className={`h-[42px] text-[16px] leading-[20.8px] text-center text-Regular text-white
                  ${index === 0 || 1 ? 'max-w-[230px]' : ''}
                  ${index === 2 || 3 ? 'max-w-[260px]' : ''}
                  `}
                  >
                    {item}
                  </p>
                </div>
                <div className='w-[300px] h-[218px] p-[17px] flex items-center justify-center bg-cloud rounded-[10px]'>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/34ed/a0e4/97db142bfac37284807115474f9d0027?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0AczAYtdLUuAHnn3YGcQgZtoFSv46wJ5CVSgPMZGp50CnLUooiHi-P50dXj12zvkFKtmmjOJ6qju5FfgrBPBpiHMLskV1U-sS2nfoOd3laO0jqPi~8QNyAvxtQxPNQ~UvTpzBEWCl8WWLg~DqfkAeJdUDnFoAN~uNjRrdUcX8WFTuJQZnjFEdjmf7A121CcB7NiRfd7C1Hk-lkZxIsQKAUrI1tSEGKbwsa91p19~JteuHr0B9ffAzuN4qan981ztMdvBgEtfga2GDOAHjQo9q--EZuMP2V-Qe4Zq3Ioj66KJiD3RnHVK4s7UFlUrdYX2B84QyYG5aR1ubK2eTvWPg__'
                    alt='TryitExampleIMG'
                    className='rounded-[10px]'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden xx:flex justify-end items-start pt-10 w-[1576px] gap-[44px] '>
          <div>
            <p className='text-[22px] leading-[28.6px] font-Regular text-dark'>
              Без сложных настроек
            </p>
            <div className='flex flex-col gap-[10px] pt-5'>
              {TabContent.map((item, index) => (
                <div
                  key={index}
                  className={`max-w-[380px] h-[68px] border-[1px] border-blue rounded-[10px] flex justify-start font-Regular items-center transition-all duration-500 pl-[11px] pt-[10px] pb-[6px] cursor-pointer ${
                    activeTab === index
                      ? 'bg-blue text-white'
                      : 'bg-white text-dark'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <p
                    className={`text-xl leading-[26px] font-Regular ${
                      index === 0 && 'max-w-[286px]'
                    } ${index === 2 && 'max-w-[306px]'} ${
                      index === 3 && 'max-w-[325px]'
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='relative flex pt-[150px] pr-[24px] '>
            <img
              src={tabs.src}
              alt='icon'
              className='rotate-180 absolute top-[135px] right-[-3px]'
            />
            <img src={tabs.src} alt='icon' />
          </div>
          <img
            src={TabContent[activeTab].imageSrc}
            alt='Tab Content'
            className='w-[780px] h-[534px] rounded-[10px] py-[29px] px-[42px] bg-cloud mt-[50px]'
          />
        </div>
        <div className='hidden lg:flex xx:hidden justify-end items-start pt-10 w-fit gap-[44px] '>
          <div>
            <p className='text-[22px] leading-[28.6px] font-Regular text-dark'>
              Без сложных настроек
            </p>
            <div className='flex flex-col gap-[10px] pt-5'>
              {TabContent.map((item, index) => (
                <div
                  key={index}
                  className={`max-w-[380px] h-[68px] border-[1px] border-blue rounded-[10px] flex justify-start font-Regular items-center transition-all duration-500 pl-[11px] pt-[10px] pb-[6px] cursor-pointer ${
                    activeTab === index
                      ? 'bg-blue text-white'
                      : 'bg-white text-dark'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <p
                    className={`text-xl leading-[26px] font-Regular ${
                      index === 0 && 'max-w-[286px]'
                    } ${index === 2 && 'max-w-[306px]'} ${
                      index === 3 && 'max-w-[325px]'
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='relative flex pt-[150px] pr-[24px] '>
            <img
              src={tabs.src}
              alt='icon'
              className='rotate-180 absolute top-[135px] right-[-3px]'
            />
            <img src={tabs.src} alt='icon' />
          </div>
          <img
            src={TabContent[activeTab].imageSrc}
            alt='Tab Content'
            className='w-[680px] h-[534px] rounded-[10px] py-[29px] px-[42px] bg-cloud mt-[50px]'
          />
        </div>
      </section>
    </>
  );
}

export default Tryit;
