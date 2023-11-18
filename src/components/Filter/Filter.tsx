import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Fetch} from "../../services/fetch.ts";
import Store from "../../store/store.ts";
import './filter.scss';
const Filter: React.FC<{isActive: boolean}> = ({isActive}) => {

    const [categories, setCategories] = useState<string[]>([])

    const {
        register,
        handleSubmit,
    } = useForm()

    const submit = (data: any) => {
        const options: string[] = []
        for (let key in data) {
            if(data[key]) options.push(key)
        }
        Store.filter(options)
    }

    useEffect(() => {
        setCategories([...Fetch.getFilterParams()])
    }, []);

    return (
        <div className={isActive? "filter active":"filter"}>
            <div className="filter__body">
                <p className="filter__title">Categories</p>
                <form className="filter__form" onSubmit={handleSubmit(submit)}>
                    {categories.map((item, index) => (
                        <div key={index+8*4+'$'} className="filter__option">
                            <input {...register(item)} key={index+68} type="checkbox"  name={item}/>
                            <label htmlFor={item}>{item}</label>
                        </div>))}
                    <button type="submit" className="filter__submit">Фильтровать</button>
                </form>
            </div>
        </div>
    );
}

export default Filter;