import { getFirestore, getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useItem = () => {

    const [items, setItems] = useState()

    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()
        
        const targetDoc = doc(db, "products", `${id}`)

        getDoc(targetDoc).then((snapshot) => {
            setItems({ id: snapshot.id, ...snapshot.data() });
        })

    },[id])  


    return{ items }
}