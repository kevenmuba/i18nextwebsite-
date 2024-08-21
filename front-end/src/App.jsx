import './App.css';
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/bootstrap.scss'
import LanguageWrapper from './Component/LanguageWrapper';
import Home from './Component/home';
import About from './Component/about';
import { Suspense } from 'react';
import Try from './Component/try';
import i18n from './i18n/index.js';// this is very crucial 
import Blog from './Component/blog/index.jsx';

const AppContent = () => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/en" replace /> },
    {
      path: '/:lang',
      element: <LanguageWrapper />,
      children: [
        
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "try", element: <Try /> },
        { path: "blog", element: <Blog/> }
        
      ]
    },
    { path: "*", element: <Navigate to="/en" replace /> }
  ]);

  return (
    <Suspense fallback={<div>Loading Translation...</div>}> {/* Corrected fallback */}
      {routes}
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent /> {/* Added AppContent component */}
    </BrowserRouter>
  );
}

export default App;