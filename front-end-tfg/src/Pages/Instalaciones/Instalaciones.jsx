import { IoHomeOutline ,IoStarOutline,IoThermometer,IoFlashlightOutline  } from "react-icons/io5"

import { Card } from "../../components/card/Card"

export const Instalaciones = ()=> {
    const itemsCard =  [
        {
            title:'Recinto Indoor',
            span: 'Disfruta del pádel con cualquier clima en cualquier época.',
            icon: <IoHomeOutline/>
        },
        {
            title:'Pistas de Calidad',
            span: 'Máxima calidad para los jugadores más exigentes.',
            icon:<IoStarOutline/>
        },
        {
            title:'Climatización',
            span: 'Nuestro recinto se encuentra 100% climatizado.',
            icon:<IoThermometer />
        },
        {
            title:'Iluminación Led',
            span: 'Garantizamos una excelente visibilidad y comodidad.',
            icon:<IoFlashlightOutline />
        },
]


return (
    <main>
    <div>
        <header>
            <h2>Pistas Indoor</h2>
            <p>Descubre nuestras modernas pistas de pádel para una experiencia única</p>
        </header>
        <main>
            <div className="container">

           {
               itemsCard.map((item,index) => (
                   <Card className='card' key={index} title={item.title} span={item.span}>
                    {item.icon}
                   </Card>
                ))
            }
            </div>
        </main>

    </div>
</main>
)

} 