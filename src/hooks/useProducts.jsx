import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const useProducts = () => {
    const products = fetch("https://fakestoreapi.com/products")
                            .then(resp => resp.json())
                            .then(data => data)

    const { id } = useParams()

    const [prod, setProd] = useState([])

    useEffect(() => {
        const prodPromise = new Promise ((resolve, rejected) => {
            setTimeout(() => resolve(products), 2000)
        })

        prodPromise.then(result => {
                if (id) {
                    setProd(result.filter(product => product.category === id))
                } else {
                    setProd(result)
                }
            })
    }, [id])

    return { prod };
}