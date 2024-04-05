import { useEffect, useRef } from "react"

const Button = () =>{

    const buttonRef = useRef()
   

    // useEffect(() =>{
    //     console.log(buttonRef)
    //     const boton = buttonRef.current

    //     const handleClick = () => console.log('hice click')

    //     boton.addEventListener('click', handleClick)
    
    //     return() =>{
    //         boton.removeEventListener('click', handleClick)
    //     }
    
    
    // },[])

    console.log(buttonRef)
    return(
        <button ref={buttonRef} onClick={()=>console.log('hice click')}>boton</button>
    )
}

export default Button