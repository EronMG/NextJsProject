import React from 'react';

const Base = () => {
  return (
    <div className='xx:flex justify-center md:mt-[160px]'>
      <section className='mx-[10px] px-[10px] md:mx-6 md:flex-row bg-cloud lg:mx-0 lg:items-start items-center md:items-start  md:pt-10 md:pl-5 rounded-[10px] flex flex-col lg:justify-center lg:gap-10 xm:px-[79px] xm:justify-between justify-center gap-4 mt-[71px] lg:mt-[100px] xx:mt-0 pt-2 xx:w-[1738px] xx:rounded-[20px] xx:pt-[76px] xx:gap-[70px]'>
        {/* FIX MT-500PX */}
        <div className='flex flex-col gap-3 pb-2'>
          <h2 className='text-[22px] font-Regular leading-[26.4px] lg:text-center lg:text-[24px] text-center md:text-start text-dark md:text-[18px] md:leading-[21.6px] xx:text-[36px] xx:leading-[43.2px] xx:text-start'>
            Умный поиск
            <br className='md:hidden' /> по базе знаний
          </h2>
          <div className='flex flex-col gap-2 lg:pt-4 lg:gap-4 xx:gap-0 max-w-[597px]'>
            <p className='text-[12px] font-Regular leading-[14.4px] lg:text-[16px] lg:leading-[18px] text-dark md:text-[12px] md:w-[284px] md:leading-[14.4px] xm:text-[22px] xm:leading-[26.4px] xm:pt-[38px] lg:w-[400px] xm:w-[549px]'>
              ChatGPT глубоко анализирует запросы пользователя и использует
              историю сообщений. Благодаря этому, ИИ-бот задает осмысленные
              вопросы и получает релевантные ответы
            </p>
            <p className='text-[12px] font-Regular leading-[14.4px] text-dark lg:text-[16px] lg:leading-[18px]  md:text-[12px] md:w-[322px] md:leading-[14.4px] xm:text-[22px] xm:leading-[26.4px] xm:w-[597px] lg:w-[400px] xm:pt-[11px]'>
              В базу знаний вы можете загрузить больше информации о своей
              компании в структурированном виде: расписать подробно, какие
              услуги предоставляете, какие товары продаете, по какой цене, от
              чего зависит стоимость и др.
            </p>
            <p className='text-[12px] font-Regular leading-[14.4px] text-dark  lg:text-[16px] lg:leading-[18px] md:text-[12px] md:leading-[14.4px] md:w-[301px] xm:text-[22px] xm:leading-[26.4px] xm:w-[597px] lg:w-[400px] xm:pt-4'>
              Вы можете прописать это вручную, загрузить документом или просто
              добавить ссылку на сайт
            </p>
          </div>
        </div>
        <div className='relative pt-2 flex justify-center w-fit xx:pt-11 xm:h-full'>
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WuxHeh3jb8T5eKGLOaf5ECn8oICb5pZMBsSlZ6ZIvEwo9sHS2AyLa9tNViy43r8bTOlfKBiAcQwIyBuIodjUK2T~Iw4~Af5zs2OoNWSDSCYa8d4sAuPADBMb82T-WxoEanwxRK~kOU~ch~EZaHq9JVPG4fcdCPRUX9I5hQk9qO~GtAs41dEnFJ8WSP~EiDorUw~HaMvUNQU1a~hDesGIZEw7I4ABQSwvsZLh~~dPDPyU8~RqDAEpjFbPkDkqy2d8i1aPvfFQRHLSZQpFuqHzSSI9kU40kAWXXfqBGSUkiS-hGeTrjM3k4scMUCwD080FzWHAhpy9vK2v~zW7bK8MEw__'
            alt='icon'
            className='absolute top-[-17px] z-0 scale-[85%] md:scale-[106%] md:top-[-4px] w-[280px] lg:scale-[152%] xm:scale-[180%] xm:top-[47px] lg:top-[27px]  h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-[85%] xx:w-[817px] xx:h-[485px] xx:rounded-t-[20px] xx:top-[-32px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WuxHeh3jb8T5eKGLOaf5ECn8oICb5pZMBsSlZ6ZIvEwo9sHS2AyLa9tNViy43r8bTOlfKBiAcQwIyBuIodjUK2T~Iw4~Af5zs2OoNWSDSCYa8d4sAuPADBMb82T-WxoEanwxRK~kOU~ch~EZaHq9JVPG4fcdCPRUX9I5hQk9qO~GtAs41dEnFJ8WSP~EiDorUw~HaMvUNQU1a~hDesGIZEw7I4ABQSwvsZLh~~dPDPyU8~RqDAEpjFbPkDkqy2d8i1aPvfFQRHLSZQpFuqHzSSI9kU40kAWXXfqBGSUkiS-hGeTrjM3k4scMUCwD080FzWHAhpy9vK2v~zW7bK8MEw__'
            alt='icon'
            className='absolute top-[-9px] z-0 scale-90 md:scale-[113%] md:top-[7px] w-[280px] h-[169px] xm:scale-[190%] xm:top-[65px] lg:scale-[163%] lg:top-[44px]  rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-[90%] xx:w-[843px] xx:h-[509px] xx:rounded-t-[20px] xx:top-[-10px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WuxHeh3jb8T5eKGLOaf5ECn8oICb5pZMBsSlZ6ZIvEwo9sHS2AyLa9tNViy43r8bTOlfKBiAcQwIyBuIodjUK2T~Iw4~Af5zs2OoNWSDSCYa8d4sAuPADBMb82T-WxoEanwxRK~kOU~ch~EZaHq9JVPG4fcdCPRUX9I5hQk9qO~GtAs41dEnFJ8WSP~EiDorUw~HaMvUNQU1a~hDesGIZEw7I4ABQSwvsZLh~~dPDPyU8~RqDAEpjFbPkDkqy2d8i1aPvfFQRHLSZQpFuqHzSSI9kU40kAWXXfqBGSUkiS-hGeTrjM3k4scMUCwD080FzWHAhpy9vK2v~zW7bK8MEw__'
            alt='icon'
            className='absolute top-[-1px] z-0 scale-95 md:scale-[120%] md:top-[19px] w-[280px] xm:scale-[204%] xm:top-[86px] lg:scale-[175%] lg:top-[63px] h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-[95%] xx:w-[877px] xx:h-[531px] xx:rounded-t-[20px] xx:top-[16px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WuxHeh3jb8T5eKGLOaf5ECn8oICb5pZMBsSlZ6ZIvEwo9sHS2AyLa9tNViy43r8bTOlfKBiAcQwIyBuIodjUK2T~Iw4~Af5zs2OoNWSDSCYa8d4sAuPADBMb82T-WxoEanwxRK~kOU~ch~EZaHq9JVPG4fcdCPRUX9I5hQk9qO~GtAs41dEnFJ8WSP~EiDorUw~HaMvUNQU1a~hDesGIZEw7I4ABQSwvsZLh~~dPDPyU8~RqDAEpjFbPkDkqy2d8i1aPvfFQRHLSZQpFuqHzSSI9kU40kAWXXfqBGSUkiS-hGeTrjM3k4scMUCwD080FzWHAhpy9vK2v~zW7bK8MEw__'
            alt='icon'
            className=' z-50 scale-100 w-[280px] h-[169px] md:w-[380px] md:h-[249px] xm:w-[800px] xm:h-[450px] lg:w-[520px] lg:h-[350px] rounded-t-[10px] xx:w-[913px] xx:h-[552px] xb:rounded-t-[20px]'
          />
        </div>
      </section>
    </div>
  );
};

export default Base;
