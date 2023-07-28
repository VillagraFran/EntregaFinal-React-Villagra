import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { BuyForm } from "./form"


export const CartWidget = () => {

    const { clear, deleteItem, addedProd, total } = useContext(CartContext)

    const erase = id => deleteItem(id)

    return(
        <section className="cart-container" >
                {addedProd.length === 0 ? (

                        <div className="cart">
                            <h5>no hay productos</h5>
                        </div>

                    ) : (
                        addedProd.map((pr) =>{
                            return(
                                <div className="card-cart" key={pr.id}>
                                    <img className="cart-img" src={pr.image} alt="" />
                                    <div className="cart-text">
                                        <h5>{pr.name}</h5>
                                        <h5>precio: ${pr.price * pr.quantity}</h5>
                                    </div>
                                    <div className="cart-text">
                                        <h5>cantidad: {pr.quantity}</h5>
                                    </div>
                                    <div className="cart-delete">
                                        <button type="button" className="btn btn-danger" onClick={() => erase(pr.id)}>X</button>
                                    </div>
                                </div>
                                )
                            }
                        )
                    )}
                    
                <div className={`${addedProd.length !== 0 ? ("cart-data") : ("none")}`}>
                    <div className="cart-tools">
                        <h5>Total: ${total}</h5>
                        <button className="btn btn-outline-secondary" onClick={() => clear()}>Vaciar</button>
                    </div>
                    <BuyForm addedProd={addedProd} total={total} clear={clear} />
                </div>
                
        </section>
    )
}

