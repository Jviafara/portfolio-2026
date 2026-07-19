export const NAVBARMENU = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Sobre mí', href: 'sobre-mi' },
  { label: 'Habilidades', href: 'habilidades' },
  { label: 'Experiencia', href: 'experiencia' },
  { label: 'Proyectos', href: 'proyectos' },
  { label: 'Contacto', href: 'contacto' },
]

export const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'contacto']

export const SAMPLECODE = `const developer = {
  name: 'Jesús Viafara',
  role: 'Desarrollador de Software',
  skills: ['React', 'TypeScript', 'Node.js'],
  building: 'Soluciones digitales'
};

function createImpact() {
  return 'Código que genera impacto 🚀';
}`

export const TECNOLOGIAS = [
  {
    name: 'AngularJS',
    icon: '/skills/angular.png',
    level: 70,
  },
  {
    name: 'React',
    icon: '/skills/react.png',
    level: 90,
  },
  {
    name: 'Next.js',
    icon: '/skills/next.png',
    level: 85,
  },
  {
    name: 'Node.js',
    icon: '/skills/node.png',
    level: 70,
  },
  {
    name: 'Express',
    icon: '/skills/express.png',
    level: 70,
  },
  {
    name: 'TypeScript',
    icon: '/skills/typescript.png',
    level: 90,
  },
  {
    name: 'JavaScript',
    icon: '/skills/javascript.png',
    level: 90,
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
    level: 100,
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
    level: 100,
  },
  {
    name: 'Tailwind CSS',
    icon: '/skills/tailwind.png',
    level: 90,
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongo.png',
    level: 80,
  },
  {
    name: 'MySQL',
    icon: '/skills/mysql.png',
    level: 50,
  },
  {
    name: 'Git',
    icon: '/skills/Git.png',
    level: 90,
  },
]

export const PROYECTOS = [
  {
    name: 'Rubik Store',
    description:
      'Web store demo page originalmente desarrollada con el stack MERN y posteriormente migrada a Next.js e implementando el servicio de autenticacion BetterAuth.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'BetterAuth'],
    image: '/projects/RubikStore.png',
    gitLink: 'https://github.com/Jviafara/rubick-store-nextjs ',
    url: 'https://rubick-store-nextjs.vercel.app/',
  },
  {
    name: 'MovieNest',
    description:
      'Libreria de series y peliculas originalmente desarrollada con el stack MERN y posteriormente migrada a Next.js e implementando el servicio de autenticacion BetterAuth.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'BetterAuth'],
    image: '/projects/MovieNest.png',
    gitLink: 'https://github.com/Jviafara/movie-nest-nextjs',
    url: 'https://movie-nest-nextjs.vercel.app/',
  },
  {
    name: 'Weather App',
    description:
      'Aplicación web (SPA) basada en React para consultar las condiciones meteorológicas actuales y la previsión del tiempo de cualquier ciudad del mundo, utilizando la API OpenWeatherMap.',
    tecnologias: ['React', 'JavaScript', 'Tailwind CSS'],
    image: '/projects/WeatherApp.png',
    gitLink: 'https://github.com/Jviafara/weatherApp',
    url: 'https://weatherappjv.netlify.app/',
  },
]
