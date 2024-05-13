import './Inputgeneric.css'

export const InputGeneric = ({legend,type,name,handleChange}) => {
  return (
    <>
        <fieldset className='fieldset-input'>
            <legend className='legend-input'>{legend}</legend>
            <input type={type} name={name} onChange={handleChange} className='input-generic'/>
        </fieldset>
    </>
  )
}
