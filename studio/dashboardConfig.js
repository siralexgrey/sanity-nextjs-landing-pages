export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '626543a5dfdc5816a83e8f16',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-omm66kca',
                  apiId: '97aca231-8343-4cf5-8390-a5291bf76af8'
                },
                {
                  buildHookId: '626543a57fb73723b290aadc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-djygf79i',
                  apiId: '490ca1fc-2a21-4277-b161-1120ec8c2986'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siralexgrey/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-djygf79i.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
