import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInput = ({target}) => {
    setInputValue(target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;
    // setCategories(prevState => [...prevState, inputValue]);
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInput}
        />
    </form>
  )
}
