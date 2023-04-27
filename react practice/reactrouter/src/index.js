import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About.js'
import Contact from './Contact.js'
import { BrowserRouter} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from
'react-router-dom';
import Hero from './herosection';
const appRouter = createBrowserRouter([
{
         path:"/",
         element:<App/>,
children:[
{
path:"/",
element:<Hero/>,
},
{
path:"/about",
element:<About/>,
},
{
path:"/contact",
element:<Contact/>,
}
]
},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    
  <BrowserRouter>
  
  
    </BrowserRouter>
    
  </React.StrictMode>
);



