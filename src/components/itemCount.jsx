import { useState } from "react"


export const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0)

    const sumCount = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }

    const resCount = () => {
        if (count > 0) {
            setCount(count-1)
        }
    }

    return(
        <div className="col-4">
            <div className="input-group mb-1">
                <button className="btn btn-outline-secondary" type="button" onClick={resCount} >-</button>
                <div className=" form-control">{count}</div>
                <button className="btn btn-outline-secondary" type="button" onClick={sumCount} >+</button>
            </div>
            <button className="btn btn-success" onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    )
}