import { useProduct } from "../hooks/useProduct"
import { ItemList } from "./itemList"

export const ItemListContainer = () => {
    const { products } = useProduct()

    return(
        <section className="product-container">
            {products.length === 0 ? (
                <div className="loader-container">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
            : (
                <ItemList products={ products } />
            )
            }
        </section>
    )
}