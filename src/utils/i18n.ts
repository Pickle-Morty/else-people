import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      notification_one: "You have {{count}} notification",
      notification_other: "You have {{count}} notifications",
      localization: 'Localization',
      else_text1: "We are Else ex.ITFactory, an accredited IT company.",
      else_text2:
        "We specialize in custom development of web services, mobile applications, and complex integrations.",
      else_text3:
        "Top market players have entrusted us with their tasks →→→ VGTRK, Megafon, Gazprom, ELIS, Yakitoria, Taste Victory, and many others.",
      else_text4:
        "We are rapidly growing. Currently, our Else team consists of 35 specialists: analysts, managers, designers, developers, testers, and project planners. We are constantly expanding our staff and adding experienced professionals with whom we implement large-scale projects.",
    },
  },
  ru: {
    translation: {
      notification_one: "У тебя {{count}} уведомление",
      notification_other: "У тебя {{count}} уведомления",
      localization: 'Локализация',
      else_text1: "Мы — Else ex.ITFactory аккредитованная IT компания.",
      else_text2:
        "Занимаемся кастомной разработкой веб-сервисов, мобильных приложений и сложными интеграциями.",
      else_text3:
        "Нам доверили свои задачи топы рынка →→→ ВГТРК, Мегафон, Газпром, ELIS, Якитория, Победа вкуса и многие другие.",
      else_text4:
        "Мы стремительно развиваемся. Сейчас в нашей команде Else - 35 специалистов: аналитики, менеджеры, дизайнеры, разработчики, тестировщики и проектировщики. Постоянно расширяем штат и пополняем его опытными специалистами, вместе с которыми реализуем масштабные проекты.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
