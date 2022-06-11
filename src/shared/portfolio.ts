import { ILIST } from './interface';

import imgProjectManagementApp from '../images/portfolio/projectmanagementapp.jpg';
import imgProjectManagementAppSmall from '../images/portfolio/projectmanagementapp-small.jpg';
import imgReactStage3 from '../images/portfolio/reactstage3.jpg';
import imgReactStage3Small from '../images/portfolio/reactstage3-small.jpg';
import imgCssMemSlider from '../images/portfolio/cssmemslider.jpg';
import imgCssMemSliderSmall from '../images/portfolio/cssmemslider-small.jpg';
import imgVirtualKeyboard from '../images/portfolio/virtualkeyboard.jpg';
import imgVirtualKeyboardSmall from '../images/portfolio/virtualkeyboard-small.jpg';
import imgCleverShop from '../images/portfolio/clevershop.jpg';
import imgCleverShopSmall from '../images/portfolio/clevershop-small.jpg';
import imgShelter from '../images/portfolio/shelter.jpg';
import imgShelterSmall from '../images/portfolio/shelter-small.jpg';
import imgCustomVideoPlayer from '../images/portfolio/customvideoplayer.jpg';
import imgCustomVideoPlayerSmall from '../images/portfolio/customvideoplayer-small.jpg';
import imgPortfolio from '../images/portfolio/portfolio.jpg';
import imgPortfolioSmall from '../images/portfolio/portfolio-small.jpg';
import imgWebDev from '../images/portfolio/webdev.jpg';
import imgWebDevSmall from '../images/portfolio/webdev-small.jpg';

const PORTFOLIO_LIST: ILIST[] = [
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
    src: imgCleverShop,
    srcSmall: imgCleverShopSmall,
    alt: 'Clever Shop',
    altRu: 'Умный Магазин',
    description: 'Clever Shop',
    descriptionRu: 'Умный Магазин',
    deploy: 'https://mitrofanzxc.github.io/training-shop/',
    code: 'https://github.com/mitrofanzxc/training-shop',
    stack: 'React, Swiper, SCSS',
    id: 'ca102e38-7dff-4a39-8e32-cb57cad0bffd',
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
