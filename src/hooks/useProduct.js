import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useProduct = () => {

    const { id } = useParams()

    const [getProducts, setGetProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const prodCollection = collection(db, "products")
        getDocs(prodCollection).then((snapshot) => {
            setGetProducts(snapshot.docs.map((doc) => { return{id: doc.id, ...doc.data()} }))  
        })


    },[])

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (id) {
            setProducts(getProducts.filter((pr) => pr.category === id))
        } else {
            setProducts(getProducts)
        }
        
    }, [getProducts, id])


    return{products}
}