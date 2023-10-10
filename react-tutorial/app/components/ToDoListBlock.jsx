// react
const React = require('react');

const ToDoListBlock = function () {

    const items = [{
        text: "bake a cake", index: 1, complete: false
    }, {
        text: "clean the kitchen", index: 2, complete: true
    }, {
        text: "go for a walk", index: 3, complete: true
    }, {
        text: "visit a friend", index: 4, complete: false
    }];

    return (
        <div>
            <p>Here's your to do list</p>

            <div className="todoList">
                <ul>
                    {items.map(item =>
                        <li className="item" key={item.index}>
                            <ItemList text={item.text} index={item.index} complete={item.complete}></ItemList>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

const ItemList = function ({text, index, complete}) {
    /* Text string, index number, complete boolean */

    return (
        <div className="itemlist-{index}">
            <input type="checkbox" checked={complete} />
            <span>{text}</span>
            <button className="buttonup">Up</button>
            <button className="buttondown">Down</button>
        </div>
    )
}

module.exports = ToDoListBlock;