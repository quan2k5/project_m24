export interface Product{
    id?:number,
    name:string,
    description:string,
    categoryId:string,
    price:string,
    discount:string,
    currentPrice?:string,
    delete:boolean,
    quantity:string,
    imgLink:string[],
    revenue:string,
    sell:string,
    sts:string[],
}

export interface ErrorProduct{
    name:string,
    description:string,
    categoryId:string,
    price:string,
    discount:string,
    quantity:string,
    imgLink:string,
}
