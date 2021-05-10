export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609928043609b56183f305ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o834qn7j',
                  apiId: '102f7818-c7f2-40af-b88b-da032ae1221a'
                },
                {
                  buildHookId: '6099280480c856ba1daa0439',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w819rafy',
                  apiId: 'a362b9a8-d99b-40c0-a2d4-fa747365ec03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChrisReutter/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w819rafy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
