import React, {  useState } from "react"

interface paramentros{
    onNewValue: (newCategory: string) => void;
    
}

export const AddCategory = ({ onNewValue }:paramentros) => {

    const [inputValue, setInputValue ] = useState<string>('')

    // const onInputChange = ( event:React.ChangeEvent<HTMLInputElement> ) => {
    //     setInputValue(event.target.value)
    // } 

    const onSubmit = ( event:React.FormEvent)=> {
        event.preventDefault();

        const valor = inputValue.trim()
        
        if ( valor.length <=2 )  return;
        
        onNewValue( valor )
        setInputValue('')
    }

  return (
        <form  onSubmit={ onSubmit }>
            <input type="text" 
                placeholder="buscar Gifs"  
                value={ inputValue } 
                onChange={ event => setInputValue(event.target.value) }/>
            {/* //Se eviara el evento por defecto */}
        </form>

        
  )
}
