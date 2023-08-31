

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    
    // "browser",
      "HOME",
      {
        type: 'category',
        label: 'Quadruped-Sim',
        link: {
            type: 'generated-index',
        },
        items: [
           'EIGEN',
        ],
      },
  ]
}
module.exports = sidebars;
