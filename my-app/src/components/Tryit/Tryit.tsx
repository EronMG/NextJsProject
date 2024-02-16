import TryitExampleIMG from "@/Images/TryitExampleIMG.png";

function Tryit() {
  return (
    <>
      <section className="w-screen flex flex-col items-center mt-[80px]">
        <div className="flex justify-center items-center pb-[11px] border-b-2 border-blue">
          <h2 className="max-w-[292px] text-[22px] leading-[26.4px] text-center font-Regular">
            В NextBot вы создадите бота с искусственным интеллектом. Он общается
            как человек. Клиенты не отличают его от настоящего консультанта
          </h2>
        </div>
        <div className="flex flex-col items-center pt-5">
          <p className="text-[16px] leading-[20.8px] text-center font-Regular pb-5">
            Без сложных настроек
          </p>
          <div className="flex flex-col items-center gap-5">
            {[
              "ИИ-бот на основе ChatGPT 3,5 Turbo и ChatGPT 4 Turbo",
              "Настройка без знаний программирования",
              "Все основные настройки вынесены в интерфейс сервиса",
              "Понятное объяснение для каждого пункта настроек",
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-[5px]">
                <div className="w-[300px] h-[52px] flex items-center justify-center bg-blue rounded-[10px]">
                  <p
                    className={`h-[42px] text-[16px] leading-[20.8px] text-center text-Regular text-white
                  ${index === 0 || 1 ? "max-w-[230px]" : ""}
                  ${index === 2 || 3 ? "max-w-[260px]" : ""}
                  `}
                  >
                    {item}
                  </p>
                </div>
                <div className="w-[300px] h-[218px] flex items-center justify-center bg-cloud rounded-[10px]">
                  <img src={TryitExampleIMG.src} alt="TryitExampleIMG" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tryit;
