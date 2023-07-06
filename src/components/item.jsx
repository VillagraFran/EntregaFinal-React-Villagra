import { Link } from "react-router-dom"

export const Item = ({ pr }) => {
    return(
        <div className="card" key={pr.id}>
            <img src={pr.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{pr.title}</h5>
                <Link to={`/item/${pr.id}`}>
                    <button className="btn btn-primary flex-end">Detalle</button>
                </Link>
            </div>
        </div> 
    )
}