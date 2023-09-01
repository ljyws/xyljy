

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [

    'HOME',

    {
      type: 'category',
      label: 'Quadruped-sim',
      items: [
        'quadruped-sim/eigen',
        'quadruped-sim/load_model',

      ],
    },

    {
      type: 'category',
      label: 'Mujoco',
      items: [
        'MuJoCo/introduce',

      ],
    }
  ],
};

module.exports = sidebars;