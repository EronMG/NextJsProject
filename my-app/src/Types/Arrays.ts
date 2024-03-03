import {
  BusinessItem,
  ExampleItem,
  HelpBlock,
  HelpItem,
  PaymentsBlock,
  StepsItem,
} from "./Types";

export const bussinesArr: BusinessItem[] = [
  { id: 1, title: "Обрабатывает заявки клиентов быстро и без ошибок" },
  { id: 2, title: "Записывает на процедуру" },
  { id: 3, title: "Оформляет бронь и доставку товара" },
  { id: 4, title: "Закрывает возражения клиентов и помогает продавать" },
  { id: 5, title: "Выполняет любые операции, которые вы пропишите в сценарии" },
];

export const courseArr = [
  {
    id: 1,
    day: 1,
    name: "Введение и основы разработки ботов",
    titleArr: [
      {
        id: 1,
        title: "1. Открытие марафона",
        liArr: [
          { id: 1, span: "Приветствие участников" },
          { id: 2, span: "Представление целей и ожиданий марафона" },
          { id: 3, span: "Обзор программы мероприятия" },
        ],
      },
      {
        id: 2,
        title: "2. Введение в искусственный интеллект и ботов",
        liArr: [
          { id: 1, span: "Приветствие участников" },
          { id: 2, span: "Представление целей и ожиданий марафона" },
          { id: 3, span: "Обзор программы мероприятия" },
        ],
      },
      {
        id: 3,
        title: "3. Платформа Nextbot для разработки",
        liArr: [
          {
            id: 1,
            span: "Обзор платформы Nextbot: функции, возможности, преимущества",
          },
          {
            id: 2,
            span: "Демонстрация создания простого бота на платформе Nextbot",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    day: 2,
    name: "Настройка и запуск базового бота",
    h3: "Практический мастер-класс по созданию базового бота на примере Telegram",
    paragraph:
      "В режиме реального времени, шаг за шагом вы будете делать своего первого ИИ бота",
    titleArr: [
      {
        title: "",
        id: 1,
        liArr: [
          { id: 1, span: "Создание бота в телеграм" },
          { id: 2, span: "Подключение телеграмм к Nextbot" },
          { id: 3, span: "Базовая настройка Nextbot" },
          { id: 4, span: "Подготовка промта" },
          { id: 5, span: "Тестирование и запуск бота" },
        ],
      },
    ],
  },
  {
    id: 3,
    day: 3,
    name: "Функции, или как не просто общаться с клиентам, а получать заказы в отдельный Telegram-чат",
    h3: "Углубленный мастер-класс по Nextbot",
    titleArr: [
      {
        id: 1,
        title: "",
        liArr: [
          { id: 1, span: "Создание сложных сценариев взаимодействия" },
          {
            id: 2,
            span: "Обработка запросов и интеграция продвинутых функций",
          },
          { id: 3, span: "Отправка уведомлений о заказе в Telegram" },
        ],
      },
    ],
  },
  {
    id: 4,
    day: 4,
    name: "Улучшение и дообучение ботов. Делаем бота, который на 100% походит на человека и не придумывает ничего лишнего",
    titleArr: [
      {
        id: 1,
        title: "1. Интеграция баз знаний и данных в ботов",
        liArr: [
          {
            id: 1,
            span: "Теория работы с базами данных и их интеграция в ботов",
          },
          { id: 2, span: "Варианты подключения баз знаний в Nextbot" },
          { id: 3, span: "Практические примеры" },
        ],
      },
      {
        id: 2,
        title: "2. Улучшение функционала ИИ ассистента",
        liArr: [
          { id: 1, span: "Расширение возможностей существующих ботов" },
          {
            id: 2,
            span: "Оптимизация работы и улучшение пользовательского опыта",
          },
        ],
      },
    ],
  },
];

export const helpArr: HelpItem[] = [
  {
    id: 1,
    title: "Что делал ИИ-бот на Avito",
  },
  {
    id: 2,
    title: "консультировал и отвечал на вопросы клиентов",
  },
  {
    id: 3,
    title: "поддерживал разговор",
  },
  {
    id: 4,
    title: "собирал данные для доставки",
  },
  {
    id: 5,
    title: "передавал готовую заявку менеджеру",
  },
];

export const helpArrBlock: HelpBlock[] = [
  {
    id: 1,
    name: "Расходы в 2023г. (с ИИ-ботом): 14 000 ₽",
    title: "ИИ-бот работает 24/7",
    titleArr: [
      {
        id: 1,
        title: "11 000 руб – работа сервиса NextBot на базе GPT 4.0;",
      },
      {
        id: 2,
        title:
          "3 000 ₽ – работа одного менеджера. Он обзванивал для подтверждения заказа только тех клиентов, которые оставил все данные для доставки ",
      },
      {
        id: 3,
        title:
          "Обработано 440 обращений, отправлено 2640 сообщений. Цена обработки одного обращения – 32 ₽",
      },
    ],
  },
  {
    id: 2,
    name: "Расходы в 2022г., без ИИ-бота – 30 000 ₽",
    title:
      "Менеджер на связи только днем. Ночью заявки остаются без ответа. Часть клиентов теряем",
    titleArr: [
      {
        id: 1,
        title: "30 000 ₽ – работа одного менеджера",
      },
      {
        id: 2,
        title: "Для обработки 440 обращений нужны 2 менеджера (60 000 ₽) ",
      },
      {
        id: 3,
        title:
          "Обработано 237 обращений. Цена обработки одного обращения – 127 ₽",
      },
    ],
  },
];

export const helpArrBlock2 = [
  {
    id: 1,
    title: "ИИ-бот работает 24/7",
    titleArr: [
      {
        id: 1,
        title: "11 000 руб – работа сервиса NextBot на базе GPT 4.0;",
      },
      {
        id: 2,
        title:
          "3 000 ₽ – работа одного менеджера. Он обзванивал для подтверждения заказа только тех клиентов, которые оставил все данные для доставки ",
      },
      {
        id: 3,
        title:
          "Обработано 440 обращений, отправлено 2640 сообщений. Цена обработки одного обращения – 32 ₽",
      },
    ],
  },
  {
    id: 2,
    title:
      "Менеджер на связи только днем. Ночью заявки остаются без ответа. Часть клиентов теряем",
    titleArr: [
      {
        id: 1,
        title: "30 000 ₽ – работа одного менеджера",
      },
      {
        id: 2,
        title: "Для обработки 440 обращений нужны 2 менеджера (60 000 ₽) ",
      },
      {
        id: 3,
        title:
          "Обработано 237 обращений. Цена обработки одного обращения – 127 ₽",
      },
    ],
  },
];

export const iiArr: HelpItem[] = [
  {
    id: 1,
    title:
      "Поддерживает контекст диалога и понимает ролевой промпт. Может выступить в роли любого специалиста – маркетолога, эксперт по ремонту авто и пр.",
  },
  {
    id: 2,
    title:
      "Не просто общается с клиентами. ИИ-бот запрашивает номер телефона, имя и другие данные, а затем передает их в Telegram-чат, CRM и пр.",
  },
  {
    id: 3,
    title:
      "Если поступил специфический запрос, и ИИ-бот не знает, что ответить, он отправляет уведомление менеджеру. И в беседу включается живой человек.",
  },
];

export const stepsArr: StepsItem[] = [
  {
    id: 1,
    count: "01",
    name: "Определите цель и задачи для ИИ-бота",
    title:
      "Консультировать клиентов 24/7, собирать заявки, оформлять бронь, «прогревать», служба поддержки 24/7 и т.п.",
  },
  {
    id: 2,
    count: "02",
    name: "Напишите инструкцию для ИИ-бота",
    title:
      "Что он должен делать, как он должен отвечать клиентам; что ему делать, если поступает специфический запрос",
  },
  {
    id: 3,
    count: "03",
    name: "Создайте базу знаний, откуда бот будет брать данные о ценах, товарах и пр.",
    title:
      "Можно прописать текстом, загрузить готовый документ или просто добавить ссылку на сайт",
  },
  {
    id: 4,
    count: "04",
    name: "Протестируйте бота и внесите корректировки",
    title:
      "ИИ-бот – это как новый сотрудник, которого первое время нужно обучать и контролировать",
  },
  {
    id: 5,
    count: "05",
    name: "Подключите ИИ-бота к соцсетям или мессенджеру и запустите решение в бизнес",
    title:
      "Можно сделать виджет для сайта или подключить к соцсетям и мессенджерам",
  },
];

export const paymentsArr: PaymentsBlock[] = [
  {
    id: 1,
    name: "Пробный",
    title: "Доступ ко всему функционалу сервиса NextBot",
    titleArr: [
      {
        id: 1,
        title: "Инструкция для бота",
      },
      {
        id: 2,
        title: "Стартовое сообщение",
      },
      {
        id: 3,
        title: "Сообщение об ошибке",
      },
      {
        id: 4,
        title: "Настройки температуры – степени случайности в ответах бота",
      },
      {
        id: 5,
        title: "Максимальное кол-во токенов для ответа",
      },
      {
        id: 6,
        title: "База знаний: текст, сайт, документ",
      },
      {
        id: 7,
        title: "Умный поиск по базе знаний",
      },
      {
        id: 8,
        title: "Оптимизация истории диалога",
      },
      {
        id: 9,
        title: "Работа с функциями",
      },
      {
        id: 10,
        title: "Выбор модели ChatGPT",
      },
      {
        id: 11,
        title: "Буфер сообщений",
      },
      {
        id: 12,
        title: "Ограничение токенов",
      },
      {
        id: 13,
        title: "Дополнительные опции ",
      },
      {
        id: 14,
        title: "Подключение сервисов: Telegram, Вконтакте, WhatsApp",
      },
      {
        id: 15,
        title: "Настройки чат-виджета для сайта",
      },
    ],
    spanArr: [
      {
        id: 1,
        title: "20 000 токенов",
      },
      {
        id: 2,
        title: "Бесплатное обучение",
      },
      {
        id: 3,
        title: "Доступ в чат поддержки",
      },
      {
        id: 4,
        title: "Докупить токены нельзя",
      },
    ],
    cost: 0,
    deleteCost: 0,
  },
  {
    id: 2,
    name: "Бизнес",
    title: "Доступ ко всему функционалу сервиса NextBot",
    titleArr: [
      {
        id: 1,
        title: "Инструкция для бота",
      },
      {
        id: 2,
        title: "Стартовое сообщение",
      },
      {
        id: 3,
        title: "Сообщение об ошибке",
      },
      {
        id: 4,
        title: "Настройки температуры – степени случайности в ответах бота",
      },
      {
        id: 5,
        title: "Максимальное кол-во токенов для ответа",
      },
      {
        id: 6,
        title: "База знаний: текст, сайт, документ",
      },
      {
        id: 7,
        title: "Умный поиск по базе знаний",
      },
      {
        id: 8,
        title: "Оптимизация истории диалога",
      },
      {
        id: 9,
        title: "Работа с функциями",
      },
      {
        id: 10,
        title: "Выбор модели ChatGPT",
      },
      {
        id: 11,
        title: "Буфер сообщений",
      },
      {
        id: 12,
        title: "Ограничение токенов",
      },
      {
        id: 13,
        title: "Дополнительные опции ",
      },
      {
        id: 14,
        title: "Подключение сервисов: Telegram, Вконтакте, WhatsApp",
      },
      {
        id: 15,
        title: "Настройки чат-виджета для сайта",
      },
    ],
    spanArr: [
      {
        id: 1,
        title: "2 000 000 токенов",
      },
      {
        id: 2,
        title: "Бесплатное обучение",
      },
      {
        id: 3,
        title: "Доступ в чат поддержки",
      },
      {
        id: 4,
        title: "Токены можно докупить",
      },
    ],
    cost: 5800,
    deleteCost: 2900,
  },
  {
    id: 3,
    name: "Премиум",
    title: "Доступ ко всему функционалу сервиса NextBot",
    titleArr: [
      {
        id: 1,
        title: "Инструкция для бота",
      },
      {
        id: 2,
        title: "Стартовое сообщение",
      },
      {
        id: 3,
        title: "Сообщение об ошибке",
      },
      {
        id: 4,
        title: "Настройки температуры – степени случайности в ответах бота",
      },
      {
        id: 5,
        title: "Максимальное кол-во токенов для ответа",
      },
      {
        id: 6,
        title: "База знаний: текст, сайт, документ",
      },
      {
        id: 7,
        title: "Умный поиск по базе знаний",
      },
      {
        id: 8,
        title: "Оптимизация истории диалога",
      },
      {
        id: 9,
        title: "Работа с функциями",
      },
      {
        id: 10,
        title: "Выбор модели ChatGPT",
      },
      {
        id: 11,
        title: "Буфер сообщений",
      },
      {
        id: 12,
        title: "Ограничение токенов",
      },
      {
        id: 13,
        title: "Дополнительные опции ",
      },
      {
        id: 14,
        title: "Подключение сервисов: Telegram, Вконтакте, WhatsApp",
      },
      {
        id: 15,
        title: "Настройки чат-виджета для сайта",
      },
    ],
    spanArr: [
      {
        id: 1,
        title: "10 000 000 токенов",
      },
      {
        id: 2,
        title: "Бесплатное обучение",
      },
      {
        id: 3,
        title: "Доступ в чат поддержки",
      },
      {
        id: 4,
        title:
          "Научим, как делать ИИ-ботов и подключать к SaleBot, например в WhatsApp или Instagram*",
      },
      {
        id: 5,
        title: "Токены можно докупить",
      },
    ],
    cost: 8000,
    deleteCost: 4000,
  },
];

export const exampleArr: ExampleItem[] = [
  {
    id: 1,
    title: "Нейро-консультант",
    subtitle:
      "Отвечает на вопросы клиентов о продуктах и услугах вашей компании в течение 10-15 сек",
  },
  {
    id: 2,
    title: "Нейро-ассистент",
    subtitle:
      "Освобождает руководителей от рутинной работы: отвечает на вопросы клиентов, собирает отзывы, проводит опросы и пр.",
  },
  {
    id: 3,
    title: "Нейро-техподдержка",
    subtitle:
      "Помогает вашим клиентам решить проблемы, связанные с ПО, сервисом или другим продуктом",
  },
  {
    id: 4,
    title: "Нейро-куратор",
    subtitle:
      "Заменяет или разгружает живого куратора в онлайн-школах. Оперативно отвечает на вопросы учеников 24/7",
  },
  {
    id: 5,
    title: "Нейро-администратор",
    subtitle:
      "Отвечает на вопросы клиентов, может записать на процедуры, забронировать товар и пр.",
  },
  {
    id: 6,
    title: "Нейро-контроль",
    subtitle:
      "Анализирует звонки отдела продаж и дает рекомендации, какие изменения внести, чтобы менеджеры закрывали больше сделок",
  },
  {
    id: 7,
    title: "Нейро-секретарь",
    subtitle:
      "Помогает руководителю обрабатывать входящую информацию, анализировать и составлять отчеты",
  },
  {
    id: 8,
    title: "Нейро-продажник",
    subtitle:
      "Поддерживает и вовлекает клиента в разговор, «прогревает» его, мотивирует оставить заявку",
  },
];
