export const ItemDetail = ({ items }) => {
    return(
        <section className="detail-container">
            <div className="detail">
                <img className="detail-img" src={items.image} alt="" />
                <div className="text-detail">
                    <ul>
                        <li className="title list-group-item list-group-item-dark" >{items.title}</li>
                        <li className="list-group-item list-group-item-light" >Precio:  ${items.price}</li>
                        <li className="list-group-item list-group-item-dark" >{items.description}</li>
                    </ul>
                    <button className="btn-comprar btn btn-outline-success">comprar</button>
                </div>
            </div>
        </section>
    )
}