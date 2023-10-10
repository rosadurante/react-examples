const React = require('react');

const Navigation = require('../components/Navigation');
const ToDoListBlock = require('../components/ToDoListBlock');

const ToDoListPage = function () {
    return (
        <div>
            <Navigation />

            <h1>List Page</h1>
            <p>
                Create a todo list here: 
            </p>

            <ToDoListBlock />
        </div>
    );
}

module.exports = ToDoListPage;