// react
const React = require('react');
const Link = require('react-router-dom').Link;

const Navigation = function () {
    return (
        <nav><ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/main-page">MainPage</Link></li>
            <li><Link to="/to-do-list">ToDoList</Link></li>
            <li><Link to='/contact-me'>ContactMe</Link></li>
        </ul></nav>
    )
}

module.exports = Navigation;