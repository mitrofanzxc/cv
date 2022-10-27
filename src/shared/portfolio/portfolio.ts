import { ILIST } from '../interface/interface';

import imgCalculator from '../../images/portfolio/calculator.jpg';
import imgCalculatorSmall from '../../images/portfolio/calculator-small.jpg';
import imgCoincapApi from '../../images/portfolio/coincap-api.jpg';
import imgCoincapApiSmall from '../../images/portfolio/coincap-api-small.jpg';
import imgRSLang from '../../images/portfolio/rslang.jpg';
import imgRSLangSmall from '../../images/portfolio/rslang-small.jpg';
import imgAsyncRace from '../../images/portfolio/async-race.jpg';
import imgAsyncRaceSmall from '../../images/portfolio/async-race-small.jpg';
import imgOnlineStore from '../../images/portfolio/online-store.jpg';
import imgOnlineStoreSmall from '../../images/portfolio/online-store-small.jpg';
import imgReactForm from '../../images/portfolio/react-form.jpg';
import imgReactFormSmall from '../../images/portfolio/react-form-small.jpg';
import imgLLCMarketingTest from '../../images/portfolio/llc-marketing-test.jpg';
import imgLLCMarketingTestSmall from '../../images/portfolio/llc-marketing-test-small.jpg';
import imgParadigmaTest from '../../images/portfolio/paradigma-test.jpg';
import imgParadigmaTestSmall from '../../images/portfolio/paradigma-test-small.jpg';
import imgNewsApi from '../../images/portfolio/news-api.jpg';
import imgNewsApiSmall from '../../images/portfolio/news-api-small.jpg';
import imgProjectManagementApp from '../../images/portfolio/projectmanagementapp.jpg';
import imgProjectManagementAppSmall from '../../images/portfolio/projectmanagementapp-small.jpg';
import imgReactStage3 from '../../images/portfolio/reactstage3.jpg';
import imgReactStage3Small from '../../images/portfolio/reactstage3-small.jpg';
import imgCssMemSlider from '../../images/portfolio/cssmemslider.jpg';
import imgCssMemSliderSmall from '../../images/portfolio/cssmemslider-small.jpg';
import imgVirtualKeyboard from '../../images/portfolio/virtualkeyboard.jpg';
import imgVirtualKeyboardSmall from '../../images/portfolio/virtualkeyboard-small.jpg';
import imgShelter from '../../images/portfolio/shelter.jpg';
import imgShelterSmall from '../../images/portfolio/shelter-small.jpg';
import imgCustomVideoPlayer from '../../images/portfolio/customvideoplayer.jpg';
import imgCustomVideoPlayerSmall from '../../images/portfolio/customvideoplayer-small.jpg';
import imgPortfolio from '../../images/portfolio/portfolio.jpg';
import imgPortfolioSmall from '../../images/portfolio/portfolio-small.jpg';
import imgWebDev from '../../images/portfolio/webdev.jpg';
import imgWebDevSmall from '../../images/portfolio/webdev-small.jpg';

const PORTFOLIO_LIST: ILIST[] = [
  {
    src: imgCalculator,
    srcSmall: imgCalculatorSmall,
    alt: 'Calculator',
    altRu: 'Калькулятор',
    description: 'Calculator',
    descriptionRu: 'Калькулятор',
    deploy: 'https://mitrofanzxc.github.io/calculator/',
    code: 'https://github.com/mitrofanzxc/calculator',
    stack: 'React, Redux Toolkit, Styled Components, Cypress, TypeScript, SCSS',
    id: 'c1cfa258-9044-4c06-a8ea-347543923498',
  },
  {
    src: imgCoincapApi,
    srcSmall: imgCoincapApiSmall,
    alt: 'CoinCap API',
    altRu: 'КоинКап АПИ',
    description: 'CoinCap API',
    descriptionRu: 'КоинКап АПИ',
    deploy: 'https://mitrofanzxc.github.io/coincap-api/',
    code: 'https://github.com/mitrofanzxc/coincap-api',
    stack: 'React, Redux Toolkit, RTK Query, TypeScript, SCSS',
    id: 'c1cfa258-9044-4c06-a8ea-347543923497',
  },
  {
    src: imgRSLang,
    srcSmall: imgRSLangSmall,
    alt: 'RS Lang',
    altRu: 'РС Лэнг',
    description: 'RS Lang',
    descriptionRu: 'РС Лэнг',
    deploy: 'https://gendev-1001.github.io/rslang/',
    code: 'https://github.com/mitrofanzxc/rslang',
    stack: 'React, Redux Toolkit, RTK Query, TypeScript, SCSS',
    id: 'c1cfa258-9044-4c06-a8ea-347543923496',
  },
  {
    src: imgAsyncRace,
    srcSmall: imgAsyncRaceSmall,
    alt: 'Async Race',
    altRu: 'Асинхронные гонки',
    description: 'Async Race',
    descriptionRu: 'Асинхронные гонки',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/async-race/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/async-race',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff3',
  },
  {
    src: imgOnlineStore,
    srcSmall: imgOnlineStoreSmall,
    alt: 'Online Store',
    altRu: 'Онлайн Магазин',
    description: 'Online Store',
    descriptionRu: 'Онлайн Магазин',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/online-store/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/online-store',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, Swiper, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff2',
  },
  {
    src: imgLLCMarketingTest,
    srcSmall: imgLLCMarketingTestSmall,
    alt: 'Montajcolec.by',
    altRu: 'Монтажколец.бай',
    description: 'Montajcolec.by',
    descriptionRu: 'Монтажколец.бай',
    deploy: 'https://mitrofanzxc.github.io/llc-marketing-test/',
    code: 'https://github.com/mitrofanzxc/llc-marketing-test',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, Swiper, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff2',
  },
  {
    src: imgReactForm,
    srcSmall: imgReactFormSmall,
    alt: 'React From',
    altRu: 'Реакт Форма',
    description: 'React From',
    descriptionRu: 'Реакт Форма',
    deploy: 'https://mitrofanzxc.github.io/react-form-test/',
    code: 'https://github.com/mitrofanzxc/react-form-test',
    stack: 'React, TypeScript, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff2',
  },
  {
    src: imgParadigmaTest,
    srcSmall: imgParadigmaTestSmall,
    alt: 'Roofing Academy',
    altRu: 'Академия Кровли',
    description: 'Roofing Academy',
    descriptionRu: 'Академия Кровли',
    deploy: 'https://mitrofanzxc.github.io/paradigma-test/',
    code: 'https://github.com/mitrofanzxc/paradigma-test',
    stack: 'React, Redux Toolkit, TypeScript, Swiper, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff2',
  },
  {
    src: imgNewsApi,
    srcSmall: imgNewsApiSmall,
    alt: 'News API',
    altRu: 'Новостные АПИ',
    description: 'News API',
    descriptionRu: 'Новостные АПИ',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/online-store/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/online-store',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bff1',
  },
  {
    src: imgProjectManagementApp,
    srcSmall: imgProjectManagementAppSmall,
    alt: 'Project Management App',
    altRu: 'Приложение для управления проектами',
    description: 'Project Management App',
    descriptionRu: 'Приложение для управления проектами',
    deploy: 'https://project-management-app-team53.netlify.app/',
    code: 'https://github.com/mitrofanzxc/project-management-app',
    stack:
      'React, Redux Toolkit (RTK Query), React Hook Form, React Beautiful DnD, React Testing Library, TypeScript, SCSS',
    id: '1df505e9-67d7-44d5-af50-1bec2252c8b6',
  },
  {
    src: imgReactStage3,
    srcSmall: imgReactStage3Small,
    alt: 'RSSchool Stage 3',
    altRu: 'РССкул Стадия 3',
    description: 'RSSchool Stage 3',
    descriptionRu: 'РССкул Стадия 3',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-REACT2022Q1/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-REACT2022Q1',
    stack: 'React, React Testing Library, TypeScript, SCSS',
    id: '95d33a4d-1c55-45b0-855e-85a8f1281582',
  },
  {
    src: imgCssMemSlider,
    srcSmall: imgCssMemSliderSmall,
    alt: 'СSS Mem Slider',
    altRu: 'CSS Мем Слайдер',
    description: 'СSS Mem Slider',
    descriptionRu: 'CSS Мем Слайдер',
    deploy: 'https://mitrofanzxc.github.io/cssMemSlider/cssMemSlider/',
    code: 'https://github.com/mitrofanzxc/cssMemSlider',
    stack: 'HTML, SCSS',
    id: 'db26059a-66ad-43d1-9e8c-d4e8db8b364e',
  },
  {
    src: imgVirtualKeyboard,
    srcSmall: imgVirtualKeyboardSmall,
    alt: 'Virtual Keyboard',
    altRu: 'Виртуальная Клавиатура',
    description: 'Virtual Keyboard',
    descriptionRu: 'Виртуальная Клавиатура',
    deploy: 'https://mitrofanzxc.github.io/virtual-keyboard/',
    code: 'https://github.com/mitrofanzxc/virtual-keyboard',
    stack: 'HTML, SCSS, JavaScript',
    id: '043762e5-3f6b-4dc2-9af4-b301baba32ef',
  },
  {
    src: imgShelter,
    srcSmall: imgShelterSmall,
    alt: 'Shelter',
    altRu: 'Приют',
    description: 'Shelter',
    descriptionRu: 'Приют',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/shelter/pages/main/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1',
    stack: 'HTML, SCSS, JavaScript',
    id: '4ae3c9ac-d607-40db-8a03-2930cc0ae753',
  },
  {
    src: imgCustomVideoPlayer,
    srcSmall: imgCustomVideoPlayerSmall,
    alt: 'Custom Video Player',
    altRu: 'Пользовательский Видеоплеер',
    description: 'Custom Video Player',
    descriptionRu: 'Пользовательский Видеоплеер',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFEPRESCHOOL/js30/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFEPRESCHOOL',
    stack: 'HTML, SCSS, JavaScript',
    id: '62a00433-8549-44c7-b14d-5826b0e42634',
  },
  {
    src: imgPortfolio,
    srcSmall: imgPortfolioSmall,
    alt: 'Portfolio',
    altRu: 'Портфолио',
    description: 'Portfolio',
    descriptionRu: 'Портфолио',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFEPRESCHOOL/portfolio/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFEPRESCHOOL',
    stack: 'HTML, SCSS, JavaScript',
    id: '7e44fd62-022f-41c3-a3e0-5c1396f7eae3',
  },
  {
    src: imgWebDev,
    srcSmall: imgWebDevSmall,
    alt: 'WebDev',
    altRu: 'Веб-разработка',
    description: 'WebDev',
    descriptionRu: 'Веб-разработка',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFELT/webdev/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFELT',
    stack: 'HTML, SCSS',
    id: '42f74b42-0daf-4e1e-97d3-1cfa53cc841a',
  },
];

export { PORTFOLIO_LIST };
