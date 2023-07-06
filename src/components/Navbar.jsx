import { useProducts } from "../hooks/useProducts"
import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const { prod } = useProducts()
    
    const categories = prod.map(pr => pr.category)
    const uniqueCategory = new Set(categories)

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {[...uniqueCategory].map(item => 
                            <li key={item} className="nav-item">
                                <NavLink className="nav-link" to={`/category/${item}`}>
                                    {item}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    </div>
                </div>
                <button className="btn d-flex btn-cart">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360" alt="" />
                </button>
            </nav>
        </header>
    )
}