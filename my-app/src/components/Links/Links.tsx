import HumanRobot from "@/Images/HumanRobot.png";
import InstagramICON from "@/Images/instagram_icon.svg";
import VkICON from "@/Images/vk_icon.svg";
import TelegramICON from "@/Images/telegram_icon.svg";
import ViberICON from "@/Images/viber_icon.svg";
import FacebookICON from "@/Images/facebook_icon.svg";
import WhatsappICON from "@/Images/whatsapp_icon.svg";
import YoulaICON from "@/Images/youla_icon.svg";
import AvitoICON from "@/Images/avito_icon.svg";
import MailICON from "@/Images/mail_icon.svg";

function Links() {
  return (
    <>
      <div className="flex flex-col items-center mt-[78px] overflow-hidden">
        <h2 className="text-[22px] leading-[26.4px] text-center font-Regular mb-5">
          Можно подключить ко всем популярным соцсетям, мессенджерам и площадкам
        </h2>

        <div className="relative">
          <div className="bg-links">
            <div className="z-1 flex justify-center items-center size-[265px] rounded-full border-black border-[1px] border-dashed">
              <div className="flex justify-center items-center size-[204px] bg-cloud bg-opacity-20 rounded-full border-black border-[1px] border-dashed">
                <div className="flex justify-center items-center size-[136px] bg-white rounded-full border-black border-[1px] border-dashed">
                  <div className="z-50 flex justify-center items-center size-[87px] rounded-full bg-cloud">
                    <div className="flex justify-center items-center size-[68px] rounded-full bg-blue">
                      <p className="text-[10.22px] leading-[13.28px] text-lime font-Regular">
                        NEXTBOT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute">
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
                key={index}
                className={`z-50 absolute flex justify-center items-center size-[32px] rounded-full bg-cloud
                ${index === 0 ? "-top-[260px] left-[49px]" : ""}
                ${index === 1 ? "-top-[247px] left-[127px]" : ""}
                ${index === 2 ? "-top-[222px] left-[226px]" : ""}
                ${index === 3 ? "-top-[192px] left-[165px]" : ""}
                ${index === 4 ? "-top-[159px] left-[217px]" : ""}
                ${index === 5 ? "-top-[192px] left-[67px]" : ""}
                ${index === 6 ? "-top-[146px] -left-[17px]" : ""}
                ${index === 7 ? "-top-[93px] left-[30px]" : ""}
                ${index === 8 ? "-top-[24px] left-[66px]" : ""}
                `}
              >
                <div className="flex justify-center items-center size-[26px] rounded-full bg-blue">
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="z-20 blur-sm absolute size-[250px] -bottom-[90px] left-[100px] rounded-full bg-links"></div>
          <img
            src={HumanRobot.src}
            alt="HumanRobot"
            className="z-50 absolute size-[130px] -bottom-[60px] left-[153px]"
          />
        </div>

        <div className="z-50 flex flex-col items-start mt-[70px] ">
          <p className="w-[306px] h-[76px] text-[16px] leading-[19.2px] text-dark font-Regular">
            ИИ-ассистента можно подключить к Telegram, Вконтакте, Avito,
            WhatsApp, Instagram*, Facebook*, Online-chat, Viber, Email, Юла,
            WhatsApp Business
          </p>
          <p className="w-[255px] h-[38px] mt-[10px] text-[16px] leading-[19.2px] text-dark font-Regular">
            Можно сделать виджет для сайта с ИИ-консультантом
          </p>
          <p className="w-[285px] h-[24px] mt-[13px] text-[10px] leading-[12.1px] text-dark font-Regular">
            Instagram* – продукт компании Meta. Признана экстремистской
            организацией на территории РФ
          </p>
        </div>
      </div>
    </>
  );
}

export default Links;
