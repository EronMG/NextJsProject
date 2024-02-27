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
      <section className='flex flex-col xm:px-[10px] items-center md:items-center md:px-[50px] lg:ml-0 lg:justify-center bb:max-w-[1920px] mt-[80px] xx:mt-[180px] md:mt-[60px]'>
        <div className='flex items-center pb-[14px] border-b-2 border-blue md:w-full xx:w-[1577px] md:pb-2'>
          <h2 className='max-w-[292px] text-[22px] leading-[26.4px] text-center font-Regular md:max-w-[531px] md:leading-[21.6px] md:text-[18px] md:text-start xx:max-w-[1576px] lg:text-start lg:px-2 lg:max-w-[1576px] xx:text-start xx:text-[36px] xx:leading-[43.2px] xx:pl-[150px] bb:pl-[0]'>
            В NextBot вы создадите бота с искусственным интеллектом. Он общается{' '}
            <br className='hidden xx:flex' />
            как человек. Клиенты не отличают его от настоящего консультанта
          </h2>
        </div>
        <div className='flex flex-col items-center pt-5 md:hidden'>
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
                    src='https://s3-alpha-sig.figma.com/img/34ed/a0e4/97db142bfac37284807115474f9d0027?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWOKsGjb2kEVKlJ8E6mqLhFnKWMyyljqaZ~QWjGd1uIStVaI2pEanrmNtGEdilS7hyGJadpLoJZe9M1vwCxtRb9t79v4Mt2wVTX892uSZ9nkQMlLxb2C~ZP4Mt6KXoh9JZt~3GPiv4lbR8NMdl2c~LJnEaJ6QMlRfb2Kfp1LiMCs0eD7hWHH88xoPGVVn2nguPrsHET235Wg1bVHFMX4jTGrHEKYlXwxr8M52wcqyjYRTFZZtndlzfowWf3iTPpPHrYoodo-Aby2TuSTlim3Fa4HK3TDhfiNu-WSIQT1gVMVoDai5moOuPZWmnnn6kbqmbdZ0-~Q0qGsUisoi4IIbA__'
                    alt='TryitExampleIMG'
                    className='rounded-[10px]'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden xx:flex pl-[100px] bb:pl-[259px] justify-center items-start pt-10 w-[1577px] gap-[44px] '>
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
        <div className='hidden mx-3 lg:flex xx:hidden lg:max-w-[1224px] justify-end items-start pt-10 w-fit gap-[20px] '>
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
                    className={`text-[18px] leading-[22px] font-Regular ${
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
            className='w-[580px] h-[434px] rounded-[10px] py-[29px] px-[42px] bg-cloud mt-[50px]'
          />
        </div>
        <div className='hidden md:flex lg:hidden justify-end items-start pt-6 w-fit gap-[31px] '>
          <div>
            <p className='text-[14px] leading-[18.2px] font-Regular text-dark'>
              Без сложных настроек
            </p>
            <div className='flex flex-col gap-[5px] pt-[2px]'>
              {TabContent.map((item, index) => (
                <div
                  key={index}
                  className={`max-w-[196px] h-[42px] border-[1px] border-blue rounded-[10px] flex justify-start font-Regular items-center transition-all duration-500 pl-[11px] pt-[10px] pb-[6px] cursor-pointer ${
                    activeTab === index
                      ? 'bg-blue text-white'
                      : 'bg-white text-dark'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <p className={`text-[12px] leading-[15.6px] font-Regular `}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='relative flex pt-[40px] pr-[5px]'>
            <img
              src={tabs.src}
              alt='icon'
              className='rotate-180 absolute top-[35px] right-[-3px] w-[13.8px] h-2 object-cover'
            />
            <img
              src={tabs.src}
              alt='icon'
              className='w-[13.8px] h-2 object-cover'
            />
          </div>
          <img
            src={TabContent[activeTab].imageSrc}
            alt='Tab Content'
            className='w-[386px] h-[264px] rounded-[4px] py-[15px] px-[21px] bg-cloud mt-[20px] ml-1'
          />
        </div>
      </section>
    </>
  );
}

export default Tryit;
