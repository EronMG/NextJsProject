import React from "react";

import ArrowBtn from "@/Images/ArrowBtn.svg";

const MainScreen = () => {
  return (
    <>
      <section className="w-screen flex flex-col items-center overflow-hidden lg:bg-black">
        <div className="flex flex-col gap-3 mt-[25px]">
          <h1 className="w-[287px] text-mmh text-center font-Bold text-dark pl-2">
            <em className="text-blue not-italic underline underline-offset-4 decoration-[1.5px]">
              Создай ИИ-ассистента
            </em>{" "}
            для бизнеса
            <em className="font-Regular"> за 5 минут</em> без знаний
            программирования
          </h1>
          <p className="w-[300px] text-base text-center text-mmp font-Regular text-dark">
            Бот и ассистент на базе ChatGPT возьмет на себя до 100% рутинных
            задач. Заменит или разгрузит вашего администратора, консультанта,
            менеджера по продажам и др.
          </p>
        </div>

        <div className="relative  flex flex-col items-center pt-4">
          <div className="z-10 w-[139px] h-[216px] bg-black opacity-5"></div>
          <button className="z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime mt-6">
            <p className="text-[14px] text-dark font-Medium ml-7">
              Создать ии-ассистента
            </p>
            <div className="flex items-center justify-center size-7 rounded-full bg-dark">
              <img src={ArrowBtn.src} alt="ArrowBtn" />
            </div>
          </button>

          <div className="absolute z-0 flex justify-center items-center size-[335px] bg-gradient-to-t from-white via-cloud to-white rounded-full">
            <div className="flex justify-center items-center size-[98%] bg-white rounded-full">
              <div className="size-[87%] bg-gradient-to-t from-white to-cloud rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {[
            "Общается как живой человек. Понимает, что пишет и говорит клиент",
            "Отвечает на типовые вопросы 24/7 на любом языке",
            "Собирает данные для оформления доставки, записи, бронирования и пр.",
            "Не требует зарплаты, не устает, не болеет, не ошибается, помогает продавать",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-[17px] relative"
            >
              <div className="w-[260px] h-[52px] flex items-center justify-center text-center rounded-[10px] border-[1px]  border-cloud">
                <p className="w-[240px] text-[12px] font-Regular ">{item}</p>
              </div>
              <div className="flex justify-center items-center size-4 rounded-full bg-cloud absolute -top-2">
                <div className="size-2 rounded-full bg-blue"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainScreen;
