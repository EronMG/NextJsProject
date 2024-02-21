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
      <section className='flex flex-col items-center mt-[78px] overflow-hidden sm:flex-row sm:items-start sm:justify-between sm:px-[10px] md:pb-[0px] md:px-[70px] xl:relative bb:pt-[102px]'>
        <h2 className='text-[22px] leading-[26.4px] text-center font-Regular mb-5 max-w-[349px] sm:hidden'>
          Можно подключить ко всем популярным соцсетям, мессенджерам и площадкам
        </h2>

        <div className='relative sm:order-1 sm:-right-[20px] bb:-right-[100px]'>
          <div className=''>
            <div className='z-1 flex justify-center items-center size-[265px] rounded-full border-black border-[1px] border-dashed lg:size-[390px] xx:size-[585px] bb:size-[780px]'>
              <div className='flex justify-center items-center size-[204px] bg-cloud bg-opacity-20 rounded-full border-black border-[1px] border-dashed lg:size-[300px] xx:size-[450px] bb:size-[600px]'>
                <div className='flex justify-center items-center size-[136px] bg-white rounded-full border-black border-[1px] border-dashed lg:size-[200px] xx:size-[300px] bb:size-[400px]'>
                  <div className='z-50 flex justify-center items-center size-[87px] rounded-full bg-cloud lg:size-[128px] xx:size-[192px] bb:size-[256px]'>
                    <div className='z-50 flex justify-center items-center size-[68px] rounded-full bg-blue lg:size-[100px] xx:size-[150px] bb:size-[200px]'>
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
                className={`z-50 absolute flex justify-center items-center size-[32px] rounded-full bg-cloud lg:size-[47px] xx:size-[70px] bb:size-[93px]
                ${
                  index === 0
                    ? '-top-[260px] left-[49px] lg:-top-[370px] xx:-top-[585px] xx:left-[120px] bb:-top-[773px] bb:left-[142px]'
                    : ''
                }
                ${
                  index === 1
                    ? '-top-[247px] left-[127px] lg:-top-[367px] lg:left-[195px] xx:-top-[549px] xx:left-[290px] bb:-top-[736px] bb:left-[375px]'
                    : ''
                }
                ${
                  index === 2
                    ? '-top-[222px] left-[226px] lg:-top-[333px] lg:left-[328px] xx:-top-[503px] xx:left-[490px] bb:-top-[656px] bb:left-[663px]'
                    : ''
                }
                ${
                  index === 3
                    ? '-top-[192px] left-[165px] lg:-top-[290px] lg:left-[238px] xx:-top-[435px] xx:left-[362px] bb:-top-[572px] bb:left-[483px]'
                    : ''
                }
                ${
                  index === 4
                    ? '-top-[159px] left-[217px] lg:-top-[235px] lg:left-[320px] xx:-top-[350px] xx:left-[480px] bb:-top-[471px] bb:left-[637px]'
                    : ''
                }
                ${
                  index === 5
                    ? '-top-[192px] left-[67px] lg:-top-[290px] lg:left-[105px] xx:-top-[435px] xx:left-[153px] bb:-top-[572px] bb:left-[195px]'
                    : ''
                }
                ${
                  index === 6
                    ? '-top-[146px] -left-[17px] lg:-top-[220px] lg:-left-[21px] xx:-top-[320px] xx:-left-[35px] bb:-top-[432px] bb:-left-[52px]'
                    : ''
                }
                ${
                  index === 7
                    ? '-top-[93px] left-[30px] lg:-top-[150px] lg:left-[37px] xx:-top-[200px] xx:left-[70px] bb:-top-[279px] bb:left-[88px]'
                    : ''
                }
                ${
                  index === 8
                    ? '-top-[24px] left-[66px] lg:-top-[39px] lg:left-[100px] xx:-top-[57px] xx:left-[153px] bb:-top-[77px] bb:left-[195px]'
                    : ''
                }
                                ${isVisible ? 'fade-in-out' : ''}
                `}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className='flex justify-center items-center size-[26px] rounded-full bg-blue lg:size-[38px] xx:size-[56px] bb:size-[75px]'>
                  <img src={item} alt='' className='lg:size-[70%]' />
                </div>
              </div>
            ))}
          </div>
          <div className='z-20 absolute size-[250px] -bottom-[90px] left-[100px] rounded-full lg:size-[350px] lg:left-[150px] xx:size-[450px] xx:left-[250px] bg-links'></div>
          <img
            src={HumanRobot.src}
            alt='HumanRobot'
            className='z-50 absolute size-[130px] -bottom-[60px] left-[153px] lg:size-[170px] lg:left-[253px] lg:-bottom-[25px] xl:hidden'
          />
        </div>

        <div className='hidden sm:flex sm:flex-col sm:gap-[85px] sm:items-end order-2 z-50 xx:h-[605px] xx:justify-end bb:h-[769px] bb:mt-[208px] bb:mr-[100px] bb:gap-[114px] bb:justify-start'>
          <div className='flex items-end gap-[19px]'>
            <h2 className='text-[22px] leading-[26.4px] text-right font-Regular max-w-[349px] lg:text-[30px] lg:max-w-[500px] bb:text-[36px] bb:leading-[43.2px]'>
              Можно подключить ко всем популярным соцсетям, мессенджерам и
              площадкам
            </h2>
            <img
              src={HumanRobot.src}
              alt='HumanRobot'
              className='hidden xl:flex size-[170px] mb-[14px] xx:size-[200px] bb:size-[247px]'
            />
          </div>

          <div className='z-50 flex flex-row'>
            <div className='flex flex-col items-end xl:items-start xl:absolute xl:left-[400px] xl:top-[229px] xx:top-[420px] xx:left-[500px] bb:top-[705px] bb:left-[700px]'>
              <p className='w-[306px] h-[76px] text-[16px] leading-[19.2px] text-right text-dark font-Regular lg:text-[18px] lg:w-[400px] xl:text-left xx:text-[22px] xx:leading-[26.4px] xx:w-[624px]'>
                ИИ-ассистента можно подключить к Telegram, Вконтакте, Avito,
                WhatsApp, Instagram*, Facebook*, Online-chat, Viber, Email, Юла,
                WhatsApp Business
              </p>
              <p className='w-[255px] h-[38px] mt-[10px] text-[16px] leading-[19.2px] text-right text-dark font-Regular lg:text-[18px] lg:w-[400px] xl:text-left xl:mt-[12px] xx:text-[22px] xx:w-[600px] bb:mt-[17px]'>
                Можно сделать виджет для сайта с ИИ-консультантом
              </p>
              <p className='w-[285px] h-[24px] mt-[13px] text-[10px] leading-[12.1px] text-right text-dark font-Regular lg:text-[12px] lg:mt-[70px] xl:text-left xl:mt-[18px] xx:leading-[14.52px] bb:w-[395px] bb:mt-[10px]'>
                Instagram* – продукт компании Meta. Признана экстремистской
                организацией на территории РФ
              </p>
            </div>
            <div
              ref={divRef}
              className={`hidden xl:flex xl:gap-[18px] absolute right-[167px] opacity-50 ${
                isVisibleDiv &&
                'translate-x-[-3000px] duration-4000 opacity-100'
              }`}
            >
              <div className='triangle-l xx:triangle-m bb:triangle-b'></div>
              <div className='triangle-l xx:triangle-m bb:triangle-b'></div>
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
