export interface IForm {
    form: string
}

export interface IProduct {
    pk: number
    name: string 
    price: number
    photo: string
    about: string
    amount: number
    isHave: boolean
    created_at: string
    updated_at: string
    moneytype: string
    category: string
}

export interface ICategory {
    pk: number
    title: string
}

export interface IVolute {
    pk: number
    name: string
}
