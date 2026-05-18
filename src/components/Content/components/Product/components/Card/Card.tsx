import type { IProduct } from '../../../../../../types/product';

interface CardProps {
    product: IProduct;
}

const Card = ({ product }: CardProps) => {
    return (
        <div className="grid grid-cols-1 content-between w-[380px] h-[435px] ps-[24px] py-[32px] box-border">
            <img src={product.image} alt={product.title} className=''/>
            <div className='gap-x-[12px]'>
                <h2 className='text-[28px]'>{product.title}</h2>
                <a href="#" className='text-[20px] text-[#607CE6]'>Подробнее {'>'}</a>
            </div>
        </div>
    );
};

export default Card;