import { useItems } from "../hooks/useItems"
import { ItemDetail } from "./itemDetail"

export const ItemDetailContainer = () => {
    
    const { items } = useItems()

    return(
        <ItemDetail items={ items }/>
    )
}