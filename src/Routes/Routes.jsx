import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        index: true,
        path: '/',
        loader:()=>fetch('appsData.json')  ,
        Component: Home,
      },
      {
        path: '/apps',
        loader:()=> fetch('allAppsData.json'),
        Component: AllApps,
      }
    ]
  },
]);