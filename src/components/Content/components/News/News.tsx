import Card from "./components/Card";
import { NewsData } from "../../../../data/news";

const News = () => {
    return (
        <section className="mb-[80px]">
            <h1 className="text-[48px] font-[700]">Новости</h1>
            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[25px] mt-[32px]">
                {NewsData.map((item) => (
                    <Card key={item.id} news={item} />
                ))}
            </div>
        </section>
    );
};

export default News;