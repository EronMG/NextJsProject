"use client";
import React, { useState } from "react";
import CurvedLineOne from "@/Images/CurvedLineOne.svg";
import CurvedLineTwo from "@/Images/CurvedLineTwo.svg";
import CurvedLineThree from "@/Images/CurvedLineThree.svg";
import CurvedLineFour from "@/Images/CurvedLineFour.svg";
import BGImageOne from "@/Images/bgImageOne.png";
import BGImageTwo from "@/Images/bgImageTwo.png";

import ArrowBtn from "@/Images/ArrowBtn.svg";
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
      <section className="w-screen relative flex flex-col items-center overflow-hidden md:pt-[35px] lg:pt-[71px] xx:pt-20 xx:mb-2">
        <div className="z-10 flex flex-col items-center gap-3 mt-[15px] xx:gap-2 xx:mt-[8px]">
          <AnimatedHeading text={""} size={"normal"} />
          <p className="max-w-[300px] text-base text-center text-[16px] leading-[20.8px] font-Regular text-dark md:text-[20px] mm:max-w-[522px] mm:min-w-[300px] lg:text-[20px] lg:leading-[26px] xx:max-w-[722px]">
            Бот и ассистент на базе ChatGPT возьмет на себя до 100% рутинных
            задач. Заменит или разгрузит вашего администратора, консультанта,
            менеджера по продажам и др.
          </p>
        </div>

        <img
          src={BGImageOne.src}
          alt=""
          className="absolute z-30 -top-[82px] right-0"
        />
        <img
          src={BGImageTwo.src}
          alt=""
          className="absolute -top-[82px] right-0"
        />

        <div className="md:flex-col-reverse relative flex flex-col items-center gap-6 pt-4 md:gap-10 lg:mt-[11px]">
          <div className="z-10 w-[139px] h-[216px] bg-black opacity-5 md:w-[249px] md:h-[390px]"></div>
          <button
            className={`relative z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime md:w-[280px] ${
              isHovered ? "button-hovered" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p
              className={`text-[14px] font-Medium ml-7 md:text-[18px] ${
                isHovered ? "text-blue duration-300" : " text-dark"
              }`}
            >
              Создать ии-ассистента
            </p>
            <div
              className={`flex items-center justify-center size-7 rounded-full  ${
                isHovered ? " bg-blue duration-300" : "bg-dark"
              }`}
            >
              <img
                src={ArrowBtn.src}
                alt="ArrowBtn"
                className={`transition-opacity duration-500 ${
                  isHovered ? "arrow-out" : ""
                }`}
                key={animationKey}
              />
              {isHovered && (
                <img
                  src={ArrowBtn.src}
                  alt="ArrowBtn"
                  className="arrow-in"
                  style={{
                    position: "absolute",
                    right: "23px",
                    top: "20px",
                  }}
                />
              )}
            </div>
          </button>

          <div className="absolute z-0 flex justify-center items-center size-[335px] bg-outer rounded-full md:size-[485px] md:-top-10 lg:-top-[115px] md:bg-outer-md">
            <div className="flex justify-center items-center size-[98%] bg-white rounded-full lg:size-[99%]">
              <div className="size-[87%] bg-inner rounded-full md:bg-inner-reverse">
                <img
                  src={CurvedLineOne.src}
                  alt=""
                  className="hidden xl:flex z-30 w-[66px] h-[14px] absolute top-[214px] -left-[68px]"
                />
                <img
                  src={CurvedLineTwo.src}
                  alt=""
                  className="hidden xl:flex z-30 w-[66px] h-[14px] absolute top-[344px] -left-[30px]"
                />
                <img
                  src={CurvedLineThree.src}
                  alt=""
                  className="hidden xl:flex z-50 w-[66px] h-[14px] absolute top-[220px] -right-[66px] "
                />
                <img
                  src={CurvedLineFour.src}
                  alt=""
                  className="hidden xl:flex z-50 w-[70px] h-[14px] absolute top-[340px] -right-[32px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[24px] md:grid md:grid-cols-2 md:gap-x-4 xl:hidden ">
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

        <div className="hidden relative xl:flex flex-col items-center mt-[14px]">
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
                className={`absolute h-[67px] z-50
                ${index === 0 ? "w-[334px] -top-[433px] -left-[640px]" : ""}
                ${index === 1 ? "w-[265px] -top-[310px] -left-[532px]" : ""}
                ${index === 2 ? "w-[326px] -top-[433px] left-[307px]" : ""}
                ${index === 3 ? "w-[354px] -top-[310px] left-[265px]" : ""}
                flex items-center pl-5 text-left rounded-[10px] border-[1px] bg-white  border-cloud`}
              >
                <p
                  className={`h-[42px] text-[16px] leading-[20.8px] font-Regular md:text-[16px]
                  ${index === 0 ? "w-[307px]" : " "}
                  ${index === 1 ? "w-[247px]" : " "}
                  ${index === 2 ? "w-[306px]" : " "}
                  ${index === 3 ? "w-[324px]" : " "}
                  `}
                >
                  {item}
                </p>
              </div>
              <div
                className={`
              ${index === 0 ? "-top-[412px] -left-[251px]" : ""}
              ${index === 1 ? "-top-[289px] -left-[228px]" : ""}
              ${index === 2 ? "-top-[410px] left-[230px]" : ""}
              ${index === 3 ? "-top-[289px] left-[207px]" : ""}
              flex justify-center items-center size-[21px] rounded-full bg-cloud absolute`}
              >
                <div className="size-[11px] rounded-full bg-blue"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainScreen;
