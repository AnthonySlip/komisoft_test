
export const database: {id: number, name: string, price: string, category: string}[] = [
    { id: 1, name: 'Product A', price: '19.99', category: 'Category 1' },
    { id: 2, name: 'Product B', price: '29.99', category: 'Category 2' },
    { id: 3, name: 'Product C', price: '39.99', category: 'Category 3' },
    { id: 4, name: 'Product D', price: '49.99', category: 'Category 1' },
    { id: 5, name: 'Product E', price: '59.99', category: 'Category 2' },
    { id: 6, name: 'Product F', price: '69.99', category: 'Category 3' },
    { id: 7, name: 'Product G', price: '79.99', category: 'Category 1' },
    { id: 8, name: 'Product H', price: '89.99', category: 'Category 2' },
    { id: 9, name: 'Product I', price: '99.99', category: 'Category 3' },
    { id: 10, name: 'Product J', price: '109.99', category: 'Category 1' },
    { id: 11, name: 'Product K', price: '119.99', category: 'Category 2' },
    { id: 12, name: 'Product L', price: '129.99', category: 'Category 3' },
    { id: 13, name: 'Product M', price: '139.99', category: 'Category 1' },
    { id: 14, name: 'Product N', price: '149.99', category: 'Category 2' },
    { id: 15, name: 'Product O', price: '159.99', category: 'Category 3' },
    { id: 16, name: 'Product P', price: '169.99', category: 'Category 1' },
    { id: 17, name: 'Product Q', price: '179.99', category: 'Category 2' },
    { id: 18, name: 'Product R', price: '189.99', category: 'Category 3' },
    { id: 19, name: 'Product S', price: '199.99', category: 'Category 1' },
    { id: 20, name: 'Product T', price: '209.99', category: 'Category 2' },
]



export class Fetch {
    public static get () {
        if (!localStorage.getItem('database')) {
            localStorage.setItem('database', JSON.stringify(database))
            return database
        } else {
            const arr: any = localStorage.getItem('database')
            return JSON.parse(arr)
        }
    }
    public static push (product: {name: string, price: string, category: string}) {
        const arr: any = localStorage.getItem('database')
        localStorage.setItem('database', JSON.stringify([...JSON.parse(arr), {
            id: arr.length + 1,
            ...product
        }]))
    }
    public static getFilterParams () {
        const categories: string[] = []
        if (localStorage.getItem('database')) {
            const arr: any = localStorage.getItem('database')
            JSON.parse(arr).forEach((item: any) => {
                if (!categories.includes(item.category)) categories.push(item.category)
            })
            return categories
        } else {
            database.forEach((item: any) => {
                if (!categories.includes(item.category)) categories.push(item.category)
            })
            return categories
        }

    }
}