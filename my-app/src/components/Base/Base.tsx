import React from 'react';

const Base = () => {
  return (
    <div className='xx:flex justify-center'>
      <section className='mx-[10px] px-[10px] lg:flex-row bg-cloud lg:items-end lg:mx-10 md:pt-10 md:pl-5 rounded-[10px] flex flex-col lg:justify-center lg:gap-20 xm:px-[79px] xm:justify-between justify-center gap-4 mt-[71px] lg:mt-[100px] xx:mt-0 pt-2 xx:w-[1738px] xx:rounded-[20px] xx:pt-[76px] xx:gap-[70px]'>
        {/* FIX MT-500PX */}
        <div className='flex flex-col gap-3 pb-2'>
          <h2 className='text-[22px] font-Regular leading-[26.4px] text-center text-dark md:text-[26px] xx:text-[36px] xx:leading-[43.2px] xx:text-start'>
            Умный поиск
            <br className='md:hidden' /> по базе знаний
          </h2>
          <div className='flex flex-col gap-2 max-w-[597px]'>
            <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base xm:text-[22px] xm:leading-[26.4px] xm:pt-[38px] lg:w-[400px] xm:w-[549px]'>
              ChatGPT глубоко анализирует запросы пользователя и использует
              историю сообщений. Благодаря этому, ИИ-бот задает осмысленные
              вопросы и получает релевантные ответы
            </p>
            <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base xm:text-[22px] xm:leading-[26.4px] xm:w-[597px] lg:w-[400px] xm:pt-[11px]'>
              В базу знаний вы можете загрузить больше информации о своей
              компании в структурированном виде: расписать подробно, какие
              услуги предоставляете, какие товары продаете, по какой цене, от
              чего зависит стоимость и др.
            </p>
            <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base xm:text-[22px] xm:leading-[26.4px] xm:w-[597px] lg:w-[400px] xm:pt-4'>
              Вы можете прописать это вручную, загрузить документом или просто
              добавить ссылку на сайт
            </p>
          </div>
        </div>
        <div className='relative pt-2 flex justify-center w-fit xx:pt-11'>
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
            alt='icon'
            className='absolute top-[-17px] z-0 scale-[85%] md:scale-[110%] md:top-[-0.4px] w-[280px] lg:scale-[139%] xm:top-[18px] lg:top-[20px]  h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-100 xx:w-[817px] xx:h-[485px] xx:rounded-t-[20px] xx:top-[-2px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
            alt='icon'
            className='absolute top-[-9px] z-0 scale-90 md:scale-[119%] md:top-[12.5px] w-[280px] h-[169px] xm:scale-[150%] xm:top-[34.4px] lg:scale-[148%] lg:top-[33.3px]  rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-100 xx:w-[843px] xx:h-[509px] xx:rounded-t-[20px] xx:top-[13px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
            alt='icon'
            className='absolute top-[-1px] z-0 scale-95 md:scale-[127%] md:top-[25px] w-[280px] xm:scale-[164%] xm:top-[54px] lg:scale-[154%] lg:top-[46px] h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl xx:scale-100 xx:w-[877px] xx:h-[531px] xx:rounded-t-[20px] xx:top-[28px]'
          />
          <img
            src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
            alt='icon'
            className=' z-50 scale-100 w-[280px] h-[169px] md:w-[380px] md:h-[249px] xm:w-[700px] xm:h-[350px] lg:w-[450px] lg:h-[300px] rounded-t-[10px] xx:w-[913px] xx:h-[552px] xx:rounded-t-[20px]'
          />
        </div>
      </section>
    </div>
  );
};

export default Base;
