import React from 'react';

const Base = () => {
  return (
    <section className='mx-[10px] px-[10px] bg-cloud rounded-[10px] flex flex-wrap justify-center gap-4 mt-[83px] pt-2 '>
      <div className='flex flex-col gap-3 pb-2'>
        <h2 className='text-[22px] font-Regular leading-[26.4px] text-center text-dark md:text-[26px]'>
          Умный поиск
          <br className='md:hidden' /> по базе знаний
        </h2>
        <div className='flex flex-col gap-2 max-w-[597px]'>
          <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base'>
            ChatGPT глубоко анализирует запросы пользователя и использует
            историю сообщений. Благодаря этому, ИИ-бот задает осмысленные
            вопросы и получает релевантные ответы
          </p>
          <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base'>
            В базу знаний вы можете загрузить больше информации о своей компании
            в структурированном виде: расписать подробно, какие услуги
            предоставляете, какие товары продаете, по какой цене, от чего
            зависит стоимость и др.
          </p>
          <p className='text-[12px] font-Regular leading-[14.4px] text-dark md:text-base'>
            Вы можете прописать это вручную, загрузить документом или просто
            добавить ссылку на сайт
          </p>
        </div>
      </div>
      <div className='relative pt-2 flex justify-center w-full'>
        <img
          src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
          alt='icon'
          className='absolute top-[-17px] z-0 scale-[85%] md:scale-[105%] md:top-[-3px] w-[280px] h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl'
        />
        <img
          src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
          alt='icon'
          className='absolute top-[-9px] z-0 scale-90 md:scale-[110%] md:top-[5px] w-[280px] h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl'
        />
        <img
          src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
          alt='icon'
          className='absolute top-[-1px] z-0 scale-95 md:scale-[115%] md:top-[15px] w-[280px] h-[169px] rounded-[10px] drop-shadow-2xl shadow-2xl'
        />
        <img
          src='https://s3-alpha-sig.figma.com/img/5aff/49be/00e433109f358d9500d1e6d01886accc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYiHHa4OWIQ5mrkTe-EYtO~NqLw4KyfYlxd9YwlWc6gInvcMwokmxEf7yYWlqJ~bmnolyJsdycbz1HlLgh0scRPXlaEFmC1ypSYq6vyoyBSpvFrK2sxG4ZaGu6LRJeUellfLDBnu4bvqAY0~~hw0b7YMBX4XX~Fyt9ZT117v~g8EnN7wyLySldz93YDA8FNTC0BtBPQGgrayGAIjI8u4zZXvsvSLUoke7e0EYMpZVwKQxsTilJvyKI~CB-7aeAopCwU68XAgE8D5vh~ngwlJ6TVlDP2GGjOHJwCPyTUqNtbtq81jqSksC230dnDQwfoXuOGoXLbZk5NrYbNnGiUCoA__'
          alt='icon'
          className=' z-50 scale-100 w-[280px] h-[169px] md:w-[340px] md:h-[229px] rounded-[10px]'
        />
      </div>
    </section>
  );
};

export default Base;
