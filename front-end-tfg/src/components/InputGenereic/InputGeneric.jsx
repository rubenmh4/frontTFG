
export const InputGeneric = ({legend,type,name,handleChange}) => {
  return (
    <>
        <fieldset>
            <legend>{legend}</legend>
            <input type={type} name={name} onChange={handleChange}/>
        </fieldset>
    </>
  )
}
