import './RenderVar.css'

export const RenderVar = ({render,setRender}) => {
    
    return (
    <div className="instalaciones-container-list" >
        <ul className="instalaciones-list"> 
          <li className={render ? 'active' : ''}
            onClick={() => {
              setRender(true);
            }}
          >
            Pistas Indoor
          </li>
          <li className={render === false ? 'active' : ''}
            onClick={() => {
              setRender(false);
            }}
          >
           Otras instalaciones
          </li>
        </ul>
      </div>
  )
}
