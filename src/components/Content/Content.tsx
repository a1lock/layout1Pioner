import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Offices from './components/Offices';
import News from './components/News';

const Content = () => {
    return (
        <main className=''>
            <Hero />
            <About />
            <Product />
            <Offices />
            <News />
        </main>
    );
};

export default Content