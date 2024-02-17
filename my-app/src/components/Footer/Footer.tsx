import React from 'react';
import Star from '@/Images/StarWhite.svg';
import Cursor from '@/Images/Cursor.svg';
import Comp from '@/Images/Comp.svg';
import NoAIICON from '@/Images/NoAI_icon.svg';
import WithAIICON from '@/Images/WithAI_icon.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';

const Footer = () => {
  return (
    <section className='mx-[10px] bg-dark rounded-t-[40px] pt-[33px] mt-10 lg:mx-[5%] lg:p  -[60px]'>
      <div className='relative flex flex-col items-center px-[10px] sm:flex-row  sm:justify-around lg:justify-start'>
        <div className='max-w-[279px] sm:max-w-[300px] sm:h-[169px]'>
          <h2 className='text-white text-[22px] leading-[26.4px] font-Regular text-center sm:text-left lg:text-[32px] lg:leading-[38.4px] lg:w-[400px]'>
            Сделайте ИИ-бота и больше{' '}
            <span className='text-lime'>не теряйте ни одного клиента</span> при
            обращениях
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

        <div className='hidden lg:flex pt-[31px] absolute pb-[87px] top-[55px] right-40'>
          <div className='relative pl-4 py-4 bg-blue rounded-[20px] w-[271px] h-[147px]'>
            <p className='text-[22px] leading-[26.4px] font-Regular text-white w-[225px]'>
              С ИИ-ботом стоимость обработки одного сообщения в{' '}
              <span className='font-Medium'>4 раза ниже</span>
            </p>
            <img
              src={Star.src}
              alt='icon'
              className='absolute right-4 bottom-3'
            />
            <div className='absolute -right-[130px] -bottom-[60px]'>
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

      <div className='flex flex-col items-center mt-[70px]'>
        <div className='lg:hidden'>
          <h2 className='text-[22px] text-white leading-[26.4px] font-Medium text-center'>
            Чем больше однотипных обращений вы получаете, тем больше экономите с
            ИИ-ботом:
          </h2>
          <div className='flex flex-col items-center justify-center pt-[19px] gap-[13px] sm:flex-row'>
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

        <div className='pt-6 sm:flex sm:flex-row lg:flex-row-reverse'>
          <div className='flex justify-center flex-col items-center'>
            <img src={Comp.src} alt='computer' />
            <div className='w-[276px] flex justify-center items-center border-[1px] border-lime bg-[#1E2121] rounded-[10px] py-3 px-1 sm:hidden lg:flex'>
              <p className='text-white text-[14px] leading-[16.8px] text-center'>
                При одинаковой конверсии{' '}
                <span className='text-lime font-Medium'>
                  ваша прибыль растет
                </span>{' '}
                просто за счет увеличения трафика и быстро обработанных заявок
              </p>
            </div>
          </div>

          <div className='hidden sm:flex sm:flex-col sm:items-center sm:justify-between sm:pt-[0px] lg:hidden'>
            <div className='w-[276px] flex justify-center items-center border-[1px] border-lime bg-[#1E2121] rounded-[10px] py-3 px-1'>
              <p className='text-white text-[14px] leading-[16.8px] text-center'>
                При одинаковой конверсии{' '}
                <span className='text-lime font-Medium'>
                  ваша прибыль растет
                </span>{' '}
                просто за счет увеличения трафика и быстро обработанных заявок
              </p>
            </div>
            <button className='ml-[10px] z-10 h-[50px] flex flex-row items-center gap-2 justify-center rounded-[40px] bg-lime w-[280px] mb-2'>
              <p className='text-[18px] text-dark font-Medium mr-1'>
                Создать ии-бота
              </p>
              <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                <img src={ArrowBtn.src} alt='ArrowBtn' />
              </div>
            </button>
          </div>

          <button className='ml-[10px] z-10 h-[50px] flex flex-row items-center gap-2 justify-center rounded-[40px] bg-lime w-[280px] mt-6 sm:hidden'>
            <p className='text-[18px] text-dark font-Medium mr-1'>
              Создать ии-бота
            </p>
            <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
              <img src={ArrowBtn.src} alt='ArrowBtn' />
            </div>
          </button>

          <div className='pl-[80px] hidden '>
            {' '}
            {/* FIX */} {/* FIX */} {/* FIX */} {/* FIX */} {/* FIX */}{' '}
            {/* FIX */} {/* FIX */} {/* FIX */} {/* FIX */} {/* FIX */}
            <h2 className='text-[22px] text-white leading-[26.4px] font-Medium text-left'>
              Чем больше однотипных обращений вы получаете, тем больше экономите
              с ИИ-ботом:
            </h2>
            <div className='flex flex-col items-start justify-center pt-[19px] gap-[13px]'>
              <div className='flex items-center justify-center gap-[7px]'>
                <div className='size-[9px] rounded-full bg-lime' />
                <p className='text-[16px] text-white leading-[14.4px] font-Regular w-[226px] text-center'>
                  Для обработки 1000 обращений нужно 4-5 менеджеров (100-150
                  тысяч ₽) или 1 ИИ-бот (11 000 ₽ на работу сервиса)
                </p>
              </div>
              <div className='flex items-center justify-center gap-[7px]'>
                <div className='size-[9px] rounded-full bg-lime' />
                <p className='text-[16px] text-white leading-[14.4px] font-Regular w-[251px] text-center'>
                  Для обработки 2000 обращений нужно 10 менеджеров (200-250
                  тысяч ₽) или все еще 1 ИИ-бот (11 000 ₽ на работу сервиса)
                </p>
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
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center px-7 gap-[67px] pt-20 pb-10 sm:pt-10'>
        <div className='flex flex-col justify-between items-center gap-[13px] max-w-[550px] sm:flex-row'>
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
