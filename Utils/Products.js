// Products.js

const getFruits = async () => {
    const fruits = [
        { id: 1, name: 'Apple', price: 1.00, image: require( '../assets/apples.png' )},
        { id: 2, name: 'Banana', price: 2.00, image: require( '../assets/banana.png' ) },
        { id: 3, name: 'Lettuce', price: 0.50, image: require( '../assets/lettuce.png' ) },

    ];
    return fruits; 
};

const getMeat = async () => {
    const meat = [
        { id: 4, name: 'Meat', price: 10.00, image: require( '../assets/meat.png' )},
        { id: 5, name: 'Chicken', price: 7.50, image: require( '../assets/chicken.png' ) },
        { id: 6, name: 'Fish', price: 9.00, image: require( '../assets/fish.png' ) },

    ];
    return meat; 
};

const getTools = async () => {
    const tools = [
        { id: 7, name: 'Fairy', price: 10.00, image: require( '../assets/fairy.avif' )},
        { id: 8, name: 'Sponge', price: 1.50, image: require( '../assets/sponge.png' ) },
        { id: 9, name: 'Mop', price: 6.00, image: require( '../assets/mop.jpeg' ) },
        { id: 10, name: 'Vaccum Cleaner', price:50.00, image: require( '../assets/vaccumcleaner.png' ) },


    ];
    return tools; 
};

const getSnacks = async () => {
    const snacks = [
        { id: 11, name: 'Snickers', price: 2.00, image: require( '../assets/snickers.png' )},
        { id: 12, name: 'Ice Cream', price: 8.50, image: require( '../assets/icecream.jpeg' ) },
        { id: 13, name: 'Nuts', price: 1.00, image: require( '../assets/nuts.png' ) },
        { id: 14, name: 'Lays Chips', price:1.50, image: require( '../assets/lays.png' ) },


    ];
    return snacks; 
};

export default {
    getFruits,
    getMeat,
    getTools,
    getSnacks
};
