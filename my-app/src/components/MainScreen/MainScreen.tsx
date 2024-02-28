"use client";
import React, { useState } from "react";
import CurvedLineOne from "@/Images/CurvedLineOne.svg";
import CurvedLineTwo from "@/Images/CurvedLineTwo.svg";
import CurvedLineThree from "@/Images/CurvedLineThree.svg";
import CurvedLineFour from "@/Images/CurvedLineFour.svg";
import BGImageOne from "@/Images/bgImageOne.png";
import BGImageTwo from "@/Images/bgImageTwo.png";

import ArrowBtn from "@/Images/ArrowBtn.svg";
import ArrowBtnLittle from "@/Images/ArrowBtnLit.svg";
import AnimatedHeading from "./H1";

const MainScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Для сброса анимации

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1); // Сброс анимации стрелки
  };

  return (
    <>
      <section className="relative flex flex-col items-center overflow-hidden md:overflow-visible md:pt-[20px] xl:pt-[71px] xx:pt-[78px] xx:mb-2">
        <div className="z-10 flex flex-col items-center gap-3 md:gap-[2px] mt-[15px] lg:gap-[4px] xx:gap-2 xx:mt-[8px]">
          <AnimatedHeading text={""} size={"normal"} />
          <p className="max-w-[300px] text-base text-center text-[16px] leading-[20.8px] font-Regular text-dark xl:max-w-[522px] mm:min-w-[300px] md:max-w-[488px] md:text-[14px] md:leading-[18.2px] lg:text-[18px] lg:leading-[22px] xl:text-[20px] xl:leading-[26px] xx:max-w-[722px]">
            Бот и ассистент на базе ChatGPT возьмет на себя до 100% рутинных
            задач. Заменит или разгрузит вашего администратора, консультанта,
            менеджера по продажам и др.
          </p>
        </div>

        <img
          src={BGImageOne.src}
          alt=""
          className="absolute z-[-1] -top-[82px] right-0"
        />
        <img
          src={BGImageTwo.src}
          alt=""
          className="absolute z-[-1] -top-[82px] right-0"
        />

        <div className="md:flex-col-reverse relative flex flex-col items-center gap-6 pt-4 md:gap-[6px] md:pt-[22px] lg:gap-[32px] xl:gap-10 xl:mt-[11px]">
          <div className="z-10 w-[139px] h-[216px] bg-black opacity-5 md:w-[99px] md:h-[156px] lg:w-[199px] lg:h-[312px] xl:w-[249px] xl:h-[390px]"></div>
          <button
            className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime md:w-[153px] md:h-[30px] md:gap-[4px] lg:w-[224px] lg:h-[41px] xl:w-[280px] xl:h-[51px] ${
              isHovered ? "button-hovered" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p
              className={`text-[14px] font-Medium ml-7 md:text-[10px] md:ml-[11px] lg:text-[14px] lg:ml-[22px] xl:text-[18px] xl:ml-[28px] ${
                isHovered ? "text-blue duration-300" : " text-dark"
              }`}
            >
              Создать ии-ассистента
            </p>
            <div
              className={`flex items-center justify-center size-7 md:size-[20px] rounded-full lg:size-[22.4px] lg:ml-[7px] xl:size-[28px] xl:ml-[9px]  ${
                isHovered ? " bg-blue duration-300" : "bg-dark"
              }`}
            >
              <img
                src={ArrowBtn.src}
                alt="ArrowBtn"
                className={`transition-opacity duration-500 md:hidden lg:flex lg:size-[6.4px] xl:size-auto ${
                  isHovered ? "arrow-out" : ""
                }`}
                key={animationKey}
              />
              {isHovered && (
                <img
                  src={ArrowBtn.src}
                  alt="ArrowBtn"
                  className="arrow-in md:hidden gl:flex lg:size-[6.4px] xl:size-auto"
                  style={{
                    position: "absolute",
                    right: "23px",
                    top: "20px",
                  }}
                />
              )}

              <img
                src={ArrowBtnLittle.src}
                alt="ArrowBtn"
                className={`hidden transition-opacity duration-500 md:flex lg:hidden ${
                  isHovered ? "arrow-out" : ""
                }`}
                key={animationKey}
              />
              {isHovered && (
                <img
                  src={ArrowBtnLittle.src}
                  alt="ArrowBtn"
                  className="hidden arrow-in md:flex lg:hidden"
                  style={{
                    position: "absolute",
                    right: "23px",
                    top: "20px",
                  }}
                />
              )}
            </div>
          </button>

          <div className="absolute z-0 flex justify-center items-center size-[335px] bg-outer rounded-full md:size-[194px] md:bg-outer-md md:-top-[32px] lg:size-[385px] xl:size-[485px] xl:-top-[115px]">
            <div className="flex justify-center items-center size-[98%] bg-white rounded-full xl:size-[99%]">
              <div className="size-[87%] bg-inner rounded-full md:bg-inner-reverse">
                <img
                  src={CurvedLineOne.src}
                  alt=""
                  className="hidden absolute z-30 md:flex md:w-[26.42px] md:h-[5.6px] md:top-[87px] md:-left-[26px] lg:w-[66px] lg:h-[14px] lg:top-[121px] lg:-left-[56.4px] xl:top-[214px] xl:-left-[68px]"
                />
                <img
                  src={CurvedLineTwo.src}
                  alt=""
                  className="hidden absolute z-30 md:flex md:w-[24.42px] md:h-[3.2px] md:top-[142px] md:-left-[13px] lg:w-[66px] lg:h-[14px] lg:top-[225px] lg:-left-[54px] xl:top-[344px] xl:-left-[30px]"
                />
                <img
                  src={CurvedLineThree.src}
                  alt=""
                  className="hidden absolute z-30 md:flex md:w-[29.71px] md:h-[3.2px] md:top-[91px] md:-right-[29.8px] lg:w-[66px] lg:h-[14px] lg:top-[126px] lg:-right-[53.8px] xl:top-[220px] xl:-right-[66px] "
                />
                <img
                  src={CurvedLineFour.src}
                  alt=""
                  className="hidden absolute z-30 md:flex  md:w-[30.32px] md:h-[4.9px] md:top-[140px] md:-right-[16.3px] lg:w-[70px] lg:h-[14px] lg:top-[222px] lg:-right-[55.6px] xl:top-[340px] xl:-right-[32px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[24px] md:hidden ">
          {[
            "Общается как живой человек. Понимает, что пишет и говорит клиент",
            "Отвечает на типовые вопросы 24/7 на любом языке",
            "Собирает данные для оформления доставки, записи, бронирования и пр.",
            "Не требует зарплаты, не устает, не болеет, не ошибается, помогает продавать",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-[17px] relative md:mt-[20px]"
            >
              <div className="w-[260px] h-[52px] flex items-center justify-center text-center rounded-[10px] border-[1px]  border-cloud md:w-[334px] md:h-[67px]">
                <p
                  className={`text-[12px] font-Regular ${
                    index === 1
                      ? "max-w-[170px] md:max-w-[250px]"
                      : "max-w-[240px] md:max-w-[320px]"
                  } md:text-[16px]`}
                >
                  {item}
                </p>
              </div>
              <div className="flex justify-center items-center size-4 rounded-full bg-cloud absolute -top-2">
                <div className="size-2 rounded-full bg-blue"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden relative md:flex flex-col items-center mt-[14px]">
          {[
            "Общается как живой человек. Понимает, что пишет и говорит клиент",
            "Отвечает на типовые вопросы 24/7 на любом языке",
            "Собирает данные для оформления доставки, записи, бронирования и пр.",
            "Не требует зарплаты, не устает, не болеет, не ошибается, помогает продавать",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-[17px] md:mt-[20px]"
            >
              <div
                className={`absolute md:h-[38px] lg:h-[53px] xl:h-[67px] z-50
                ${
                  index === 0
                    ? "md:w-[206px] md:-top-[195px] md:-left-[327px] lg:w-[267px] lg:-top-[346px] lg:-left-[512px] xl:w-[334px] xl:-top-[433px] xl:-left-[640px]"
                    : ""
                }
                ${
                  index === 1
                    ? "md:w-[160px] md:-top-[132px] md:-left-[267px] lg:w-[212px] lg:-top-[248px] lg:-left-[425px] xl:w-[265px] xl:-top-[310px] xl:-left-[532px]"
                    : ""
                }
                ${
                  index === 2
                    ? "md:w-[199px] md:-top-[185px] md:left-[123px] lg:w-[260px] lg:-top-[346px] lg:left-[245px] xl:w-[326px] xl:-top-[433px] xl:left-[307px]"
                    : ""
                }
                ${
                  index === 3
                    ? "md:w-[215px] md:-top-[132px] md:left-[107px] lg:w-[283px] lg:-top-[248px] lg:left-[212px] xl:w-[354px] xl:-top-[310px] xl:left-[265px]"
                    : ""
                }
                flex items-center md:pl-[6px] lg:pl-4 xl:pl-5 text-left md:rounded-[4px] md:border-[0.4px] lg:rounded-[10px] xl:border-[1px] bg-white  border-cloud`}
              >
                <p
                  className={`md:text-[10px] md:leading-[13px] lg:h-[33px] lg:text-[12px] lg:leading-[16.6px] xl:h-[42px] xl:text-[16px] xl:leading-[20.8px] font-Regular
                  ${
                    index === 0 ? "md:w-[192px] lg:w-[245px] xl:w-[307px]" : " "
                  }
                  ${
                    index === 1 ? "md:w-[142px] lg:w-[197px] xl:w-[247px]" : " "
                  }
                  ${
                    index === 2 ? "md:w-[186px] lg:w-[244px] xl:w-[306px]" : " "
                  }
                  ${
                    index === 3 ? "md:w-[204px] lg:w-[259px] xl:w-[324px]" : " "
                  }
                  `}
                >
                  {item}
                </p>
              </div>
              <div
                className={`
              ${
                index === 0
                  ? "md:-top-[173px] md:-left-[100px] lg:-top-[329px] lg:-left-[190px] xl:-top-[412px] xl:-left-[251px]"
                  : ""
              }
              ${
                index === 1
                  ? "md:-top-[122px] md:-left-[89px] lg:-top-[231px] lg:-left-[195px] xl:-top-[289px] xl:-left-[228px]"
                  : ""
              }
              ${
                index === 2
                  ? "md:-top-[172px] md:left-[92px] lg:-top-[328px] lg:left-[174px] xl:-top-[410px] xl:left-[230px]"
                  : ""
              }
              ${
                index === 3
                  ? "md:-top-[123px] md:left-[81px] lg:-top-[231px] lg:left-[178px] xl:-top-[289px] xl:left-[207px]"
                  : ""
              }
              flex justify-center items-center md:size-[8.41px] lg:size-[16.8px] xl:size-[21px] rounded-full bg-cloud absolute`}
              >
                <div className="md:size-[4.4px] lg:size-[8.8px] xl:size-[11px] rounded-full bg-blue"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainScreen;
