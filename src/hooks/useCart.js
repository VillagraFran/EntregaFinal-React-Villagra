import{ useEffect, useState } from "react";

export const useCart = () => {
    const [addedProd, setAddedProd] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        if (addedProd.length !== 0) {
            setTotal(addedProd.reduce((ac, el) => ac + (el.price * el.quantity), 0))
        } else {
            setTotal(0)
        }
    }, [addedProd])

    const addItem = (items, quantity) => {
        const repeat = addedProd.some( pr => pr.id === items.id )

        if (!repeat && quantity !== 0) {
            setAddedProd(prev => [
                ...prev, {...items, quantity: quantity},
            ])
        } else {
            const modifyProd = addedProd.map(
                (pr) => {
                    if (pr.id === items.id && pr.quantity + quantity < items.stock) {
                        return{
                            ...pr,
                            quantity: pr.quantity + quantity,
                        }
                    } else if(pr.id === items.id && pr.quantity + quantity > items.stock) {
                        return{
                            ...pr,
                            quantity: pr.stock,
                        }
                    } else {
                        return pr
                    }
                }
            )
            setAddedProd(modifyProd)
        }
    }

    const deleteItem = (id) => {
        const modifyProd = addedProd.filter((pr) => pr.id !== id)
        setAddedProd(modifyProd)
    }

    const clear = () => {
        setAddedProd([])
    }

    return{ clear, deleteItem, addItem, addedProd, total }
}