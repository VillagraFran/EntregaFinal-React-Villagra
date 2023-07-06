import { Item } from "./item"

export const ItemList = ({ products }) => 
    products.map(pr =>  <Item pr={pr} />)
