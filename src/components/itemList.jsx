import { Item } from "./item"

export const ItemList = ({ products }) => 
    products.map(pr =>  <Item key={pr.id} pr={pr} />)
