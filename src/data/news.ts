import type { MyNews } from "../types/new";

import newsImg1 from '../assets/newsImg1.svg';
import newsImg2 from '../assets/newsImg1.svg';
import newsImg3 from '../assets/newsImg1.svg';

export const NewsData: MyNews[] = [
    {
        id: 1,
        title: "НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления…",
        image: newsImg1,
        date: "20.07.2020",
    },
    {
        id: 2,
        title: "Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!",
        image: newsImg2,
        date: "18.07.2020",
    },
    {
        id: 3,
        title: "Перенос сроков проведения запланированных работ в 2020 году",
        image: newsImg3,
        date: "20.06.2020",
    },
]