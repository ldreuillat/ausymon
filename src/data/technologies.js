const images = require.context('./images', true, /\.png$/);

const candidates = {
  slides: [
    {
      title: 'Java',
      content: 'Java est une technique informatique développée initialement par Sun Microsystems.',
      image: images('./tech_java.png'),
    },
    {
      title: 'Vue.js',
      content: 'Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages.',
      image: images('./tech_vue.js.png'),
    },
    {
      title: 'Linux',
      content: "Linux est, au sens restreint, le noyau Linux, et au sens large, tout système d'exploitation fondé sur le noyau Linux.",
      image: images('./tech_linux.png'),
    },
    {
      title: 'JEE',
      content: 'JEE  est une spécification pour la plate-forme Java d\'Oracle, destinée aux applications d\'entreprise.',
      image: images('./tech_jee.png'),
    },
    {
      title: 'JavaScript',
      content: 'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives.',
      image: images('./tech_javascript.png'),
    },
  ],
};
export default candidates;
