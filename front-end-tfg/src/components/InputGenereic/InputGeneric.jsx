import './Inputgeneric.css'

export const InputGeneric = ({legend,type,name,handleChange,required}) => {
  return (
    <>
        <fieldset className='fieldset-input'>
            <legend className='legend-input'>{legend}</legend>
            <input type={type} name={name} onChange={handleChange} className='input-generic' required={required}/>
        </fieldset>
    </>
  )
}
