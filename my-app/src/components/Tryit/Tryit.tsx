function Tryit() {
  return (
    <>
      <section className='w-screen flex flex-col items-center mt-[80px]'>
        <div className='flex justify-center items-center pb-[11px] border-b-2 border-blue'>
          <h2 className='max-w-[292px] text-[22px] leading-[26.4px] text-center font-Regular md:max-w-[600px]'>
            В NextBot вы создадите бота с искусственным интеллектом. Он общается
            как человек. Клиенты не отличают его от настоящего консультанта
          </h2>
        </div>
        <div className='flex flex-col items-center pt-5'>
          <p className='text-[16px] leading-[20.8px] text-center font-Regular pb-5 md:text-xl'>
            Без сложных настроек
          </p>
          <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
            {[
              'ИИ-бот на основе ChatGPT 3,5 Turbo и ChatGPT 4 Turbo',
              'Настройка без знаний программирования',
              'Все основные настройки вынесены в интерфейс сервиса',
              'Понятное объяснение для каждого пункта настроек',
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center gap-[5px]'>
                <div className='w-[300px] h-[52px] flex items-center justify-center bg-blue rounded-[10px]'>
                  <p
                    className={`h-[42px] text-[16px] leading-[20.8px] text-center text-Regular text-white
                  ${index === 0 || 1 ? 'max-w-[230px]' : ''}
                  ${index === 2 || 3 ? 'max-w-[260px]' : ''}
                  `}
                  >
                    {item}
                  </p>
                </div>
                <div className='w-[300px] h-[218px] p-[17px] flex items-center justify-center bg-cloud rounded-[10px]'>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/34ed/a0e4/97db142bfac37284807115474f9d0027?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0AczAYtdLUuAHnn3YGcQgZtoFSv46wJ5CVSgPMZGp50CnLUooiHi-P50dXj12zvkFKtmmjOJ6qju5FfgrBPBpiHMLskV1U-sS2nfoOd3laO0jqPi~8QNyAvxtQxPNQ~UvTpzBEWCl8WWLg~DqfkAeJdUDnFoAN~uNjRrdUcX8WFTuJQZnjFEdjmf7A121CcB7NiRfd7C1Hk-lkZxIsQKAUrI1tSEGKbwsa91p19~JteuHr0B9ffAzuN4qan981ztMdvBgEtfga2GDOAHjQo9q--EZuMP2V-Qe4Zq3Ioj66KJiD3RnHVK4s7UFlUrdYX2B84QyYG5aR1ubK2eTvWPg__'
                    alt='TryitExampleIMG'
                    className='rounded-[10px]'
                  />
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
