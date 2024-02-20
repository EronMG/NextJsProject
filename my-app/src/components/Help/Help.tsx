'use client';
import React, { useEffect, useRef, useState } from 'react';
import NEXTBOT from '@/Images/nextbot.svg';
import Rotate from '@/Images/rotate.svg';
import Hands from '@/Images/hands.svg';
import BG from '@/Images/helpBG.svg';
import Star from '@/Images/LimeStar.svg';
import AI from '@/Images/AI.svg';
import Circle1 from '@/Images/Ellipse38.svg';
import Circle2 from '@/Images/Ellipse39.svg';
import Line from '@/Images/LineHelp.svg';
import LINEMAIN from '@/Images/LINEMAIN.svg';
import ArrowBtn from '@/Images/ArrowBtn.svg';
import { helpArr, helpArrBlock } from '@/Types/Arrays';
import LineMain from '@/Images/Line.svg';

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className='xx:flex justify-center'>
      <section className='bg-dark rounded-[40px] pt-[30px] pb-[33px] mx-[10px] xx:mr-[26px] xx:rounded-[60px] mt-[78.5px] overflow-hidden xx:mt-[175px] xx:w-[1738px]'>
        <div className='px-[10px]'>
          <div className='flex flex-col gap-[10px]'>
            <div className='xx:flex justify-center'>
              <div className='border-b-[2px] border-white flex justify-center xx:pt-7 w-[1439px]'>
                <img
                  src={NEXTBOT.src}
                  alt='nextbot'
                  className='md:w-[45%] xx:w-[1164px]'
                />
              </div>
            </div>
            <div className='md:flex justify-center xx:pt-[3px] xx:pl-[14px]'>
              <h2 className='text-white font-Regular leading-[28.6px] text-center text-[22px] md:max-w-[454px] xx:text-[36px] xx:leading-[46.8px] xx:max-w-[674px]'>
                Давайте посмотрим на конкретном примере,
                <span className='text-lime italic'>что умеет ИИ-бот</span>
              </h2>
            </div>
          </div>
          <div className='flex flex-col items-center md:hidden'>
            <div className='pt-[30px] pl-[6px] w-full max-w-[280px] md:max-w-[600px]'>
              <p className='text-white font-Regular leading-[19.2px] text-[16px] md:max-w-[258px] md:text-xl'>
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
                  className='md:w-[150px] w-[100px] h-[90px] md:h-[140px] absolute left-16 top-[-5px] md:left-[260px] md:top-[-60px] '
                />
                <p className='text-white font-Regular leading-[19.2px] w-[125px] text-end text-[16px] md:text-xl md:w-[180px]'>
                  сэкономил почти <span className='text-lime'>50 000 ₽</span>
                </p>
              </div>
            </div>
          </div>
          <div className='xx:pt-[118px]'>
            <div className='hidden md:flex pt-20 relative max-w-[728px] xx:max-w-[1575px] mx-auto'>
              <img
                src={LineMain.src}
                alt='line'
                className='scale-[92%] absolute xx:max-w-[1440px] xx:scale-[100%] xx:left-[74px] xx:top-[142px]'
              />
              <p className='text-white font-Regular leading-[19.2px] text-[16px] md:max-w-[240px] absolute left-8 top-11 xx:leading-[43.2px] xx:text-[36px] xx:max-w-[495px] xx:text-center'>
                ИИ-консультант обработал{' '}
                <span className='text-lime italic'>
                  <br className='md:hidden' />
                  440 обращений
                </span>{' '}
                на Avito
              </p>
              <img
                ref={headingRef}
                src='https://s3-alpha-sig.figma.com/img/4be6/c15e/79d43dd925d1f844dce8930a03e43f91?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8nUcuxgLUUdb4qbSLhaFINh4JQhbKrAaNa~BASSG8B3do16DDs7KC~EL00mzdoRM43Br~x5t4V066n-qd5TItrEY7fhDyHbsqQ5bSO2yGsAgEh7ltLoNCPjEZ6iHaaWCfEjjPuVqYUyEA0u9g4JaLQqe9RuCyL9ywCCC20LoP-cTna7m054ZS3aYEgIbM0jUoYNUpXgwQ0sp3qDWQlDzbwC-j3BiVPXmz2A7LVC7q8chVB9YEW-s08JDZFYnjKUdJadMQeDK7IsQWsRdGxR3~W0Le6v~Nnaj4-guhiao8tUC6G-2-hb-PmD5Ht2v1qh9VnrHMtMyasmWyJ-hxQDJw__'
                alt='icon'
                className={`w-[280px] absolute left-[230px] xx:w-[574px] xx:left-[522px] xx:top-[-90px] rotate-12 top-[-25px] ${
                  isVisible ? 'fade-in-out3' : ''
                }`}
              />
              <p className='text-white font-Regular xx:absolute xx:right-[122px] xx:top-[85px] leading-[19.2px] w-[125px] text-end text-[16px] xx:leading-[43.2px] xx:text-[36px] xx:max-w-[289px] xx:w-[289px] xx:text-center md:w-[205px] absolute right-[25px] bottom-[-27px]'>
                сэкономил почти <span className='text-lime'>50 000 ₽</span>
              </p>
            </div>
          </div>
          <div className='xx:flex justify-center xx:w-[1706px]'>
            <div className='flex flex-col gap-[10px] pt-7 md:gap-6 md:pt-40 xx:items-center md:max-w-[728px] md:mx-auto xx:pt-[400px] xx:max-w-[100%] xx:mx-0 xx:w-[1706px]'>
              <p
                className='text-white text-sm bg-[#1E2121] rounded-[10px] xx:mr-[259px] xx:mt-[10px] xx:pl-7 xx:py-[18px] font-Regular
                leading-[18.2px] pt-3 pl-[13px] pb-[9px] pr-2 md:max-w-[500px] xx:max-w-[762px] xx:text-[22px] xx:leading-[28.6px] md:text-base'
              >
                В декабре мы продавали настоящие елки. За две недели до Нового
                года спрос на товар традиционно самый высокий. Заявки поступают
                <br className='hidden xx:flex' />
                со всей России, круглосуточно.
              </p>
              <div className='md:flex justify-end'>
                <p
                  className='text-white text-sm bg-[#1E2121] rounded-[10px]  font-Regular xx:ml-[356px] xx:py-[18px] xx:pr-[22px]
                  xx:mt-[17px] leading-[18.2px] pt-3 pl-[13px] pb-[9px] pr-2 md:max-w-[500px] xx:text-end xx:max-w-[716px] xx:text-[22px] xx:leading-[28.6px] md:text-base'
                >
                  Чтобы оперативно обрабатывать все заявки и сократить расходы
                  на работу менеджера, подключили ИИ-консультанта на Avito.
                </p>
              </div>
            </div>
          </div>
          <div className='pt-[45.5px] xx:pt-[88px]'>
            <div className='flex flex-col md:flex-row-reverse items-center md:justify-center xx:justify-start xx:mr-[49px]'>
              <div className='flex flex-col gap-7 '>
                <div className='flex flex-col items-end justify-end'>
                  <div className='relative flex justify-end pr-[15px] w-[280px] md:w-[395px] xx:w-[500px] xx:mt-[89px]'>
                    <p
                      className='w-[237px] md:w-[354px] z-50 md:z-20 text-base font-Regular leading-[20.8px] pl-[14px] xx:pb-[23px] pt-[7px] pb-[5px] pr-[18px] text-white xx:pt-[29px] xx:pl-[30px] xx:w-[484px] bg-blue 
                      rounded-[10px] md:text-[24px] md:leading-[26px] xx:text-[36px] xx:leading-[46.8px] xx:rounded-[20px]'
                    >
                      Прописали для ИИ-бота сценарий и настройки{' '}
                      <br className='hidden xx:flex' />в сервисе NextBot
                    </p>
                    <div className='absolute top-[-30px] left-0 xx:left-[-52px] xx:top-[-62px]'>
                      <img
                        src={Rotate.src}
                        alt='icon'
                        className='z-20 rotate-icon xx:size-[118px]'
                      />
                      <div className='size-4 xx:size-[35px] rounded-full bg-cloud flex justify-center items-center absolute top-[22px] left-[20px]  z-30 xx:left-[43px] xx:top-11'>
                        <div className='size-2 xx:size-[19px] rounded-full bg-blue' />
                      </div>
                    </div>
                  </div>
                  <div className='md:flex flex-col items-end gap-[10px] hidden xx:items-start xx:gap-[23px] xx:pt-10'>
                    <p className='text-[14px] text-white font-Regular leading-[18.2px] md:text-base md:text-start md:max-w-[364px] xx:text-[22px] xx:pl-2 xx:leading-[28.6px] xx:max-w-[434px]'>
                      Поставили ИИ-боту задачу – собрать все необходимые данные
                      для оформления доставки.
                    </p>
                    <p className='text-[14px] text-white font-Regular leading-[18.2px] md:text-base md:text-start md:max-w-[364px] xx:text-[22px] xx:pl-2 xx:leading-[28.6px] xx:max-w-[507px]'>
                      Второй допустимый конечный результат – клиент должен был
                      спросить, по какому адресу он может прийти и купить елку
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] md:hidden'>
                  <p className='text-[14px] text-white font-Regular leading-[18.2px] md:text-base md:text-center'>
                    Поставили ИИ-боту задачу – собрать все необходимые данные
                    для оформления доставки.
                  </p>
                  <p className='text-[14px] text-white font-Regular leading-[18.2px] md:text-base md:text-center'>
                    Второй допустимый конечный результат – клиент должен был
                    спросить, по какому адресу он может прийти и купить елку
                  </p>
                </div>
              </div>
              <div className='md:relative md:w-[500px] md:justify-end md:flex xx:mr-11 xx:pt-[30px]'>
                <img
                  src='https://s3-alpha-sig.figma.com/img/cba6/7c30/673c2f4819285845035110e2f532ff98?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VjrwpkZYEANX8-H9-uFxjHm~bcpwK9AHbZ1-nGFbC8Xktdd9v1K54CyNWNCE-TJXyeZl98Be34hPZJM5nUgJ8CsHr2Ws6CeTvwXdUacceBcqfAbnaOKgKrDB-Jg3-4c7AkdgbnKeCgxka-5x9HoMZ0I0J-0ic-aVA95xjiBwjthw6r1o6aYR6eOTZOnmp7ebRar8fzduuKrVeAIX9CQKMgCjDhUCzPc7Fr5sDWlsIReROpWBtUyPfZzpjjQ6DSxmrBrZ~QudZsX5WLIkzAhHobIviWkJluaaoNdb0ghfzs4VjB8o-1YGK5olcvXRL6XcCgKZ9Z3tS18Y~8BvBFdHKQ__'
                  alt='image'
                  className='rounded-[10px] w-[280px] h-[183px] absolute opacity-70 left-0 hidden md:flex xx:min-w-[632px] xx:min-h-[414px] xx:left-[-542px] xx:top-[93px] xx:rounded-[20px]'
                />
                <img
                  src={Hands.src}
                  alt='icon'
                  className='mt-4 ml-[6px] md:scale-125 md:mt-10 xx:min-w-[713px] xx:min-h-[506px] xx:scale-100'
                />
              </div>
            </div>
            <div className='pt-[30px] flex flex-col ss:items-center md:pt-10 md:hidden'>
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
            <div className=' justify-center hidden md:flex xx:pt-[46px] xx:pl-[280px]'>
              <div className='pt-[30px] flex-wrap ss:items-center md:pt-10 md:w-[428px] hidden md:flex gap-1 xx:gap-2 xx:w-[780px]'>
                {helpArr.map((item, _) => (
                  <p
                    key={item.id}
                    className={`${
                      item.id === 1
                        ? 'text-blue text-[16px] italic font-Regular leading-[20.8px] px-[10px] xx:text-[36px] xx:leading-[46.8px] xx:pt-[10px] bg-cloud rounded-full xx:px-[23px] w-fit mb-4 h-[27px] xx:h-[51px] flex justify-center items-center'
                        : 'text-cloud text-[11px] font-Regular leading-[15.6px] px-[10px] border-[1px] xx:text-[20px] xx:leading-[26px] xx:px-[23px] border-cloud  rounded-full w-fit mb-[5px] h-[27px] flex xx:h-[51px] justify-center items-center'
                    }`}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='pt-10 relative'>
          <img src={BG.src} alt='bg' className='absolute top-2 w-full z-0' />
          <div className='pt-[82px] flex flex-col gap-[14px] items-center xx:pl-[220px] xx:pt-6 '>
            <h3 className='text-base leading-[20.8px] text-white  text-center font-Regular md:text-xl md:max-w-[721px] md:text-start xx:leading-[26px]'>
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
              className='rounded-[10px] max-w-[280px] max-h-[183px] md:max-w-[679px] md:max-h-[445px] md:mr-10 xx:rounded-[20px]'
            />
          </div>
        </div>
        <div className='px-[10px] pt-[32px] xx:pl-[86px] xx:pt-[147px]'>
          <h2 className='text-white font-Regular text-base leading-[20.8px] text-center xx:text-[36px] xx:leading-[46.8px] xx:text-start'>
            ИИ-ассистент за месяц обработал{' '}
            <span className='text-lime font-Bold'>
              440 обращений, отправил 2640 сообщений.
            </span>{' '}
            <br className='hidden xx:flex' />В 2023 г. нам потребовалось бы
            нанять для этого двух менеджеров
          </h2>
          <div className='flex flex-wrap gap-[10px] pt-4 md:justify-center md:pt-7 xx:justify-end xx:gap-5 xx:pr-[62px] xx:pt-10'>
            {helpArrBlock.map((item, _) => (
              <div
                key={item.id}
                className={`${
                  item.id === 1 ? 'border-[1px] border-lime' : ''
                } rounded-[20px] pt-[14px] pl-[13px] pb-[13px] bg-[#1E2121] max-w-[512px] md:p-5 xx:pt-[34px] xx:pl-[23px] xx:w-full xx:h-[345px]`}
              >
                <h2 className='text-lime text-base leading-[20.8px] font-Medium w-[187px]  xx:text-xl xx:leading-[26px] xx:w-fit'>
                  {item.name}
                </h2>
                <div className='pt-[8px] flex flex-col gap-[7px]'>
                  {item.titleArr.map((item, _) => (
                    <span
                      key={item.id}
                      className='flex items-start justify-start gap-1 text-white text-[12px] leading-[15.6px] font-Regular xx:text-base xx:leading-[20.8px] xx:max-w-[430px]'
                    >
                      <img src={Star.src} alt='star' className='' />
                      {item.title}
                    </span>
                  ))}
                </div>
                <p
                  className={`text-white italic text-base leading-[20.8px] font-Regular xx:text-xl xx:leading-[26px]  ${
                    item.id === 1 ? 'pt-[9px]' : 'pt-[25px]'
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='px-[10px] flex flex-wrap  justify-start ss:justify-center gap-[14px] pt-12 xx:hidden'>
          <h2 className='text-lime text-base leading-[20.8px] font-Regular text-center md:max-w-[298px] md:text-end h-fit'>
            После внедрения ИИ-бота в 2024 году продажи на Avito и в розничных
            точках суммарно выросли на 80%
          </h2>
          <div className='relative ll:w-[300px]'>
            <div>
              <img
                src={Circle1.src}
                alt='icon'
                className='absolute left-[6px] top-[1px]'
              />
              <img src={Circle2.src} alt='icon' />
              <img
                src={AI.src}
                alt='icon'
                className='w-[88px] h-[80px] absolute top-[50px] left-[47px]'
              />
            </div>
            <div className='flex flex-col absolute top-10 ll:right-6 right-[-92px]'>
              <div className='size-[13px] bg-cloud rounded-full flex justify-center items-center absolute top-[29px] left-[-5px]'>
                <div className='bg-blue size-[7px] rounded-full' />
              </div>
              <p className='text-lime text-[20px] font-Bold uppercase absolute right-[-3px] top-[-23px]'>
                на 80%
              </p>
              <img src={Line.src} alt='icon' className='w-[110px] h-[35px]' />
              <p className='text-lime text-[12px] font-Regular absolute right-0 top-[5px]'>
                рост продаж
              </p>
            </div>
          </div>
          <div className='ll:flex flex-col justify-end'>
            <p className='text-white text-[12px] leading-[15.6px] font-Regular w-[258px]'>
              Говорить, что это на 100% последствие внедрения ИИ-консультанта,
              мы не можем. Но это нововведение однозначно оказало влияние на
              увеличение прибыли.
            </p>
            <p className='text-white text-[12px] leading-[15.6px] font-Regular w-[194px] pt-3'>
              И мы можем предположить, что это было существенное влияние.
            </p>
          </div>
        </div>
        <div className='hidden justify-start gap-5 xx:flex xx:pt-[147px] xx:pb-[92px]'>
          <div className='flex flex-col items-end gap-[363px] xx:pl-[201px]'>
            <h2 className='text-lime text-[22px] leading-[28.6px] font-Regular text-end w-[398px]'>
              После внедрения ИИ-бота в 2024 году продажи на Avito и в розничных
              точках суммарно выросли на 80%
            </h2>
            <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 justify-end rounded-[40px] bg-lime md:w-[280px] mt-6'>
              <p className='text-[14px] text-dark font-Medium md:text-[18px] mr-8'>
                Создать ии-бота
              </p>
              <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
                <img src={ArrowBtn.src} alt='ArrowBtn' />
              </div>
            </button>
          </div>
          <div className='relative  xx:mr-[110px] w-[800px]'>
            <div>
              <img
                src={Circle1.src}
                alt='icon'
                className='absolute left-[17px] top-[0px] w-[225px]'
              />
              <img src={Circle2.src} alt='icon' className='size-[514px] ' />
              <img
                src={AI.src}
                alt='icon'
                className='w-[244px] min-h-[218px] absolute top-[140px] left-[137px]'
              />
            </div>
            <div className='flex flex-col absolute top-[71px] ll:right-6 right-[-112px]'>
              <div className='size-[13px] bg-cloud rounded-full flex justify-center items-center absolute top-[29px] left-[-5px]'>
                <div className='bg-blue size-[7px] rounded-full' />
              </div>
              <p className='text-lime text-[100px] font-Bold uppercase absolute right-[-8px] top-[-112px]'>
                на 80%
              </p>
              <img src={LINEMAIN.src} alt='icon' className='' />
              <p className='text-lime text-[22px] font-Regular absolute right-[-1px] top-[10px]'>
                рост продаж
              </p>
            </div>
          </div>
          <div className='flex flex-col items-end xx:absolute right-[208px] pt-[322px]'>
            <p className='text-white text-[22px] leading-[28.6px] font-Regular text-start w-[476px]'>
              Говорить, что это на 100% последствие внедрения ИИ-консультанта,
              мы не можем. Но это нововведение однозначно оказало влияние на
              увеличение прибыли.
            </p>
            <p className='text-white text-[22px] leading-[28.6px] font-Regular text-start w-[476px] pt-7'>
              И мы можем предположить, что это было существенное влияние.
            </p>
          </div>
        </div>
        <div className='flex justify-center xx:hidden'>
          <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 justify-end rounded-[40px] bg-lime md:w-[280px] mt-[22px]'>
            <p className='text-[14px] text-dark font-Medium md:text-[18px] mr-8'>
              Создать ии-бота
            </p>
            <div className='flex items-center justify-center size-7 rounded-full bg-dark mr-3'>
              <img src={ArrowBtn.src} alt='ArrowBtn' />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Help;
