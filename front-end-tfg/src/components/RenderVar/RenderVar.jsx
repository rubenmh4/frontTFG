import './RenderVar.css'

export const RenderVar = ({render,setRender,firstElement,secondElement}) => {
    
    return (
    <div className="instalaciones-container-list" >
        <ul className="instalaciones-list"> 
          <li className={render ? 'active' : ''}
            onClick={() => {
              setRender(true);
            }}
          >
            {firstElement}
          </li>
          <li className={render === false ? 'active' : ''}
            onClick={() => {
              setRender(false);
            }}
          >
           {secondElement}
          </li>
        </ul>
      </div>
  )
}
