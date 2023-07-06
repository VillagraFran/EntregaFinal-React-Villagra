import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const useItems = () => {

    const products = fetch("https://fakestoreapi.com/products")
                .then(resp => resp.json())
                .then(data => data)

    const { id } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        const prodPromise = new Promise ((resolve, rejected) => {
            resolve(products)
        })

        prodPromise.then(result => {
                if (id) {
                    setItems(result[id-1])
                } else {
                    setItems(result)
                }
            })
    }, [id])

    return { items };
}