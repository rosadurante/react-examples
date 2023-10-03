const React = require('react');

const Navigation = require('../components/Navigation');
const TextImageBlock = require('../components/TextImageBlock');

const HomePage = function () {
    const data = [
        {
            id: 1,
            text:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat velit nunc, a euismod nisi eleifend eu. In auctor, massa dictum efficitur sodales, mi lorem maximus turpis, nec lacinia massa justo vitae ex. ",
            image: {
                src: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
                alt: "Sunshine",
                width: 300
            }
        }, {
            id: 2,
            text: "Nulla facilisi. Mauris blandit dolor mi, ac dignissim massa venenatis at. Vivamus tempus, odio ac hendrerit dictum, ante dolor sodales ex, ac suscipit mi libero sit amet est.",
            image: {
                src: "https://images.freeimages.com/images/large-previews/4ca/maldives-unseen-beauty-1641934.jpg",
                alt: "Maldives",
                width: 400
            }
        }, {
            id: 3,
            text: "Ut in aliquam sapien. Integer nec commodo dolor. Vivamus vitae faucibus lectus. Nam id placerat quam. Nulla consectetur, eros id posuere dignissim, justo urna elementum tortor, et venenatis odio enim eu quam.",
            image: {
                src: "https://images.freeimages.com/images/large-previews/155/red-starfish-1162380.jpg",
                alt: "red starfish",
                width: 500
            }
        }
    ];

    return (

        <div>
            <Navigation />

            <h1>Home Page</h1>

            <ul>
                {data.map(block =>
                    <li key={block.id}>
                        <TextImageBlock text={block.text} image={block.image} />
                    </li>
                )}
            </ul>
            
        </div>
    );
}


module.exports = HomePage;