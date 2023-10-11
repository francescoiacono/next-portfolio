export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: '1',
    name: 'ChipWiz',
    description: `This project is an poker chips counter application that will keep track of your poker chips when there are none around. 
    Each player's state, including their role as a dealer, small blind, or big blind, as well as their current chip count and betting status, 
    is carefully managed and updated throughout the game. The application implements the complex game logic and betting rules of poker,
    including stage progression from Pre-Flop to Showdown and determining the next player's turn, taking into account various game conditions such as folding or going all-in.`,
    image: '/placeholder_200x200.svg',
    githubUrl: 'https://github.com/francescoiacono/chipwiz-v2',
    liveUrl: 'https://chipwiz.app/',
    technologies: ['Next.js', 'TypeScript', 'CSS', 'Firebase'],
  },
  {
    id: '2',
    name: 'Ischia Boat Tours',
    description:
      'A responsive web app that replicates core features and design of an existing website, as measured by implementing it with a modern stack including NextJS, TypeScript, and Tailwind CSS.',
    image: '/placeholder_200x200.svg',
    githubUrl: 'https://github.com/francescoiacono/boat-tours',
    liveUrl: 'https://boat-tours.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Accessibility',
      'SEO',
    ],
  },
  {
    id: '3',
    name: 'Penning Moments',
    description:
      'A web application that allows users to create their own personal journal. Users can create, edit, and delete journal entries. Users can also add tags to entries and sort them by them.',
    image: '/placeholder_200x200.svg',
    githubUrl: 'https://github.com/francescoiacono/journal-app',
    liveUrl: 'https://penningmoments.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Planetscale', 'CSS'],
  },
  {
    id: '4',
    name: 'Do Daily - To Do List',
    description:
      'This project is a simple to-do list application that allows users to create, edit, and delete tasks. Users can also mark tasks as completed and create multiple lists for different projects.',
    image: '/placeholder_200x200.svg',
    githubUrl: 'https://github.com/francescoiacono/todoList',
    liveUrl: 'https://dodaily.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Accessibility Study',
    ],
  },
  {
    id: '5',
    name: 'Redirectify',
    description: `When I was first exploring the power of Next.js, I made this simple URL shortener that allows users to create short links and redirect them to the original URL. The application uses MongoDB to store the links and Next.js to handle the routing.`,
    image: '/placeholder_200x200.svg',
    githubUrl: 'https://github.com/francescoiacono/exploring-nextjs',
    liveUrl: 'https://enjs.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'CSS', 'MongoDB'],
  },
];
