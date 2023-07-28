import { ItemCount } from "./itemCount"
import { useItem } from "../hooks/useItem"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const ItemDetail = () => {
    const { items } = useItem()
    const { addItem } = useContext(CartContext)

    const onAdd = quantity => addItem(items, quantity)

    return(
        <section className="detail-container">
            {items !== undefined ? (
                    <div className="detail">
                        <img className="detail-img" src={items.image} alt="" />
                        <div className="text-detail">
                            <ul>
                                <li className="title list-group-item list-group-item-dark" >{items.name}</li>
                                <li className="list-group-item list-group-item-light" >Precio:  ${items.price}</li>
                                <li className="list-group-item list-group-item-dark" >Stock: {items.stock}</li>
                            </ul>
                            <ItemCount stock={items.stock} onAdd={onAdd}/>
                        </div>
                    </div>
            ) : (
                <div className="loader-container">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
            }
        </section>
    )
}