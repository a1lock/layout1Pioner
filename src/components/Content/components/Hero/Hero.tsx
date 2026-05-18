import heroImg from '../../../../assets/hero-image.svg'

const Hero = () => {
    return (
        <section className="flex flex-col mt-[80px] pt-[26px]">
            <div className="flex gap-x-[80px] mb-[32px]">
                <h1 className='text-[60px] font-[700]'>Российский завод <br />силовых машин</h1>
                <p className='text-[16px]'>научно-производственное предприятие, <br />
                занимающееся разработкой и производством <br />
                силовых машин.</p>
            </div>
            <img src={heroImg} alt="Фото завода" className=''/>
        </section>
    )
};

export default Hero;