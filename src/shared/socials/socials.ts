import { ILIST } from '../interface/interface';

import imgLinkedin from '../images/icons/socials/linkedin.png';
import imgLinkedinSmall from '../images/icons/socials/linkedin-small.png';
import imgGithub from '../images/icons/socials/github.png';
import imgGithubSmall from '../images/icons/socials/github-small.png';
import imgCodewars from '../images/icons/socials/codewars.png';
import imgCodewarsSmall from '../images/icons/socials/codewars-small.png';
import imgYoutube from '../images/icons/socials/youtube.png';
import imgYoutubeSmall from '../images/icons/socials/youtube-small.png';
import imgInstagram from '../images/icons/socials/instagram.png';
import imgInstagramSmall from '../images/icons/socials/instagram-small.png';

const SOCIALS_LIST: ILIST[] = [
  {
    src: imgLinkedin,
    srcSmall: imgLinkedinSmall,
    alt: 'Linkedin',
    altRu: 'Линкедин',
    description: 'Linkedin',
    descriptionRu: 'Линкедин',
    link: 'https://www.linkedin.com/in/dzmitry-karakulka/',
    id: 'cb7beba6-efa3-458a-b6a4-f09c6d75a167',
  },
  {
    src: imgGithub,
    srcSmall: imgGithubSmall,
    alt: 'GitHub',
    altRu: 'ГитХаб',
    description: 'GitHub',
    descriptionRu: 'ГитХаб',
    link: 'https://github.com/mitrofanzxc',
    id: '4be80abb-858f-4c81-8a40-f23b4dfcb951',
  },
  {
    src: imgCodewars,
    srcSmall: imgCodewarsSmall,
    alt: 'CodeWars',
    altRu: 'КодВарс',
    description: 'CodeWars',
    descriptionRu: 'КодВарс',
    link: 'https://www.codewars.com/users/mitrofanzxc',
    id: 'd27fa6c4-fed2-42bb-a3f1-efa31c78cafa',
  },
  {
    src: imgYoutube,
    srcSmall: imgYoutubeSmall,
    alt: 'YouTube',
    altRu: 'Ютуб',
    description: 'YouTube',
    descriptionRu: 'Ютуб',
    link: 'https://www.youtube.com/channel/UCoH1662bpAOkN2TKsAZqi9w',
    id: 'bb87faa3-662d-4c04-8ca2-b28127308f49',
  },
  {
    src: imgInstagram,
    srcSmall: imgInstagramSmall,
    alt: 'Instagram',
    altRu: 'Инстаграм',
    description: 'Instagram',
    descriptionRu: 'Инстаграм',
    link: 'https://www.instagram.com/mitrofanzxc/',
    id: 'c35f4d1d-a128-4fec-9a9b-7cda58c44c7f',
  },
];

export { SOCIALS_LIST };
