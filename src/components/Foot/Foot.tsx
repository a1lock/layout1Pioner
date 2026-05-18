import logoFooter from '../../assets/logoFooter.svg';

const Foot = () => {
    return (
        <footer className="w-full bg-[#333333] h-[360px] pt-[56px] pb-[24px] box-border text-[#FFFFFF] flex flex-col">
            <div className="flex flex-col flex-1 mx-auto max-w-[1180px] w-full">
                <div className="grid grid-cols-2">
                    <img src={logoFooter} alt="логоФутера" />
                    <div className='flex gap-x-[75px] justify-between text-[14px]'>
                        <ul className='space-y-[24px]'>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О предприятии</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Продукция</a></li>
                            <li><a href="#">Услуги</a></li>
                        </ul>
                        <ul className='space-y-[24px]'>
                            <li><a href="#">Поддержка</a></li>
                            <li><a href="#">География поставок</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                        <ul className='space-y-[24px]'>
                            <li><a href="#">Файлы</a></li>
                            <li><a href="#">Поддержка</a></li>
                            <li><a href="#">Политика <br />конфеденциальности</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-auto text-center'><p className='text-[14px]'>1994 — 2020 ООО «ПИОНЕР»</p></div>
            </div>
        </footer>
    );
};

export default Foot;
