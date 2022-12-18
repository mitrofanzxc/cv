import { IPortfolioMock } from './interface';
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

const PortfolioMock: IPortfolioMock[] = [
  {
    id: 'da008180-0652-4570-a366-3e6156e9f592',
    src: imgCalculator,
    srcSmall: imgCalculatorSmall,
    alt: 'Calculator',
    altRu: 'Калькулятор',
    description: 'Calculator',
    descriptionRu: 'Калькулятор',
    deploy: 'https://mitrofanzxc.github.io/calculator/',
    code: 'https://github.com/mitrofanzxc/calculator',
    stack:
      'React, Functional + Class Components, Redux Toolkit, TypeScript, Styled Components, SCSS, Cypress, Webpack',
  },
  {
    id: '7ed601ce-f30a-4066-882d-7a260d0c9211',
    src: imgCoincapApi,
    srcSmall: imgCoincapApiSmall,
    alt: 'CoinCap API',
    altRu: 'КоинКап АПИ',
    description: 'CoinCap API',
    descriptionRu: 'КоинКап АПИ',
    deploy: 'https://mitrofanzxc.github.io/coincap-api/',
    code: 'https://github.com/mitrofanzxc/coincap-api',
    stack: 'React, Redux Toolkit, RTK Query, TypeScript, SCSS',
  },
  {
    id: '81df2a6e-3574-491f-a1aa-1b3325a54e8f',
    src: imgRSLang,
    srcSmall: imgRSLangSmall,
    alt: 'RS Lang',
    altRu: 'РС Лэнг',
    description: 'RS Lang',
    descriptionRu: 'РС Лэнг',
    deploy: 'https://gendev-1001.github.io/rslang/',
    code: 'https://github.com/mitrofanzxc/rslang',
    stack: 'React, Redux Toolkit, RTK Query, TypeScript, SCSS',
  },
  {
    id: 'c217c746-b59b-4f04-ab90-049e3d1e51a2',
    src: imgAsyncRace,
    srcSmall: imgAsyncRaceSmall,
    alt: 'Async Race',
    altRu: 'Асинхронные гонки',
    description: 'Async Race',
    descriptionRu: 'Асинхронные гонки',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/async-race/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/async-race',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, SCSS',
  },
  {
    id: '4a44fedc-c253-49e9-9966-429c4a9e91ab',
    src: imgOnlineStore,
    srcSmall: imgOnlineStoreSmall,
    alt: 'Online Store',
    altRu: 'Онлайн Магазин',
    description: 'Online Store',
    descriptionRu: 'Онлайн Магазин',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/online-store/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/online-store',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, Swiper, SCSS',
  },
  {
    id: '7b9f5f46-6d64-4b29-8cd5-813f5a714d24',
    src: imgLLCMarketingTest,
    srcSmall: imgLLCMarketingTestSmall,
    alt: 'Montajcolec.by',
    altRu: 'Монтажколец.бай',
    description: 'Montajcolec.by',
    descriptionRu: 'Монтажколец.бай',
    deploy: 'https://mitrofanzxc.github.io/llc-marketing-test/',
    code: 'https://github.com/mitrofanzxc/llc-marketing-test',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, Swiper, SCSS',
  },
  {
    id: 'ed9e23f4-4545-4b13-8674-5c590b7e7908',
    src: imgReactForm,
    srcSmall: imgReactFormSmall,
    alt: 'React From',
    altRu: 'Реакт Форма',
    description: 'React From',
    descriptionRu: 'Реакт Форма',
    deploy: 'https://mitrofanzxc.github.io/react-form-test/',
    code: 'https://github.com/mitrofanzxc/react-form-test',
    stack: 'React, TypeScript, SCSS',
  },
  {
    id: '1cbe2a98-c281-4a83-ac8c-b8e1ea1e4c04',
    src: imgParadigmaTest,
    srcSmall: imgParadigmaTestSmall,
    alt: 'Roofing Academy',
    altRu: 'Академия Кровли',
    description: 'Roofing Academy',
    descriptionRu: 'Академия Кровли',
    deploy: 'https://mitrofanzxc.github.io/paradigma-test/',
    code: 'https://github.com/mitrofanzxc/paradigma-test',
    stack: 'React, Redux Toolkit, TypeScript, Swiper, SCSS',
  },
  {
    id: '52956caa-2ecb-4a23-a955-2a38721338a1',
    src: imgNewsApi,
    srcSmall: imgNewsApiSmall,
    alt: 'News API',
    altRu: 'Новостные АПИ',
    description: 'News API',
    descriptionRu: 'Новостные АПИ',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/online-store/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1/tree/online-store',
    stack: 'React, Redux Toolkit, TypeScript, React Testing Library, SCSS',
  },
  {
    id: 'bae3950b-c535-482b-8182-efc45568c088',
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
  },
  {
    id: '280d136d-d9bb-4bd6-b9ce-f3c92dc8499e',
    src: imgReactStage3,
    srcSmall: imgReactStage3Small,
    alt: 'RSSchool Stage 3',
    altRu: 'РССкул Стадия 3',
    description: 'RSSchool Stage 3',
    descriptionRu: 'РССкул Стадия 3',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-REACT2022Q1/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-REACT2022Q1',
    stack: 'React, React Testing Library, TypeScript, SCSS',
  },
  {
    id: '73aac3fe-3ece-42f2-9846-e2fe5def8704',
    src: imgCssMemSlider,
    srcSmall: imgCssMemSliderSmall,
    alt: 'СSS Mem Slider',
    altRu: 'CSS Мем Слайдер',
    description: 'СSS Mem Slider',
    descriptionRu: 'CSS Мем Слайдер',
    deploy: 'https://mitrofanzxc.github.io/cssMemSlider/cssMemSlider/',
    code: 'https://github.com/mitrofanzxc/cssMemSlider',
    stack: 'HTML, SCSS',
  },
  {
    id: '10fd2227-d5e3-4c0a-8612-7d6f58b42c05',
    src: imgVirtualKeyboard,
    srcSmall: imgVirtualKeyboardSmall,
    alt: 'Virtual Keyboard',
    altRu: 'Виртуальная Клавиатура',
    description: 'Virtual Keyboard',
    descriptionRu: 'Виртуальная Клавиатура',
    deploy: 'https://mitrofanzxc.github.io/virtual-keyboard/',
    code: 'https://github.com/mitrofanzxc/virtual-keyboard',
    stack: 'HTML, SCSS, JavaScript',
  },
  {
    id: 'fca7ac50-e653-4c63-b413-ce546dd9cbb5',
    src: imgShelter,
    srcSmall: imgShelterSmall,
    alt: 'Shelter',
    altRu: 'Приют',
    description: 'Shelter',
    descriptionRu: 'Приют',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFE2022Q1/shelter/pages/main/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFE2022Q1',
    stack: 'HTML, SCSS, JavaScript',
  },
  {
    id: 'd76bd02b-2f6e-44d9-a9a0-8f950c6ce587',
    src: imgCustomVideoPlayer,
    srcSmall: imgCustomVideoPlayerSmall,
    alt: 'Custom Video Player',
    altRu: 'Пользовательский Видеоплеер',
    description: 'Custom Video Player',
    descriptionRu: 'Пользовательский Видеоплеер',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFEPRESCHOOL/js30/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFEPRESCHOOL',
    stack: 'HTML, SCSS, JavaScript',
  },
  {
    id: '09415f0e-7f12-429b-a13d-4afafa3849ad',
    src: imgPortfolio,
    srcSmall: imgPortfolioSmall,
    alt: 'Portfolio',
    altRu: 'Портфолио',
    description: 'Portfolio',
    descriptionRu: 'Портфолио',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFEPRESCHOOL/portfolio/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFEPRESCHOOL',
    stack: 'HTML, SCSS, JavaScript',
  },
  {
    id: '1f13f811-a988-46c8-9117-e9296aa4629d',
    src: imgWebDev,
    srcSmall: imgWebDevSmall,
    alt: 'WebDev',
    altRu: 'Веб-разработка',
    description: 'WebDev',
    descriptionRu: 'Веб-разработка',
    deploy: 'https://rolling-scopes-school.github.io/mitrofanzxc-JSFELT/webdev/',
    code: 'https://github.com/rolling-scopes-school/mitrofanzxc-JSFELT',
    stack: 'HTML, SCSS',
  },
];

export { PortfolioMock };
