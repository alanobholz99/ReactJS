import { useState } from "react"


export const Test = ({mensaje}) => {
  
    const [numero, setNumero] = useState (0)
    return (
        <div>
            <button onClick={() => setNumero (numero + 1)}>botton</button>
            <p>{numero}</p>
            <p>{mensaje}</p>
        </div>
    )
}
export default Test

