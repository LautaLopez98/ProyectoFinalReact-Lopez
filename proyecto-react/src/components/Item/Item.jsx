import "./Item.module.css"
import estilos from "../Item/Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, title, price, img, stock }) => {
    return (
        <div className={estilos.item}>
            <header className={estilos.header}>
                <h2 className={estilos.title}>
                    {title}
                </h2>
            </header>
            <picture>
                <img className={estilos.imagen} src={img} alt={title} />
            </picture>
            <footer className={estilos.footer}>
                <Link to={`/item/${id}`} className={estilos.button}> Ver Detalle </Link>
            </footer>

        </div>
    )
}

export default Item