import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        index: true,
        path: '/',
        loader:async()=>{
          const res = await fetch('/appsData.json');
          const data = await res.json();
          return data
        }  ,
        Component: Home,
      },
      {
        path: '/apps',
        loader:()=> fetch('/appsData.json'),
        Component: AllApps,
      },
      {
        path: '/installedapps',
        loader:()=> fetch('/appsData.json'),
        Component: InstalledApps,
      },
      {
        path: '/appdetails/:id',
        loader:()=> fetch('/appsData.json'),
        Component: AppDetails,
      }
    ]
  },
]);