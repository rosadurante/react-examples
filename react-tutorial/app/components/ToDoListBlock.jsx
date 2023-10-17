// react
const React = require('react');

const { useReducer, useState } = require('react');

const itemsReducer = require('../reducers/itemsReducer');


function ToDoListBlock() {

    // Lista inicial
    const initialItems = [{
        text: "bake a cake", complete: false
    }, {
        text: "clean the kitchen", complete: true
    }, {
        text: "go for a walk", complete: true
    }, {
        text: "visit a friend", complete: false
    }];

    // Obtención de la lista a mutar y la función dispatch
    var [items, dispatch] = useReducer(
        itemsReducer,
        initialItems
    );

    // Manejadores de eventos "handlers"
    function handleAddItem(text) {
        dispatch({
            type: 'added',
            text: text,
        });
    };

    function handleDeleteItem(index) {
        dispatch({
            type: 'deleted',
            index: index
        });
    };

    // control del estado/valor del input text.
    const [ inputText, setText ] = useState('');

    const handlers = {
        delete: handleDeleteItem
    };

    return (
        <div>
            <p>Here's your to do list</p>

            <div className="todoList">
                <div className="addItem">
                    <input placeholder="Add item..." value={inputText} 
                    onChange={e => setText(e.target.value) } />
                    <button className="add" onClick={() => {
                        setText(''); handleAddItem(inputText);
                    } }>Add</button>
                </div>
                <ul>
                    {items.map((item, index) => <li className="item" key={index}>
                        <ItemList text={item.text} index={index} complete={item.complete} handlers={handlers}></ItemList>
                    </li>
                    )}
                </ul>
            </div>

        </div>
    );
}

const ItemList = function ({text, index, complete, handlers}) {
    /* Text string, index number, complete boolean */
    return (
        <div className={"itemlist-${index}"}>
            <input type="checkbox" defaultChecked={complete} />
            <span>{text}</span>
            <button className="delete ${index}" onClick={() => {
                handlers.delete(index);
            }}>Delete</button>
        </div>
    )
}

module.exports = ToDoListBlock;