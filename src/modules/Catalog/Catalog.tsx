import React, {useEffect, useState} from 'react';
import Filter from "../../components/Filter/Filter.tsx";
import List from "../../components/List/List.tsx";
import './catalog.scss';
const Catalog: React.FC = () => {

    const [isBurger, setIsBurger] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 900) setIsBurger(true)
    }, []);

    return (
        <div className="catalog">
            <div className="catalog__container _container">
                <div className="catalog__body">
                    {isBurger && <div className="catalog__burger" onClick={() => setIsActive(!isActive)}>
                        <span className={isActive? "catalog__burger-item active":"catalog__burger-item"}></span><span className={isActive? "catalog__burger-item active":"catalog__burger-item"}></span><span className={isActive? "catalog__burger-item active":"catalog__burger-item"}></span><span className={isActive? "catalog__burger-item active":"catalog__burger-item"}></span>
                    </div>}
                    <Filter isActive={isActive}/>
                    <List/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;