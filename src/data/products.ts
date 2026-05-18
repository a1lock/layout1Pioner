import type { IProduct } from '../types/product';

import productImg1 from '../assets/product1.svg';
import productImg2 from '../assets/product2.svg';
import productImg3 from '../assets/product3.svg';
import productImg4 from '../assets/product4.svg';
import productImg5 from '../assets/product5.svg';
import productImg6 from '../assets/product6.svg';

export const productsData: IProduct[] = [
    {
        id: 1,
        title: "Сигнализатор уровня",
        image: productImg1,
    },
    {
        id: 2,
        title: "Датчики давления",
        image: productImg2,
    },
    {
        id: 3,
        title: "ПИД-регуляторы",
        image: productImg3,
    },
    {
        id: 4,
        title: "Калибратор давления",
        image: productImg4,
    },
    {
        id: 5,
        title: "Корректор расхода газа",
        image: productImg5
    },
    {
        id: 6,
        title: "Манометры",
        image: productImg6,
    },
];