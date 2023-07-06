import { useProducts } from "../hooks/useProducts"
import { ItemList } from "./itemList"

export const ItemListContainer = () => {
    const { prod } = useProducts()

    return(
        <section className="product-container">
            {prod.length === 0 ? (
                <div className="loader-container">
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
            : (
                <ItemList products={ prod } />
            )
            }
        </section>
    )
}