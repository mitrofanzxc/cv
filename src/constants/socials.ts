import { ISocialsMock } from './interface';
import imgGithub from '../assets/images/icons/socials/github.png';
import imgGithubSmall from '../assets/images/icons/socials/github-small.png';
import imgCodewars from '../assets/images/icons/socials/codewars.png';
import imgCodewarsSmall from '../assets/images/icons/socials/codewars-small.png';
import imgLinkedin from '../assets/images/icons/socials/linkedin.png';
import imgLinkedinSmall from '../assets/images/icons/socials/linkedin-small.png';

const SocialsMock: ISocialsMock[] = [
  {
    id: '8fb5452e-03e2-4c85-8a7d-e914d76e7c51',
    src: imgGithub,
    srcSmall: imgGithubSmall,
    alt: 'GitHub',
    altRu: 'ГитХаб',
    description: 'GitHub',
    descriptionRu: 'ГитХаб',
    link: 'https://github.com/mitrofanzxc',
  },
  {
    id: 'aa4ee206-cc31-4ad8-8a06-64380ec08588',
    src: imgCodewars,
    srcSmall: imgCodewarsSmall,
    alt: 'CodeWars',
    altRu: 'КодВарс',
    description: 'CodeWars',
    descriptionRu: 'КодВарс',
    link: 'https://www.codewars.com/users/mitrofanzxc',
  },
  {
    id: '6ff21512-21a5-47ad-8461-603bda7dce68',
    src: imgLinkedin,
    srcSmall: imgLinkedinSmall,
    alt: 'Linkedin',
    altRu: 'Линкедин',
    description: 'Linkedin',
    descriptionRu: 'Линкедин',
    link: 'https://www.linkedin.com/in/dzmitry-karakulka/',
  },
];

export { SocialsMock };
