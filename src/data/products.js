import product1 from '../assets/product-image-1.jpg';
import product2 from '../assets/product-image-2.jpg';
import product3 from '../assets/product-image-3.jpg';
import product4 from '../assets/product-image-4.jpg';

const products = [
    {
        id: '1',
        image: product1 ,
        category: 'Expert Instruction',
        rating: '4.9',
        title: 'Every Client Matters',
        description: 'We focus on ergonomics and meeting you...',
        sales: '15',
        price: '$16.48',
        discountedPrice: '$6.48'
    },
    {
        id: '2',
        image: product2 ,
        category: 'Books Library',
        rating: '4.6',
        title: 'Affordable Packages',
        description: 'We focus on ergonomics and meeting you...',
        sales: '12',
        price: '$15.00',
        discountedPrice: '$4.48'
    },
    {
        id: '3',
        image: product3,
        category: 'Lifetime Access',
        rating: '5.0',
        title: 'Watch our Courses',
        description: 'We focus on ergonomics and meeting you...',
        sales: '20',
        price: '$21.99',
        discountedPrice: '$10.65'
    },
    {
        id: '4',
        image: product4 ,
        category: 'Books Library',
        rating: '4.7',
        title: 'User Experience',
        description: 'We focus on ergonomics and meeting you...',
        sales: '11',
        price: '$14.98',
        discountedPrice: '$9.72'
    },
];

export default products;