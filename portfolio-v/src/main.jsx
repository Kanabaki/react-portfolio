import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const routes = [
  {
path: '/',
element: <App />,
errorElement: <ErrorPage />,
children: [
{
  index: true,
  element: <AboutPage />,
},
{
  element: <PortfolioPage />,
  path: 'portfolio',
},
{
  element: <ContactPage />,
  path: 'contact',
},
{
  element: <ResumePage />,
  path: 'resume',
},
]
}]


const router = createBrowserRouter(routes);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
