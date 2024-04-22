import { Card } from "../../components/card/Card"

export const Instalaciones = ()=> {
    const itemsCard =  [
        {
            title:'Recinto Indoor',
            span: 'Disfruta del pádel con cualquier clima en cualquier época.'
        },
        {
            title:'Pistas de Calidad',
            span: 'Máxima calidad para los jugadores más exigentes.'
        },
        {
            title:'Climatización',
            span: 'Nuestro recinto se encuentra 100% climatizado.'
        },
        {
            title:'Iluminación Led',
            span: 'Garantizamos una excelente visibilidad y comodidad.'
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
                   <Card className='card' key={index} title={item.title} span={item.span}/>
                ))
            }
            </div>
        </main>

    </div>
</main>
)

} 