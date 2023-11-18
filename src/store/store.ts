import {makeAutoObservable} from "mobx";
import {Fetch} from "../services/fetch.ts";
import {makePersistable} from "mobx-persist-store";


class Store {

    catalog: {id: number, name: string, price: string, category: string}[] = []
    cart: number[] = []
    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Store',
            properties: ['catalog', 'cart'],
            storage: window.localStorage
        }).then(r => r)
    }

    fetch() {
        this.catalog = [...Fetch.get()]
    }
    filter(options: string[]) {
        if (options.length===0) this.catalog = [...Fetch.get()]
        else this.catalog = [...Fetch.get().filter((item: any) => {
            if (options.includes(item.category)) return item
        })]
    }
    addCart (id: number) {
        this.cart.push(id)
    }
    removeCart (id: number) {
        this.cart = [...this.cart.filter(item => item!==id)]
    }
}
export default new Store()