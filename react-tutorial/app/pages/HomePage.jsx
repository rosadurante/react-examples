const React = require('react');

const Navigation = require('../components/Navigation');
const TextImageBlock = require('../components/TextImageBlock');

const HomePage = function () {

    const blockTexts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat velit nunc, a euismod nisi eleifend eu. In auctor, massa dictum efficitur sodales, mi lorem maximus turpis, nec lacinia massa justo vitae ex. ",
        "Nulla facilisi. Mauris blandit dolor mi, ac dignissim massa venenatis at. Vivamus tempus, odio ac hendrerit dictum, ante dolor sodales ex, ac suscipit mi libero sit amet est.",
        "Ut in aliquam sapien. Integer nec commodo dolor. Vivamus vitae faucibus lectus. Nam id placerat quam. Nulla consectetur, eros id posuere dignissim, justo urna elementum tortor, et venenatis odio enim eu quam."
    ];

    const blockImages = [{
        src: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
        alt: "Sunshine",
        width: 300
    }, {
        src: "https://images.freeimages.com/images/large-previews/4ca/maldives-unseen-beauty-1641934.jpg",
        alt: "Maldives",
        width: 400
    }, {
        src: "https://images.freeimages.com/images/large-previews/155/red-starfish-1162380.jpg",
        alt: "red starfish",
        width: 500
    }];

    return (

        <div>
            <Navigation />

            <h1>Home Page</h1>

            <TextImageBlock text={blockTexts[0]} image={blockImages[0]}></TextImageBlock>
            <TextImageBlock text={blockTexts[1]} image={blockImages[1]}></TextImageBlock>
            <TextImageBlock text={blockTexts[2]} image={blockImages[2]}></TextImageBlock>
            
        </div>
    );
}


module.exports = HomePage;