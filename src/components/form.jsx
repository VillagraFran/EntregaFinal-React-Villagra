import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"
import Swal from 'sweetalert2'

export const BuyForm = ({addedProd, total, clear}) => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        phone: ""
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const addOrder = () => {
        const order = {
            buyer: form ,
            items: addedProd ,
            total: total
        }

        const db = getFirestore()
        const purchaseOrder = collection(db, "orders")

        addDoc(purchaseOrder, order).then(response => {
            if (response.id) {
                success(response.id)
                clear()
            }
        })
    }

    const success = (id) => {
        Swal.fire(
            'Compra realizada',
            `tu compra id:"${id}" ha sido realizada con exito`,
            'success'
          )
    }

    const fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'debes completar el formulario',
          })
    }

    return (
        <form className="BuyForm">
            <div className="row g-3">
                <div className="col">
                    <input value={form.name} onChange={handleChange} name="name" type="text" className="form-control" placeholder="Nombre" aria-label="First name" required />
                </div>
                <div className="col">
                    <input value={form.lastName} onChange={handleChange} name="lastName" type="text" className="form-control" placeholder="Apellido" aria-label="Last name" required />
                </div>
                <div className="col-sm-12">
                    <input value={form.phone} onChange={handleChange} name="phone" type="text" className="form-control" placeholder="Número telefónico" aria-label="Number" required />
                </div>
                <button type="button" className="btn btn-primary col-2" onClick={(click) => {
                    form.name !== "" && form.lastName !== "" && form.phone !== "" ? (
                        addOrder()
                    ) : (
                        fail()
                    )}}>
                    comprar
                </button>
            </div>
        </form>
    )
}