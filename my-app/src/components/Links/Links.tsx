import HumanRobot from "@/Images/HumanRobot.png";

function Links() {
  return (
    <>
      <div className="flex flex-col items-center mt-[80px]">
        <h2 className="text-[22px] leading-[26.4px] text-center font-Regular mb-5">
          Можно подключить ко всем популярным соцсетям, мессенджерам и площадкам
        </h2>

        <div className="flex justify-center items-center size-[265px] rounded-full border-black border-[1px] border-dashed">
          <div className="flex justify-center items-center size-[204px] rounded-full border-black border-[1px] border-dashed">
            <div className="flex justify-center items-center size-[136px] rounded-full border-black border-[1px] border-dashed">
              <div className="flex justify-center items-center size-[87px] rounded-full bg-cloud">
                <div className="flex justify-center items-center size-[68px] rounded-full bg-blue">
                  <p className="text-[10.22px] leading-[13.28px] text-lime font-Regular">
                    NEXTBOT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>
            ИИ-ассистента можно подключить к Telegram, Вконтакте, Avito,
            WhatsApp, Instagram*, Facebook*, Online-chat, Viber, Email, Юла,
            WhatsApp Business
          </p>
          <p>Можно сделать виджет для сайта с ИИ-консультантом</p>
          <p>
            Instagram* – продукт компании Meta. Признана экстремистской
            организацией на территории РФ
          </p>
        </div>
      </div>
    </>
  );
}

export default Links;
