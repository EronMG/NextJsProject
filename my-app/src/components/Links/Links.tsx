'use client';
import HumanRobot from '@/Images/HumanRobot.png';
import InstagramICON from '@/Images/instagram_icon.svg';
import VkICON from '@/Images/vk_icon.svg';
import TelegramICON from '@/Images/telegram_icon.svg';
import ViberICON from '@/Images/viber_icon.svg';
import FacebookICON from '@/Images/facebook_icon.svg';
import WhatsappICON from '@/Images/whatsapp_icon.svg';
import YoulaICON from '@/Images/youla_icon.svg';
import AvitoICON from '@/Images/avito_icon.svg';
import MailICON from '@/Images/mail_icon.svg';
import { useEffect, useRef, useState } from 'react';

function Links() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  const [isVisibleDiv, setIsVisibleDiv] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleDiv(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className='flex flex-col items-center mb-[40px] mt-[78px] overflow-visible sm:flex-row sm:items-start sm:justify-between sm:px-[10px] md:justify-end md:pb-[0px] md:mt-[60px] md:px-[50px] lg:pb-[40px] xl:pb-[50px] xl:relative bb:px-[70px] bb:pt-[102px]'>
        <h2 className='text-[22px] leading-[26.4px] text-center font-Regular mb-5 max-w-[349px] sm:hidden'>
          Можно подключить ко всем популярным соцсетям, мессенджерам и площадкам
        </h2>

        <div className='absolute sm:order-1  md:left-[50px] bb:left-[172px] bb:top-[120px]'>
          <div className=''>
            <div className='z-1 flex justify-center items-center size-[265px] rounded-full border-black border-[1px] border-dashed md:size-[305px] lg:size-[390px] xx:size-[585px] bb:size-[780px]'>
              <div className='flex justify-center items-center size-[204px] bg-cloud bg-opacity-20 rounded-full border-black border-[1px] border-dashed md:size-[235px] lg:size-[300px] xx:size-[450px] bb:size-[600px]'>
                <div className='flex justify-center items-center size-[136px] bg-white rounded-full border-black border-[1px] border-dashed md:size-[156px] lg:size-[200px] xx:size-[300px] bb:size-[400px]'>
                  <div className='z-50 flex justify-center items-center size-[87px] rounded-full bg-cloud md:size-[100px] lg:size-[128px] xx:size-[192px] bb:size-[256px]'>
                    <div className='z-50 flex justify-center items-center size-[68px] rounded-full bg-blue md:size-[78px] lg:size-[100px] xx:size-[150px] bb:size-[200px]'>
                      <p className='text-[10.22px] leading-[13.28px] text-lime font-Regular lg:text-[16px] xx:text-[22px] bb:text-[30px]'>
                        NEXTBOT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute'>
            {[
              InstagramICON.src,
              VkICON.src,
              TelegramICON.src,
              ViberICON.src,
              FacebookICON.src,
              WhatsappICON.src,
              YoulaICON.src,
              AvitoICON.src,
              MailICON.src,
            ].map((item, index) => (
              <div
                ref={headingRef}
                key={index}
                className={`z-50 absolute flex justify-center items-center size-[32px] rounded-full bg-cloud md:size-[36px] lg:size-[47px] xx:size-[70px] bb:size-[93px]
                ${
                  index === 0
                    ? '-top-[260px] left-[49px] md:-top-[302px] md:left-[55px] lg:-top-[370px] xx:-top-[585px] xx:left-[120px] bb:-top-[773px] bb:left-[142px]'
                    : ''
                }
                ${
                  index === 1
                    ? '-top-[247px] left-[127px] md:-top-[287px] md:left-[146px] lg:-top-[367px] lg:left-[195px] xx:-top-[549px] xx:left-[290px] bb:-top-[736px] bb:left-[375px]'
                    : ''
                }
                ${
                  index === 2
                    ? '-top-[222px] left-[226px] md:-top-[256px] md:left-[259px] lg:-top-[333px] lg:left-[328px] xx:-top-[503px] xx:left-[490px] bb:-top-[656px] bb:left-[663px]'
                    : ''
                }
                ${
                  index === 3
                    ? '-top-[192px] left-[165px] md:-top-[223px] md:left-[189px] lg:-top-[290px] lg:left-[238px] xx:-top-[435px] xx:left-[362px] bb:-top-[572px] bb:left-[483px]'
                    : ''
                }
                ${
                  index === 4
                    ? '-top-[159px] left-[217px] md:-top-[183px] md:left-[248px] lg:-top-[235px] lg:left-[320px] xx:-top-[350px] xx:left-[480px] bb:-top-[471px] bb:left-[637px]'
                    : ''
                }
                ${
                  index === 5
                    ? '-top-[192px] left-[67px] md:-top-[223px] md:left-[76px] lg:-top-[290px] lg:left-[105px] xx:-top-[435px] xx:left-[153px] bb:-top-[572px] bb:left-[195px]'
                    : ''
                }
                ${
                  index === 6
                    ? '-top-[146px] -left-[17px] md:-top-[169px] md:-left-[21px] lg:-top-[220px] lg:-left-[21px] xx:-top-[320px] xx:-left-[35px] bb:-top-[432px] bb:-left-[52px]'
                    : ''
                }
                ${
                  index === 7
                    ? '-top-[93px] left-[30px] md:-top-[108px] md:left-[35px] lg:-top-[150px] lg:left-[37px] xx:-top-[200px] xx:left-[70px] bb:-top-[279px] bb:left-[88px]'
                    : ''
                }
                ${
                  index === 8
                    ? '-top-[24px] left-[66px] md:-top-[30px] md:left-[76px] lg:-top-[39px] lg:left-[100px] xx:-top-[57px] xx:left-[153px] bb:-top-[77px] bb:left-[195px]'
                    : ''
                }
                                ${isVisible ? 'fade-in-out' : ''}
                `}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className='flex justify-center items-center size-[26px] rounded-full bg-blue md:size-[29px] lg:size-[38px] xx:size-[56px] bb:size-[75px]'>
                  <img
                    src={item}
                    alt=''
                    className={`lg:size-[70%] ${
                      index === 0 ? 'lg:size-[94%]' : ''
                    } 
                    ${index === 2 ? 'lg:size-[87%]' : ''}
                    ${index === 3 ? 'lg:size-[80%]' : ''}
                    ${index === 4 ? 'lg:size-[82%]' : ''}
                    ${index === 5 ? 'lg:size-[87%]' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='z-20 absolute size-[250px] -bottom-[90px] left-[100px] rounded-full lg:size-[350px] lg:left-[150px] xx:size-[450px] xx:left-[250px] bg-links'></div>
          <img
            src={HumanRobot.src}
            alt='HumanRobot'
            className='z-50 absolute size-[130px] -bottom-[60px] left-[153px] md:hidden'
          />
        </div>

        <div className='hidden sm:flex sm:flex-col sm:gap-[85px] sm:items-end order-2 z-50 md:mt-[65px] xx:h-[605px] xx:justify-start bb:h-[729px] bb:mt-[208px] bb:mr-[100px] bb:gap-[114px] bb:justify-start'>
          <div className='flex items-end gap-[19px] md:gap-[9px] bb:mt-[20px] bb:gap-[19px]'>
            <h2 className='text-[22px] leading-[26.4px] text-right font-Regular max-w-[349px] md:pb-[10px] md:w-[289px] md:text-[18px] md:leading-[21.6px]  lg:text-[30px] lg:leading-[28.6px] lg:max-w-[500px] lg:pb-[30px] lg:w-[500px] bb:text-[36px] bb:leading-[43.2px] bb:pb-[0px]'>
              Можно подключить ко всем популярным соцсетям, мессенджерам и
              площадкам
            </h2>
            <img
              src={HumanRobot.src}
              alt='HumanRobot'
              className='hidden xl:flex size-[170px] mb-[14px] md:flex md:size-[103px] lg:size-[170px] xx:size-[200px] bb:size-[247px]'
            />
          </div>

          <div className='z-50 flex flex-row relative'>
            <div className='flex flex-col items-end md:items-start md:absolute md:right-[93px] md:-top-[45px] lg:right-[193px] xl:right-[400px] xl:-top-[45px] xx:top-[45px] xx:right-[300px] bb:top-[20px] bb:right-[420px]'>
              <p className='w-[306px] h-[76px] text-[16px] leading-[19.2px] text-right text-dark font-Regular md:text-[14px] md:leading-[16.8px] md:text-left md:h-[51px] md:w-[350px] lg:text-[18px] lg:w-[440px] xl:text-left xx:text-[22px] xx:leading-[26.4px] xx:w-[624px]'>
                ИИ-ассистента можно подключить к Telegram, Вконтакте, Avito,
                WhatsApp, Instagram*, Facebook*, Online-chat, Viber, Email, Юла,
                WhatsApp Business
              </p>
              <p className='w-[255px] h-[38px] mt-[10px] text-[16px] leading-[19.2px] text-right text-dark font-Regular md:text-[12px] md:leading-[14.4px] md:text-left md:w-[316px] md:h-[14px] md:mt-[5px] lg:mt-[10px] lg:text-[18px] lg:w-[400px] xl:text-left xl:mt-[12px] xx:text-[22px] xx:mt-[40px] xx:w-[600px] bb:mt-[43px]'>
                Можно сделать виджет для сайта с ИИ-консультантом
              </p>
              <p className='w-[285px] h-[24px] mt-[13px] text-[10px] leading-[12.1px] text-right text-dark font-Regular md:text-[8px] md:leading-[9.68px] md:text-left md:w-[199px] md:mt-[10px] lg:text-[12px] lg:mt-[30px] xl:text-left xl:mt-[18px] xx:text-[12px] xx:w-[395px] xx:leading-[14.52px] bb:w-[395px] bb:mt-[30px]'>
                Instagram* – продукт компании Meta. Признана экстремистской
                организацией на территории РФ
              </p>
            </div>
            <div
              ref={divRef}
              className={`hidden md:flex md:right-[0px] md:-top-[42px] md:gap-[10px] xl:gap-[18px] xx:top-[42px] bb:top-[0px] absolute opacity-50 ${
                isVisibleDiv &&
                'translate-x-[-3000px] duration-4000 opacity-100'
              }`}
            >
              <div className='lg:triangle-l md:triangle-md xx:triangle-m bb:triangle-b'></div>
              <div className='lg:triangle-l md:triangle-md xx:triangle-m bb:triangle-b'></div>
            </div>
          </div>
        </div>

        <div className='z-50 flex flex-col items-start mt-[70px] sm:hidden'>
          <p className='w-[306px] h-[76px] text-[16px] leading-[19.2px] text-dark font-Regular'>
            ИИ-ассистента можно подключить к Telegram, Вконтакте, Avito,
            WhatsApp, Instagram*, Facebook*, Online-chat, Viber, Email, Юла,
            WhatsApp Business
          </p>
          <p className='w-[255px] h-[38px] mt-[10px] text-[16px] leading-[19.2px] text-dark font-Regular'>
            Можно сделать виджет для сайта с ИИ-консультантом
          </p>
          <p className='w-[285px] h-[24px] mt-[13px] text-[10px] leading-[12.1px] text-dark font-Regular'>
            Instagram* – продукт компании Meta. Признана экстремистской
            организацией на территории РФ
          </p>
        </div>
      </section>
    </>
  );
}

export default Links;
