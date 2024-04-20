// Products.js

const getFruits = async () => {
    const fruits = [
        { id: 1, name: 'Apple', price: 1.00, image: require( '../assets/apples.png' )},
        { id: 2, name: 'Banana', price: 2.00, image: require( '../assets/banana.png' ) },
        { id: 3, name: 'Lettuce', price: 0.50, image: require( '../assets/lettuce.png' ) },

    ];
    return fruits;  // Make sure to return the fruits array
};

const getMeat = async () => {
    const meat = [
        { id: 4, name: 'Meat', price: 10.00, image: require( '../assets/meat.png' )},
        { id: 5, name: 'Chicken', price: 7.50, image: require( '../assets/chicken.png' ) },
        { id: 6, name: 'Fish', price: 9.00, image: require( '../assets/fish.png' ) },

    ];
    return meat;  // Make sure to return the fruits array
};

export default {
    getFruits,
    getMeat
};
