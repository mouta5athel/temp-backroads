import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pagelinks =[
    {id:1, href:'#home' ,text:'home'},
    {id:2, href:'#about' ,text:'about'},
    {id:3, href:'#services' ,text:'services'},
    {id:4, href:'#tours' ,text:'tours'}

];
export const sociallinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.youtube.com', icon: 'fab fa-squarespace' },
];
export const services = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
  },
];
export const tours = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image:tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    location: 'indonesia',
    duration: 7,
    cost:  3000,
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour3,
    date: 'october 10th, 2020',
    title: 'nabeul zin buldan',
    location: 'tunisie',
    duration: 15,
    cost: 4500,
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour4,
    date: 'october 20th, 2023',
    title: 'explore hong kong',
    location: 'hong kong',
    duration: 7,
    cost: 3050,
  },
]