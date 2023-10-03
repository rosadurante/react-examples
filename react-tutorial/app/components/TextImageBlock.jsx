// react
const React = require('react');

const TextImageBlock = function ({text, image}) {

    return (
        <div class="TextImageBlock">
            <p>{text}</p>
            <div class="image">
                <img src={image.src} alt={image.alt} width={image.width} />
            </div>
        </div>
    )
}

module.exports = TextImageBlock;