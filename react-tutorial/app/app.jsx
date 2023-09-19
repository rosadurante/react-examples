// react
const React = require('react');
const { createRoot } = require('react-dom/client');

// router
const { Route, Link } = require('react-router-dom');
const { createBrowserRouter, createRoutesFromElements, RouterProvider } = require('react-router-dom');


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

// Defines navigation
function Navigation () {
    return (
        <nav><ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/main-page">MainPage</Link></li>
            <li><Link to='/contact-me'>ContactMe</Link></li>
        </ul></nav>
    )
}

// Defines main page
function MainPage () {
    return (

        <div>
            <Navigation />
            <hr />

            <h1>Main Page</h1>
            <p>
                If you want to contact me, <Link to="/contact-me">click Here!</Link>
            </p>

            <p>Speak soon!</p>
        </div>
    );
}

// Defines Contact me page
function ContactMe () {
    return (
        <div>
            <Navigation />
            <hr />

            <h1>Contact Me!</h1>
            <p>
                To contact me you can send an email to <a href="mailto:me@rosadurante.com">me@rosadurante.com</a> and I'll get back to you as soon as possible
            </p>

            <p>Speak soon!</p>
        </div>
    );
}