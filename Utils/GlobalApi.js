import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const getImageUrl = async (imagePath) => {
    const storageRef = ref(storage, imagePath);
    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error('Error fetching image URL:', error);
        return null; 
    }
};

const getSliders = async () => {
    const imagePaths = [
        'supermarket-special-offers.jpg', 
        'salmon.jpeg'
    ];
    const urls = await Promise.all(imagePaths.map(getImageUrl));
    return urls.map(url => ({ image: { url } })).filter(item => item.image.url != null);
};


const getCategories = async () => {
    const categories = [
        { name: 'Fruits and Vegetables', imagePath: 'FruitesandVeg.jpg', navTarget: 'fruits' },
        { name: 'Meat/Chicken/Fish', imagePath: 'meat.jpg', navTarget: 'meat' },
        { name: 'Cleaning Tools', imagePath: 'housecleaning.jpg', navTarget: 'tools' },
        { name: 'Chocolate & Snacks', imagePath: 'chocolate.jpg', navTarget: 'chocolate' },
        { name: 'Electronics', imagePath: 'electronics.jpg', navTarget: 'electronics' },
        { name: 'Canned Food', imagePath: 'canned.webp', navTarget: 'canned' },
        { name: 'Drinks', imagePath: 'drinks.png', navTarget: 'drinks' },
        { name: 'Pets Food', imagePath: 'pets.webp', navTarget: 'pets' },



    ];
    const categoryData = await Promise.all(categories.map(async category => {
        const url = await getImageUrl(category.imagePath);
        return url ? { name: category.name, icon: { url }, navTarget: category.navTarget } : null;
    }));
    return categoryData.filter(item => item !== null);
};


export default {
    getSliders,
    getCategories
};
