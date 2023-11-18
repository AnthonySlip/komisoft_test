import React, {useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Store from "../../store/store.ts";
import './list.scss';

const List: React.FC = observer(() => {

    const [list, setList] = useState<{id: number, name: string, price: string, category: string}[]>([])

    useEffect(() => {
        setList([])
        setList([...Store.catalog])
    }, [Store.catalog])

    const imgLink1: string = "https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI="
    const imgLink2: string = "https://media.istockphoto.com/id/173242750/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%83%D1%87%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=u8po2-a2FX5CfAQMG9A8O5YJu3K9jQBvklgveUQphBc="

    return (
        <section className="list">
            <div className="list__body">
                <ul className="list__list">
                    {list[0]?.id && list.map((item, index) => (<li key={item.id+'s'} className="list__item">
                        <p className="list__category">{item.category}</p>
                        <img src={index%2==0? imgLink1:imgLink2} alt={"image "+item.name} className="list__img"/>
                        <p className="list__name">{item.name}</p>
                        <p className="list__price" onClick={() => Store.addCart(item.id)}>{item.price} RUB</p>
                        <svg onClick={() => Store.removeCart(item.id)} className="list__delete" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </li>))}
                </ul>
            </div>
        </section>
    )
})

export default List;