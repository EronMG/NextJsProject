import React from 'react';
import Press from '@/Images/press.svg';

const Course = () => {
  return (
    <section>
      <div>
        <h2>
          На бесплатном обучении вы получите пошаговую инструкцию, как собрать
          ИИ-бота, который поддерживает беседу и мотивирует клиента оставить
          заявку
        </h2>
        <img src={Press.src} alt='icon' />
      </div>
    </section>
  );
};

export default Course;
