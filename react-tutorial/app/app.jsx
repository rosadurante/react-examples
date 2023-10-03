// react
const React = require('react');
const { createRoot } = require('react-dom/client');

// router
const { Route, Link } = require('react-router-dom');
const { createBrowserRouter, createRoutesFromElements, RouterProvider } = require('react-router-dom');

// pages
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import ContactMe from './pages/ContactMe';


// Create root element from ID (DOM)
const root = createRoot(document.getElementById('app'));

// Create router of links / pages
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<HomePage />}/>
            <Route path='/main-page' element={<MainPage />}/>
            <Route path='/contact-me' element={<ContactMe />} />
        </Route>
    )
);

// render components in home
root.render(
    <div>
        <header>
        <h1>Hello World!</h1>
        </header>

        <RouterProvider router={router}/>

        <hr />

        <footer>
        <div>
            <p>Rosa Durante @ 2023</p>
        </div>
        </footer>

    </div>
);
