// react
const React = require('react');

const TextImageBlock = function ({text, image}) {

    return (
        <div>
            <p>{text}</p>
            <div>
                <img src={image.src} alt={image.alt} width={image.width} />
            </div>
        </div>
    )
}

module.exports = TextImageBlock;