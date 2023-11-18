import React from 'react';
import {useForm} from "react-hook-form";
import './form.scss';
import {Fetch} from "../../services/fetch.ts";
const Form: React.FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()

    const sendData = (data: any) => {
        Fetch.push(data)
        reset()
    }

    const inputs: {reg: any, placeholder: string, error: any}[] = [
        {
            reg: register('name', {required: "Введите название продукта"}),
            placeholder: "Введите название продукта",
            error: errors?.name
        },
        {
            reg: register('price', {required: "Введите цену продукта",
                pattern: {value: /^\d+$/, message: 'Это не число!'}}),
            placeholder: "Введите цену продукта",
            error: errors?.price
        },
        {
            reg: register('category', {required: "Введите название категории продукта"}),
            placeholder: "Введите название категории продукта",
            error: errors?.category
        },
    ]

    return (
        <section className="form">
            <div className="form__container _container">
                <div className="form__body">
                    <p className="form__title">Добавь продукт</p>
                    <form className="form__form" onSubmit={handleSubmit(sendData)}>
                        {inputs.map((item, index) => (
                            <div key={index+456} className="form__input">
                                <input  type="text" {...item.reg}  placeholder={item.placeholder}/>
                                {item.error && item.error?.message}
                            </div>
                        ))}
                        <button className="form__submit">Добавить</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;