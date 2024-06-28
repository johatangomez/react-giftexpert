import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const iValue = inputValue.trim();        
        if(iValue.length <= 1) return;
        onNewCategory( iValue );        
        setInputValue('');
    }


  return (

    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gift" 
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
