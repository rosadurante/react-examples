// react
const React = require('react');
const { createRoot } = require('react-dom/client');

// router
const { Route, Link } = require('react-router-dom');
const { createBrowserRouter, createRoutesFromElements, RouterProvider } = require('react-router-dom');

// Components
import Navigation from './components/Navigation';

// pages
import ContactMe from './pages/ContactMe';
import MainPage from './pages/MainPage';


// Create root element from ID (DOM)
const root = createRoot(document.getElementById('app'));

// Create router of links / pages
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Navigation />}/>
            <Route path='/main-page' element={<MainPage />}/>
            <Route path='/contact-me' element={<ContactMe />} />
        </Route>
    )
);

// render components in home
root.render(
    <div>
        <h1>Hello World!</h1>

        <RouterProvider router={router}/>

        <hr />

    </div>
);
