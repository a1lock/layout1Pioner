import Card from './components/Card'
import { productsData } from '../../../../data/products';

const Product = () => {
    return (
        <section className="">
            <h1 className='text-[48px] font-[700]'>Продукция</h1>
            <div className='grid grid-cols-3 gap-x-[20px] gap-y-[25px] mt-[32px]'>
                {productsData.map((item) => (
                    <Card key={item.id} product={item} />
                ))}
            </div>
        </section>
    );
};

export default Product;