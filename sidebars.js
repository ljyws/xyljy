

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [

    'HOME',

    {
      type: 'category',
      label: 'Quadruped-sim',
      items: [
        'quadruped-sim/eigen',
        'quadruped-sim/load_robot',
        'quadruped-sim/foot_swing_trajectory'

      ],
    },


    {
      type: 'category',
      label: 'Mujoco',
      items: [
        'MuJoCo/introduce',

      ],
    },

    {
      type: 'category',
      label: 'C++',
      items: [
        'c++/template',

      ],
    },

    {
      type: 'category',
      label: 'graduation project',
      items: [
        'graduation-project/summary',

      ],
    },

    {
      type: 'category',
      label: 'embedded',
      items: [
        'embedded/vscode+keil',

      ],
    }
  ],
};

module.exports = sidebars;