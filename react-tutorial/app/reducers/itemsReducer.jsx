// react
const React = require('react');


const itemsReducer = function (listItems, action) {

    switch (action.type) {
        case 'added': {
            return [...listItems, {
                text: action.text,
                index: action.index,
                complete: false
            }];
        }
        case 'deleted': {
            return listItems.filter((it, index) => index !== action.index);
        }
    }
}

module.exports = itemsReducer;
