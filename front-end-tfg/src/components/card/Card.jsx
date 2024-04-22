import { IoPersonCircle } from "react-icons/io5";
import './Card.css'

export const Card =  ({title,span})=> {


    return(
        <main>
            <div className="icono">
                <IoPersonCircle/>
            </div>
            <div className="text">
                <h4>{title}</h4>
                <span>{span}</span>
            </div>
        </main>
    )
}