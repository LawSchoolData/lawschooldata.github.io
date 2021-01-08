
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/blog',
  component: ComponentCreator('/blog','914'),
  exact: true,
},
{
  path: '/blog/big-update',
  component: ComponentCreator('/blog/big-update','353'),
  exact: true,
},
{
  path: '/blog/hello',
  component: ComponentCreator('/blog/hello','cc9'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','4ba'),
  exact: true,
},
{
  path: '/blog/tags/devlog',
  component: ComponentCreator('/blog/tags/devlog','2a7'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','cdb'),
  exact: true,
},
{
  path: '/blog/tags/lsdata',
  component: ComponentCreator('/blog/tags/lsdata','ba7'),
  exact: true,
},
{
  path: '/blog/tags/updates',
  component: ComponentCreator('/blog/tags/updates','808'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','14f'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','47d'),
  exact: true,
},
{
  path: '/applicant-search',
  component: ComponentCreator('/applicant-search','d54'),
  exact: true,
},
{
  path: '/doc1',
  component: ComponentCreator('/doc1','9f0'),
  exact: true,
},
{
  path: '/doc2',
  component: ComponentCreator('/doc2','328'),
  exact: true,
},
{
  path: '/doc3',
  component: ComponentCreator('/doc3','5d3'),
  exact: true,
},
{
  path: '/lsdata-faq',
  component: ComponentCreator('/lsdata-faq','d12'),
  exact: true,
},
{
  path: '/mdx',
  component: ComponentCreator('/mdx','f9a'),
  exact: true,
},
{
  path: '/school-graphs',
  component: ComponentCreator('/school-graphs','3cf'),
  exact: true,
},
{
  path: '/status-checker',
  component: ComponentCreator('/status-checker','368'),
  exact: true,
},
{
  path: '/terminology',
  component: ComponentCreator('/terminology','764'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
