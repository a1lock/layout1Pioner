import type { MyNews } from "../../../../../../types/new";

interface CardProps {
    news: MyNews;
}

const Card = ({ news }: CardProps) => {
    return (
        <div className="flex flex-col w-[380px] h-[478px]">
            <img src={news.image} alt={news.title} className=""/>
            <div className="flex flex-col flex-grow justify-between px-[16px] pt-[16px] pb-[24px]">
                <div className="text-[20px]">
                    <p>{news.title}</p>
                </div>
                <div className="flex justify-between">
                    <a href="#" className="text-[#607CE6] text-[16px]">Читать далее</a>
                    <p  className="text-[16px] text-[#888888]">{news.date}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;