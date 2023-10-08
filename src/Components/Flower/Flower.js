import './Flower.css'
import FlowerUnique from '../FlowerUnique/FlowerUnique'



function Flower({flowers,cart,setCart}) {
    return(
        <FlowerUnique cart={cart} setCart={setCart} flowers={flowers} className={'flower'}/>
    )
}

export  default Flower