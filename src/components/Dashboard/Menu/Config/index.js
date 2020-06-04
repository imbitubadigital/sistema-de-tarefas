const itemsMenus = [
  {
    name: 'Dashboard',
    icon: 'home',
    url: '/dashboard',
    subs: [],
  },

  {
    name: 'Perfil',
    icon: 'user',
    url: '/dashboard/perfil',
    subs: [
      {
        name: 'Meus Dados',
        url: '/meus-dados',
      },
      {
        name: 'Trocar Senha',
        url: '/trocar-senha',
      },
    ],
  },
  {
    name: 'Categorias',
    icon: 'contao',
    url: '/categorias',
    subs: [],
  },
  {
    name: 'Tarefas',
    icon: 'calendar-check-o',
    url: '/tarefas',
    subs: [],
  },
  {
    name: 'Sair',
    icon: 'sign-out',
    url: '/sair',
    subs: [],
  },
];

export default itemsMenus;
