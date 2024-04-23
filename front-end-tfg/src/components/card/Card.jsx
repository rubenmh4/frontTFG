import './Card.css'

export const Card =  ({title,span, children})=> {


    return(
        <main>
            <div className="icono">
               {
               children
               }
            </div>
            <div className="text">
                <h4>{title}</h4>
                <span>{span}</span>
            </div>
        </main>
    )
}