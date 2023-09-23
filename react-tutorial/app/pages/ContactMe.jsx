const React = require('react');
const Link = require('react-router-dom').Link;

const MainPage = require('./MainPage');
const Navigation = require('../components/Navigation');

const ContactMe = function () {
    return (
        <div>
            <Navigation />

            <h1>Contact Me!</h1>
            <p>
                To contact me you can send an email to <a href="mailto:me@rosadurante.com">me@rosadurante.com</a> and I'll get back to you as soon as possible
            </p>

            <p>Speak soon!</p>
        </div>
    );
}

// const ContactMe = function () {
//     return (
//         <div>
//             <h1>Contact Me!</h1>
//             <p>To contact me you can send an email to <a href="mailto:me@rosadurante.com">me@rosadurante.com</a> and I'll get back to you as soon as possible</p>
//             <p>Speak soon!</p>
//             <Link to="/" component={MainPage}>Go Home</Link>
//         </div>
//     );
// }

module.exports = ContactMe;