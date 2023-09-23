const React = require('react');
const Link = require('react-router-dom').Link;

const ContactMe = require('./ContactMe');
const Navigation = require('../components/Navigation');

const MainPage = function () {
    return (

        <div>
            <Navigation />

            <h1>Main Page</h1>
            <p>
                If you want to contact me, <Link to="/contact-me">click Here!</Link>
            </p>

            <p>Speak soon!</p>
        </div>
    );
}

// const MainPage = function () {
//     return (
//         <div>
//             <h1>Main Page</h1>
//             <p>
//                 If you want to contact me, <Link to='/contact-me' component={ContactMe}>Click here!</Link>
//             </p>
            
//             <p>Speak soon!</p>
//         </div>
//     );
// }

module.exports = MainPage;