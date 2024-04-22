// Products.js

const getFruits = async () => {
    return [
        { id: 1, category: 'Fruits', name: 'Apple', price: 1.00, image: require('../assets/apples.png'), description: "Crisp and juicy apples, perfect for a healthy snack." },
        { id: 2, category: 'Fruits', name: 'Banana', price: 2.00, image: require('../assets/banana.png'), description: "Rich in potassium and perfect for smoothies and baking." },
        { id: 3, category: 'Fruits', name: 'Lettuce', price: 0.50, image: require('../assets/lettuce.png'), description: "Fresh lettuce to add a crunchy texture to your salads." }
    ];
};

const getMeats = async () => {
    return [
        { id: 4, category: 'Meat', name: 'Meat', price: 10.00, image: require('../assets/meat.png'), description: "High-quality beef, perfect for grilling or roasting." },
        { id: 5, category: 'Meat', name: 'Chicken', price: 7.50, image: require('../assets/chicken.png'), description: "Organically raised chicken, great for any poultry dish." },
        { id: 6, category: 'Meat', name: 'Fish', price: 9.00, image: require('../assets/fish.png'), description: "Fresh fish, excellent source of Omega-3 fatty acids." }
    ];
};

const getTools = async () => {
    return [
        { id: 7, category: 'Tools', name: 'Fairy', price: 10.00, image: require('../assets/fairy.avif'), description: "Effective cleaning liquid for dishes with tough grease." },
        { id: 8, category: 'Tools', name: 'Sponge', price: 1.50, image: require('../assets/sponge.png'), description: "Durable sponges suitable for all types of cleaning tasks." },
        { id: 9, category: 'Tools', name: 'Mop', price: 6.00, image: require('../assets/mop.jpeg'), description: "Microfiber mop for efficient and easy floor cleaning." },
        { id: 10, category: 'Tools', name: 'Vacuum Cleaner', price: 50.00, image: require('../assets/vaccumcleaner.png'), description: "Powerful vacuum cleaner that keeps your home dust-free." }
    ];
};

const getSnacks = async () => {
    return [
        { id: 11, category: 'Snacks', name: 'Snickers', price: 2.00, image: require('../assets/snickers.png'), description: "Chocolate bar with caramel and nuts, a satisfying treat." },
        { id: 12, category: 'Snacks', name: 'Ice Cream', price: 8.50, image: require('../assets/icecream.jpeg'), description: "Creamy ice cream available in various flavors." },
        { id: 13, category: 'Snacks', name: 'Nuts', price: 1.00, image: require('../assets/nuts.png'), description: "Mixed nuts, a great source of energy and nutrients." },
        { id: 14, category: 'Snacks', name: 'Lays Chips', price: 1.50, image: require('../assets/lays.png'), description: "Crispy potato chips, perfect for snacking anytime." }
    ];
};

const getElectronics = async () => {
    return [
        { id: 15, category: 'Electronics', name: 'Refrigerator', price: 600.00, image: require('../assets/refrigerator.png'), description: "Cool, crisp storage for all your perishables." },
        { id: 16, category: 'Electronics', name: 'Laundry Machine', price: 300.00, image: require('../assets/laundry.jpeg'), description: "Clean and fresh laundry with every cycle." },
        { id: 17, category: 'Electronics', name: 'Television', price: 500.00, image: require('../assets/television.png'), description: "Crystal clear visuals for your viewing pleasure." },
    ];
};

const getCanned = async () => {
    return [
        { id: 15, category: 'Canned', name: 'Tuna can', price: 2.00, image: require('../assets/tuna.png'), description: "Premium, ready-to-eat tuna, perfect for quick meals and nutritious snacks." },
        { id: 16, category: 'Canned', name: 'Sweet corn', price: 3.50, image: require('../assets/corn.png'), description: "Crisp, sweet corn kernels, preserved at the peak of freshness for the perfect addition to any dish." },
        { id: 17, category: 'Canned', name: 'Cooked beans', price: 5.00, image: require('../assets/beans.png'), description: "Rich and savory cooked beans, a hearty and nutritious base for any meal." },
    ];
};

const getAllProducts = async () => {
    const fruits = await getFruits();
    const meats = await getMeats();
    const tools = await getTools();
    const snacks = await getSnacks();
    const electronics= await getElectronics();
    const canned=await getCanned();
    return [...fruits, ...meats, ...tools, ...snacks, ...electronics, ...canned];  // Combining all into one array
};

export default {
    getFruits,
    getMeats,
    getTools,
    getSnacks,
    getElectronics,
    getCanned,
    getAllProducts  
};
