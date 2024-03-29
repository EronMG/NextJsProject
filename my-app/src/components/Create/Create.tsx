'use client';
import React, { useEffect, useState } from 'react';
import Settings from '@/Images/Settings.svg';
import Diagramms from '@/Images/diagramms.svg';
import Messanger from '@/Images/Messanger.jpg';
import AI from '@/Images/AI.svg';
import { bussinesArr } from '@/Types/Arrays';
import { FaArrowUp } from 'react-icons/fa6';
import Eye1 from '@/Images/Eye1.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';
import Mobile from '@/Images/mobile.jpg';
interface BusinessItem {
  id: number;
  title: string;
}

function Array() {
  return (
    <div className='flex flex-wrap gap-[10px] justify-center pt-[13px] md:hidden'>
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
            <img
              src={AI.src}
              alt='icon'
              className='w-[35px] mm:w-[50px] mt-1'
            />
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

const Create: React.FC<BusinessItem> = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const rotateImage = (degrees: number) => {
    return {
      transform: `rotateY(${degrees}deg)`,
      transition: 'transform 0.5s ease',
    } as React.CSSProperties;
  };

  useEffect(() => {
    const icon = document.getElementById('icon') as HTMLImageElement;

    const rotateRight = () => {
      icon.style.cssText = Object.entries(rotateImage(180))
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
      setTimeout(() => {
        icon.style.cssText = '';
      }, 500);
    };

    const rotateLeft = () => {
      icon.style.cssText = Object.entries(rotateImage(-180))
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
      setTimeout(() => {
        icon.style.cssText = '';
      }, 500);
    };

    const rightInterval = setInterval(rotateRight, 6000);
    const leftInterval = setInterval(rotateLeft, 12000);

    return () => {
      clearInterval(rightInterval);
      clearInterval(leftInterval);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className='flex flex-col items-center px-[10px] pt-[78px] leading-[26.4px] xx:pt-[184px] lg:mb-[150px] xx:mt-0 md:mt-[55px] md:ites'>
      <div className='md:flex xx:ml-0 xx:pl-0 md:ml-2 flex-col xl:max-w-[1260] xl:px-10  md:flex-row max-w-[1580px] lg:flex-row justify-center xl:justify-between lg:w-full items-center md:gap-10 xx:justify-between'>
        <h2 className='text-[22px] font-Regular text-dark text-center xm:w-[982px] lg:w-[600px] w-[267px] md:text-[18px] md:w-[413px] md:text-start md:leading-[21.6px] ml-4 mm:ml-0 ss:max-w-[472px] ss:w-fit xx:text-[36px] xx:leading-[43.2px] xx:max-w-[982px] lg:max-w-[600px] xx:text-start lg:text-2xl lg:text-start'>
          Вы соберете ИИ-бота под задачи вашего бизнеса, который может заменить
          <span className='text-blue italic'>
            {' '}
            консультанта, администратора, менеджера по продажам, помощника РОПа
          </span>
        </h2>
        <div className='ml-[3px] flex border-b-[4px] pb-1 border-blue md:border-b-[2px] lg:items-center gap-3 md:gap-2 justify-between pt-7 md:pt-0 xx:gap-[31px] xx:w-[512px]'>
          <img
            src={Settings.src}
            alt='icon'
            className='rotate-icon w-[65px] h-[65px] md:w-[46px] md:h-[49px] lg:w-[73px] lg:h-[77px]'
          />
          <h3 className='text-blue md:text-[12px] md:max-w-[173px] md:leading-[15.6px] text-base xx:w-[365px] xx:max-w-[365px] lg:max-w-[300px] font-Medium mm:text-lg  mm:w-[400px] leading-[20.8px] xx:leading-[26px] lg:text-[20px]'>
            Можете пройти бесплатное обучение и создать ИИ-бота самостоятельно
            или заказать разработку у нас
          </h3>
        </div>
      </div>
      <div className='flex pt-8 md:items-center md:hidden lg:gap-40'>
        <h4 className='text-[14px] text-dark font-Medium mm:max-w-[274px] mm:text-lg leading-[18.2px] lg:text-2xl lg:max-w-[350px]'>
          Бот совершает столько касаний, чтобы к вам попадал максимально теплый
          лид
        </h4>
        <img
          src={Diagramms.src}
          alt='icon'
          className='mm:w-[200px] lg:w-[310px]'
        />
      </div>
      <div className='hidden xx:flex xx:pt-20 gap-[107px]'>
        <div className='flex flex-col gap-[33px]'>
          <h4 className='text-[22px] text-dark font-Medium leading-[28.6px] max-w-[429px]'>
            Бот совершает столько касаний, чтобы к вам попадал максимально
            теплый лид
          </h4>
          <img
            src={Diagramms.src}
            alt='icon'
            className='w-[381px] h-[215px] transform -scale-x-100'
          />
        </div>
        <div>
          <div className='overflow-hidden pt-1'>
            {bussinesArr.map((item, index) => (
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
                key={item.id}
                className={`flex w-[1044px] gap-[37px] items-center h-[93px]  ${
                  item.id === bussinesArr.length
                    ? 'border-b-[1px] border-t-[1px] border-blue'
                    : 'border-t-[1px]  border-blue'
                } hover-effect`}
              >
                <span className='text text-[20px] leading-[26px] font-Regular text-dark w-[621px]'>
                  {item.title}
                </span>
                <img src={AI.src} alt='icon' className='w-[66px] h-[59px]' />
              </div>
            ))}
            {isHovering && (
              <div
                className='bg-cloud rounded-[20px]'
                style={{
                  position: 'fixed',
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: 'translate(-50%, -50%)',
                  // Стилизация блока
                  width: '331px',
                  height: '331px',
                  color: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none', // Чтобы блок не мешал другим событиям мыши
                }}
              >
                <img
                  src={Mobile.src}
                  alt='icon'
                  className='w-[261px] h-[270px] object-cover'
                />
              </div>
            )}
          </div>
          <div className='flex items-center pt-12'>
            <div className='size-[58px] bg-gray rounded-[10px] flex justify-center items-center mr-[12px]'>
              <img src={Eye1.src} alt='icon' id='icon' />
            </div>
            <p className='w-[694px] text-gray leading-[20.8px] text-base'>
              Возможности ИИ-бота не ограничены. Вам нужно только прописать в
              инструкции,
              <br /> что должен делать бот, что от него нужно. Но в первую
              очередь, ИИ-ассистент закрывает рутинные операции, освобождает
              время для развития бизнеса и решения важных задач
            </p>
            <button
              className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-12 pr-4 justify-end rounded-[40px] bg-lime md:w-[280px] ${
                isHovered ? 'button-hovered' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p
                className={`text-[14px] font-Medium ml-7 md:text-[18px] ${
                  isHovered ? 'text-blue duration-300' : ' text-dark'
                }`}
              >
                Создать ии-бота
              </p>
              <div
                className={`flex items-center justify-center size-7 rounded-full  ${
                  isHovered ? ' bg-blue duration-300' : 'bg-dark'
                }`}
              >
                <img
                  src={ArrowBtn.src}
                  alt='ArrowBtn'
                  className={`transition-opacity duration-500 ${
                    isHovered ? 'arrow-out' : ''
                  }`}
                  key={animationKey}
                />
                {isHovered && (
                  <img
                    src={ArrowBtn.src}
                    alt='ArrowBtn'
                    className='arrow-in'
                    style={{
                      position: 'absolute',
                      right: '25.5px',
                      top: '20px',
                    }}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex lg:pt-20 lg:relative gap-[57px] xx:hidden px-10'>
        <div className='flex flex-col gap-[5px]'>
          <h4 className='text-[22px] text-dark font-Medium leading-[28.6px] w-[329px]'>
            Бот совершает столько касаний, чтобы к вам попадал максимально
            теплый лид
          </h4>
          <img
            src={Diagramms.src}
            alt='icon'
            className='w-[381px] h-[215px] transform -scale-x-100'
          />
        </div>
        <div className=''>
          <div className='overflow-hidden pt-1'>
            {bussinesArr.map((item, index) => (
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
                key={item.id}
                className={`flex w-[584px] gap-[37px] xl:w-[750px] items-center h-[93px]  ${
                  item.id === bussinesArr.length
                    ? 'border-b-[1px] border-t-[1px] border-blue'
                    : 'border-t-[1px]  border-blue'
                } hover-effect`}
              >
                <span className='text text-[20px] leading-[26px] font-Regular text-dark xl:w-[550px] w-[421px]'>
                  {item.title}
                </span>
                <img src={AI.src} alt='icon' className='w-[66px] h-[59px]' />
              </div>
            ))}
            {isHovering && (
              <div
                className='bg-cloud rounded-[10px] z-50'
                style={{
                  position: 'fixed',
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: 'translate(-50%, -50%)',
                  // Стилизация блока
                  width: '271px',
                  height: '271px',
                  color: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none', // Чтобы блок не мешал другим событиям мыши
                }}
              >
                {/* Содержимое блока, которое следует за курсором */}
                <img
                  src={Mobile.src}
                  alt='icon'
                  className='w-[231px] h-[230px] object-cover'
                />
              </div>
            )}
          </div>
          <div className='flex items-center pt-12 lg:absolute xl:left-[140px] left-[00px] lg:mx-2'>
            <div className='size-[58px] bg-gray rounded-[10px] flex justify-center items-center mr-[12px] lg:mr-2'>
              <img src={Eye1.src} alt='icon' id='icon' />
            </div>
            <p className='w-[694px] text-gray leading-[20.8px] lg:w-[640px] text-base lg:text-[15px]'>
              Возможности ИИ-бота не ограничены. Вам нужно только прописать в
              инструкции,
              <br /> что должен делать бот, что от него нужно. Но в первую
              очередь, ИИ-ассистент закрывает рутинные операции, освобождает
              время для развития бизнеса и решения важных задач
            </p>
            <button
              className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-12 pr-4 lr:pr-0 justify-end rounded-[40px] bg-lime md:w-[280px] ${
                isHovered ? 'button-hovered' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p
                className={`text-[14px] font-Medium ml-7 md:text-[18px] ${
                  isHovered ? 'text-blue duration-300' : ' text-dark'
                }`}
              >
                Создать ии-бота
              </p>
              <div
                className={`flex items-center justify-center size-7 rounded-full  ${
                  isHovered ? ' bg-blue duration-300' : 'bg-dark'
                }`}
              >
                <img
                  src={ArrowBtn.src}
                  alt='ArrowBtn'
                  className={`transition-opacity duration-500 ${
                    isHovered ? 'arrow-out' : ''
                  }`}
                  key={animationKey}
                />
                {isHovered && (
                  <img
                    src={ArrowBtn.src}
                    alt='ArrowBtn'
                    className='arrow-in'
                    style={{
                      position: 'absolute',
                      right: '25px',
                      top: '21px',
                    }}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='lg:hidden gap-[41px] mt-[27px] hidden md:flex'>
        <div className='flex flex-col gap-[10px] mt-[16px]'>
          <h4 className='text-[12px] text-dark font-Medium leading-[15.6px] max-w-[185px]'>
            Бот совершает столько касаний, чтобы к вам попадал максимально
            теплый лид
          </h4>
          <img
            src={Diagramms.src}
            alt='icon'
            className='w-[152px] h-[86px] transform -scale-x-100'
          />
        </div>
        <div className=''>
          <div className='overflow-hidden pt-1'>
            {bussinesArr.map((item, index) => (
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
                key={item.id}
                className={`flex cursor-pointer w-[442px] gap-[12px] items-center h-[37px]  ${
                  item.id === bussinesArr.length
                    ? 'border-b-[1px] border-t-[1px] border-blue'
                    : 'border-t-[1px]  border-blue'
                } hover-effect2`}
              >
                <span className='text2 text-[10px] leading-[13px] font-Regular text-dark w-[270px]'>
                  {item.title}
                </span>
                <img src={AI.src} alt='icon' className='w-[26px] h-[24px]' />
              </div>
            ))}
            {isHovering && (
              <div
                className='bg-cloud rounded-[8px] z-50'
                style={{
                  position: 'fixed',
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: 'translate(-50%, -50%)',
                  // Стилизация блока
                  width: '132px',
                  height: '132px',
                  color: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none', // Чтобы блок не мешал другим событиям мыши
                }}
              >
                {/* Содержимое блока, которое следует за курсором */}
                <img
                  src={Mobile.src}
                  alt='icon'
                  className='w-[104px] h-[108px] object-cover'
                />
              </div>
            )}
          </div>
          <div className='flex items-start flex-col  pt-[19px]'>
            <div className='flex'>
              <div className='size-[47px] bg-gray rounded-[4px] flex justify-center items-center mr-[9px]'>
                <img
                  src={Eye1.src}
                  alt='icon'
                  id='icon'
                  className='w-[32px] h-[23px] object-cover'
                />
              </div>
              <p className='w-[370px] text-gray leading-[13px] text-[10px]'>
                Возможности ИИ-бота не ограничены. Вам нужно только прописать в
                инструкции, что должен делать бот, что от него нужно. Но в
                первую очередь, ИИ-ассистент закрывает рутинные операции,
                освобождает время для развития бизнеса и решения важных задач
              </p>
            </div>
            <button
              className={`relative z-10 w-[153px] h-[30px] mt-[11px] px-1 gap-4 flex flex-row items-center justify-end rounded-[40px] bg-lime  ${
                isHovered ? 'button-hovered' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p
                className={`text-[10px] font-Medium ml-7 leading-[13px] ${
                  isHovered ? 'text-blue duration-300' : ' text-dark'
                }`}
              >
                Создать ии-бота
              </p>
              <div
                className={`flex items-center justify-center size-5 rounded-full  ${
                  isHovered ? ' bg-blue duration-300' : 'bg-dark'
                }`}
              >
                <img
                  src={ArrowBtn.src}
                  alt='ArrowBtn'
                  className={`transition-opacity duration-500 ${
                    isHovered ? 'arrow-out' : ''
                  }`}
                  key={animationKey}
                />
                {isHovered && (
                  <img
                    src={ArrowBtn.src}
                    alt='ArrowBtn'
                    className='arrow-in'
                    style={{
                      position: 'absolute',
                      right: '9px',
                      top: '9px',
                    }}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <FaArrowUp className='rotate-180 text-cloud text-[28px] mt-1 md:hidden' />
      {Array()}
    </section>
  );
};

export default Create;
