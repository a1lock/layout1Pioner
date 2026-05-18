import logoSvg from '../../assets/logo.svg';
import teleSvg from '../../assets/Vector.svg'

const Head = () => {   
    return (
        <header className="flex flex-col mt-[32px]">
            <div className="flex flex-row justify-between mb-[32px]">             {/* первый флекс эл */}
                <img src={logoSvg} alt="ЛОГО" />
                
                <div className="flex flex-row justify-end text-right gap-[20px]">
                    <div className='w-[280px] h-[45px] flex flex-col'>
                        <p className='text-[14px]'>По вопросам и предложениям</p>
                        <a href="" className='underline text-[#607CE6] text-[20px]'>pionerrr@sila.ru</a>
                    </div>
                    <div className='w-[180px] h-[45px] flex flex-col'>
                        <p className='text-[14px]'>Для консультаций</p>
                        <a href="" className='text-[#607CE6] text-[20px]'>+7 (495) 456-24-21</a>
                    </div>
                </div>
            </div>

            <hr />                                      {/* Линия из дизайна */}

            <nav className="flex flex-row mt-[17px] justify-between text-[16px] whitespace-nowrap">   {/* Второй флекс эл */}
                <ul className='flex gap-[44px]'>
                    <li>Главная</li>
                    <li>О предпреятии</li>
                    <li>Новости</li>
                    <li>Продукция</li>
                    <li>Услуги</li>
                    <li>Поддержка</li>
                    <li>География поставок</li>
                    <li>Контакты</li>
                </ul>

                <ul className='flex flex-row text-[#607CE6]'>
                    <li><img src={teleSvg} alt="" /></li>
                    <li><a href="#">ПЕРЕЗВОНИТЕ МНЕ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Head