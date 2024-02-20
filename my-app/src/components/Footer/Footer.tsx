'use client';
import React, { useState } from 'react';
import Star from '@/Images/StarWhite.svg';
import Cursor from '@/Images/Cursor.svg';
import Comp from '@/Images/Comp.svg';
import NoAIICON from '@/Images/NoAI_icon.svg';
import WithAIICON from '@/Images/WithAI_icon.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Для сброса анимации

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1); // Сброс анимации стрелки
  };
  return (
    <div className='xx:flex justify-center'>
      <section className='mx-[10px] bg-dark rounded-t-[40px] py-[33px] mt-10 lg:mx-[5%] lg:px-[60px] lg:pt-[93px] xm:px-[80px] xm:pt-[137px] xm:rounded-t-[60px] xx:pb-[65px] xx:mt-[188px] max-w-[1738px]'>
        <div className='relative flex flex-col items-center px-[10px] sm:flex-row  sm:justify-around lg:justify-start'>
          <div className='max-w-[279px] sm:max-w-[300px] sm:h-[169px]'>
            <h2 className='text-white text-[22px] leading-[26.4px] font-Regular text-center sm:text-left lg:text-[28px] lg:leading-[38.4px] lg:w-[600px] xm:text-[42px] xm:leading-[50.4px] xm:w-[827px]'>
              Сделайте ИИ-бота и больше{' '}
              <span className='text-lime'>не теряйте ни одного клиента</span>{' '}
              при обращениях
            </h2>
          </div>

          <div className='pt-[31px] relative pb-[87px] lg:hidden'>
            <div className='relative pl-4 py-4 bg-blue rounded-[20px] w-[280px] sm:w-[270px]'>
              <p className='text-base leading-[19.2px] font-Regular text-white w-[225px]'>
                С ИИ-ботом стоимость обработки одного сообщения в{' '}
                <span className='font-Medium'>4 раза ниже</span>
              </p>
              <img
                src={Star.src}
                alt='icon'
                className='absolute right-4 bottom-3'
              />
              <div className='absolute right-0 -bottom-[60px]'>
                <img src={Cursor.src} alt='cursor' className='' />
                <div className='bg-white text-[20px] text-dark font-Regular w-[114px] h-[31px] pt-1 flex justify-center items-center rounded-[16px] ml-3'>
                  NEXTBOT
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex pt-[31px] absolute pb-[87px] top-[20px] right-[80px] xm:right-[200px] xx:right-0 xx:top-[30.5%] xx:left-[48.8%]'>
            <div className='relative pl-4 py-4 bg-blue rounded-[20px] w-[271px] h-[107px] xx:h-[147px]'>
              <p className='text-[18px] leading-[22.4px] font-Regular text-white w-[225px] xx:text-[22px] xx:leading-[26.4px]'>
                С ИИ-ботом стоимость обработки одного сообщения в{' '}
                <span className='font-Medium'>4 раза ниже</span>
              </p>
              <img
                src={Star.src}
                alt='icon'
                className='absolute right-4 bottom-3'
              />
              <div className='absolute -right-[60px] -bottom-[60px] xx:-right-[130px] xx:-bottom-[55px]'>
                <img src={Cursor.src} alt='cursor' className='' />
                <div className='bg-white text-[20px] text-dark font-Regular w-[114px] h-[31px] pt-1 flex justify-center items-center rounded-[16px] ml-3'>
                  NEXTBOT
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center bg-cloud lg:hidden'>
          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[44px] flex justify-center items-center bg-blue mm:h-[54px] sm:h-[64px]'>
              <p className=' footer-table-b leading-[18.2px] text-white font-Medium'>
                Без ИИ-ассистента
              </p>
            </div>
            <div className='w-[49.8%] h-[44px] flex justify-center items-center bg-blue mm:h-[54px] sm:h-[64px]'>
              <p className=' footer-table-b leading-[18.2px] text-lime font-Medium'>
                С ИИ-ассистента
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Заявок пришло
            </p>
          </div>

          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[34px] flex justify-center items-center bg-dark mm:h-[44px] sm:h-[54px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                440
              </p>
            </div>
            <div className='w-[49.8%] h-[34px] flex justify-center items-center bg-dark mm:h-[44px] sm:h-[54px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                440
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Заявок обработано
            </p>
          </div>

          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[31px] flex justify-center items-center bg-dark mm:h-[41px] sm:h-[51px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                440
              </p>
            </div>
            <div className='w-[49.8%] h-[31px] flex justify-center items-center bg-dark mm:h-[41px] sm:h-[51px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                440
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Ресурсов потрачено
            </p>
          </div>

          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[33px] flex justify-center items-center bg-dark mm:h-[43px] sm:h-[53px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                2 менеджера
              </p>
            </div>
            <div className='w-[49.8%] h-[33px] flex justify-center items-center bg-dark mm:h-[43px] sm:h-[53px]'>
              <p className='footer-table-l leading-[15.6px] text-lime text-Regular'>
                Один ИИ-бот
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Продано
            </p>
          </div>

          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[31px] flex justify-center items-center bg-dark mm:h-[41px] sm:h-[51px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                308
              </p>
            </div>
            <div className='w-[49.8%] h-[31px] flex justify-center items-center bg-dark mm:h-[41px] sm:h-[51px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-Regular'>
                308
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Расходы
            </p>
          </div>

          <div className='flex justify-between w-full'>
            <div className='w-[49.8%] h-[106px] flex flex-col justify-center items-center bg-dark gap-[6px] mm:gap-[10px] mm:h-[116px] sm:h-[126px]'>
              <p className=' footer-table-l leading-[15.6px] text-white text-center text-Regular'>
                от 60 000 ₽
              </p>
              <p className='w-[132px] footer-table-l leading-[15.6px] text-white text-center text-Regular ss:w-[150px] mm:w-[180px] sm:w-[210px] sm:leading-[17.6px]'>
                60 000 р. – зарплата менеджерам + расходы на обучение, рабочее
                место и пр.
              </p>
            </div>
            <div className='w-[49.8%] h-[106px] flex flex-col justify-center items-center bg-dark gap-[6px] mm:gap-[10px] mm:h-[116px] sm:h-[126px]'>
              <p className='footer-table-l leading-[15.6px] text-lime text-center text-Regular'>
                14 000 ₽
              </p>
              <p className='w-[103px] footer-table-l leading-[15.6px]  text-white text-center text-Regular ss:w-[120px] mm:w-[140px] sm:w-[170px] sm:leading-[17.6px]'>
                11 000 р – сервис с ИИ-ботом 3 000 р – работа менеджера
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center h-[24px] mm:h-[34px] sm:h-[44px]'>
            <p className='footer-table-b leading-[16.8px] text-blue text-Regular'>
              Цена обработки одной заявки
            </p>
          </div>

          <div className='flex justify-between w-full mb-[2px]'>
            <div className='w-[49.8%] h-[75px] flex flex-col justify-center items-center bg-dark gap-[11px] mm:h-[85px] sm:h-[95px]'>
              <p className='footer-table-l leading-[15.6px] text-white text-center text-Regular'>
                136 ₽
              </p>
              <img src={NoAIICON.src} alt='' />
            </div>
            <div className='w-[49.8%] h-[75px] flex flex-col justify-center items-center bg-dark gap-[11px] mm:h-[85px] sm:h-[95px]'>
              <p className='footer-table-l leading-[15.6px] text-lime text-center text-Regular'>
                32 ₽
              </p>
              <img src={WithAIICON.src} alt='' />
            </div>
          </div>
        </div>

        <div className='hidden lg:flex justify-center rounded-[10px] mt-[196px]'>
          <table className='rounded-[10px] table-auto border border-separate border-spacing-[0] border-cloud'>
            <tbody className=''>
              <tr className=''>
                <td className='bg-cloud rounded-tl-[10px] border border-cloud xx:w-[439px]'>
                  &nbsp;
                </td>
                <td className='px-[10px] bg-darkCloud text-blue text-center font-Regular footer-table-ex-m border border-cloud xx:px-[15px]'>
                  Заявок
                  <br /> пришло
                </td>
                <td className='px-[10px] bg-cloud text-blue text-center font-Regular footer-table-ex-m border border-cloud xx:px-[15px]'>
                  Заявок
                  <br /> обработано
                </td>
                <td className='px-[10px] bg-darkCloud text-blue text-center font-Regular footer-table-ex-m border border-cloud'>
                  Потрачено ресурсов
                </td>
                <td className='px-[10px] max-w-[158px] bg-cloud text-blue text-center font-Regular footer-table-ex-m border border-cloud xx:px-[15px]'>
                  Продано
                </td>
                <td className='bg-darkCloud text-blue text-center font-Regular footer-table-ex-m border border-cloud max-w-[295px]'>
                  Расходы
                </td>
                <td className='bg-cloud rounded-tr-[10px] text-blue text-center font-Regular footer-table-ex-m border border-cloud max-w-[201px]'>
                  Цена обработки одной заявки{' '}
                </td>
              </tr>
              <tr className='xm:h-[128px] align-top'>
                <td className='text-white align-middle text-center font-Regular footer-table-ex-b border border-cloud px-[20px] xx:px-[50px]'>
                  Без ИИ-ассистента
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  440
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  440
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  2 менеджера
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  308
                </td>
                <td className='flex flex-col text-white text-center font-Regular border border-cloud'>
                  <div className='flex flex-col justify-center w-full h-full max-w-[295px] xm:h-[128px]'>
                    <p className='footer-table-ex-m'>от 60 000 ₽ </p>
                    <p className='footer-table-ex-l mx-[11px] max-w-[273px]'>
                      60 000 р. – зарплата менеджерам <br /> + расходы на
                      обучение, рабочее место и пр.
                    </p>
                  </div>
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  <div className='flex flex-col items-center gap-2'>
                    <p>136 ₽ </p>
                    <img
                      src={NoAIICON.src}
                      alt='NoAIICON'
                      className='size-[20px]'
                    />
                  </div>
                </td>
              </tr>
              <tr className='h-[110px] align-top'>
                <td className='rounded-bl-[10px] text-lime align-middle text-center font-Regular footer-table-ex-b border border-cloud px-[20px] xx:px-[50px]'>
                  С ИИ-ассистентом
                </td>
                <td className='pt-[15px] text-white align-top text-center font-Regular footer-table-ex-m border border-cloud'>
                  440
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  440
                </td>
                <td className='pt-[15px] text-lime text-center font-Regular footer-table-ex-m border border-cloud '>
                  Один ИИ-бот
                </td>
                <td className='pt-[15px] text-white text-center font-Regular footer-table-ex-m border border-cloud'>
                  308
                </td>
                <td className='flex flex-col text-lime text-center font-Regular border border-cloud'>
                  <div className='flex flex-col justify-center w-full h-[110px]'>
                    <p className='footer-table-ex-m'>14 000 ₽ </p>
                    <p className='text-white footer-table-ex-l'>
                      11 000 р – сервис с ИИ-ботом
                      <br /> 3 000 р – работа менеджера
                    </p>
                  </div>
                </td>
                <td className='rounded-br-[10px] pt-[15px] text-lime text-center font-Regular footer-table-ex-m border border-cloud'>
                  <div className='flex flex-col items-center gap-2'>
                    <p>32 ₽ </p>
                    <img
                      src={WithAIICON.src}
                      alt='WithAIICON'
                      className='size-[20px]'
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex flex-col items-center mt-[70px]'>
          <div className='lg:hidden'>
            <h2 className='text-[22px] text-white leading-[26.4px] font-Medium text-center'>
              Чем больше однотипных обращений вы получаете, тем больше экономите
              с ИИ-ботом:
            </h2>
            <div className='flex flex-col items-center justify-center pt-[19px] gap-[13px] sm:flex-row'>
              <div className='flex flex-col items-center justify-center gap-[7px]'>
                <div className='size-[9px] rounded-full bg-lime' />
                <p className='text-[12px] text-white leading-[14.4px] font-Regular w-[226px] text-center'>
                  Для обработки 1000 обращений нужно 4-5 менеджеров (100-150
                  тысяч ₽) или 1 ИИ-бот (11 000 ₽ на работу сервиса)
                </p>
              </div>
              <div className='flex flex-col items-center justify-center gap-[7px]'>
                <div className='size-[9px] rounded-full bg-lime' />
                <p className='text-[12px] text-white leading-[14.4px] font-Regular w-[251px] text-center'>
                  Для обработки 2000 обращений нужно 10 менеджеров (200-250
                  тысяч ₽) или все еще 1 ИИ-бот (11 000 ₽ на работу сервиса)
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center w-full pt-6 sm:flex sm:flex-row sm:justify-evenly lg:flex-row-reverse lg:justify-between xx:mt-[80px] '>
            <div className='flex justify-center flex-col items-center xx:relative xx:justify-start xx:h-[466px] xx:mr-[42px] xx:-top-[2px]'>
              <img
                src={Comp.src}
                alt='computer'
                className=' xx:w-[532px] xx:h-[383px]'
              />
              <div className='w-[276px] flex justify-center items-center border-[1px] border-lime bg-[#1E2121] rounded-[10px] py-3 px-1 sm:hidden lg:flex xx:absolute xx:py-[25px] xx:w-[418px] xx:top-[203px] xx:-left-[240px]'>
                <p className='text-white text-[14px] leading-[16.8px] text-center xx:text-[22px] xx:leading-[26.4px]'>
                  При одинаковой конверсии{' '}
                  <span className='text-lime font-Medium'>
                    ваша прибыль растет
                  </span>{' '}
                  просто за счет увеличения трафика и быстро обработанных заявок
                </p>
              </div>
            </div>

            <div className='hidden sm:h-[219px] sm:flex sm:flex-col sm:items-center sm:justify-between sm:pt-[0px] lg:hidden'>
              <div className='w-[276px] flex justify-center items-center border-[1px] border-lime bg-[#1E2121] rounded-[10px] py-6 px-1'>
                <p className='text-white text-[14px] leading-[16.8px] text-center'>
                  При одинаковой конверсии{' '}
                  <span className='text-lime font-Medium'>
                    ваша прибыль растет
                  </span>{' '}
                  просто за счет увеличения трафика и быстро обработанных заявок
                </p>
              </div>
              <button className='ml-[10px] z-10 h-[50px] flex flex-row items-center gap-2 justify-center rounded-[40px] bg-lime w-[280px] mb-2 sm:justify-between sm:pl-[47.5px]'>
                <p className='text-[18px] text-dark font-Medium mr-1'>
                  Создать ии-бота
                </p>
                <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                  <img src={ArrowBtn.src} alt='ArrowBtn' />
                </div>
              </button>
            </div>
            <button
              className={`relative z-10 w-[280px] h-[50px] mt-4 flex flex-row items-center justify-center gap-2 pr-7 rounded-[40px] bg-lime ${
                isHovered ? 'button-hovered' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p
                className={`text-[18px] font-Medium ml-7 ${
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
                      right: '60px',
                      top: '20px',
                    }}
                  />
                )}
              </div>
            </button>

            <div className='hidden lg:flex lg:flex-col xx:h-[466px] xx:justify-start'>
              <h2 className='text-[22px] text-white leading-[26.4px] font-Medium text-left xm:w-[800px] xm:text-[32px] xm:leading-[30.4px] xx:text-[36px] xx:leading-[43.2px] xx:w-[917px]'>
                Чем больше однотипных обращений вы получаете, тем больше
                экономите с ИИ-ботом:
              </h2>
              <div className='flex flex-col items-start justify-center pt-[19px] gap-[13px]'>
                <div className='flex justify-center gap-[7px] mt-[20px]'>
                  <div className='size-[9px] rounded-full bg-lime mt-[3px]' />
                  <p className='text-[16px] text-white leading-[14.4px] font-Regular w-[426px]  text-left xl:text-[18px] xl:leading-[18.4px] xl:w-[600px] xx:text-[20px] xx:leading-[24px] xx:w-[612px]'>
                    Для обработки 1000 обращений нужно 4-5 менеджеров (100-150
                    тысяч ₽) или 1 ИИ-бот (11 000 ₽ на работу сервиса)
                  </p>
                </div>
                <div className='flex justify-center gap-[7px] mt-[20px]'>
                  <div className='size-[9px] rounded-full bg-lime mt-[3px]' />
                  <p className='text-[16px] text-white leading-[14.4px] font-Regular w-[426px] text-left xl:text-[18px] xl:leading-[18.4px] xl:w-[600px] xx:text-[20px] xx:leading-[24px] xx:w-[612px]'>
                    Для обработки 2000 обращений нужно 10 менеджеров (200-250
                    тысяч ₽) или все еще 1 ИИ-бот (11 000 ₽ на работу сервиса)
                  </p>
                </div>

                <button className='ml-[10px] z-10 h-[50px] flex flex-row items-center gap-2 justify-center rounded-[40px] bg-lime w-[280px] mt-[20px] lg:justify-between lg:pl-[47.5px]'>
                  <p className='text-[18px] text-dark font-Medium mr-1'>
                    Создать ии-бота
                  </p>
                  <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                    <img src={ArrowBtn.src} alt='ArrowBtn' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between items-center px-7 gap-[67px] pt-20 pb-10 sm:pt-10 lg:flex-row lg:px-0 xx:mt-[61px] xx:h-[50px]'>
          <div className='flex flex-col justify-between items-center gap-[13px] max-w-[550px] sm:flex-row lg:justify-normal lg:gap-0 xx:max-w-[600px]'>
            <span className='text-white text-base leading-[19.2px] font-Regular text-center max-w-[286px] lg:text-left lg:max-w-[240px] xx:text-[20px] xx:leading-[24px] xx:max-w-[340px]'>
              Если у вас остались вопросы, свяжитесь с нами в WhatsApp
            </span>
            <button className='hover:bg-lime hover:text-dark duration-300 transition-all text-lime border-[1px] border-lime rounded-[40px] w-[242px] h-[51px] flex justify-center items-center text-[18px] font-Medium'>
              написать в WhatsApp
            </button>
          </div>
          <p className='text-white text-[11.5px] leading-[14.4px] font-Regular text-left lg:text-right lg:mr-[14px] xx:text-[20px] xx:leading-[24px] xx:w-[221px]'>
            Политика обработки персональных данных
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
