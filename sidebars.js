

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [

    'HOME',

    {
      type: 'category',
      label: 'Quadruped-sim',
      items: [
        'quadruped-sim/eigen',

      ],
    },

    {
      type: 'category',
      label: 'Mujoco',
      items: [
        'MuJoCo/introduce',
        'MuJoCo/xml',

      ],
    }
  ],
};

module.exports = sidebars;