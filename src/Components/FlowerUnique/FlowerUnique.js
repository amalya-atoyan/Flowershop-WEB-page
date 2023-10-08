import { useParams } from 'react-router-dom';
import './FlowerUnique.css'
import { useEffect, useState } from 'react';

const FlowerUnique = (props) => {
    const { flowers, cart,setCart} = props
    const {id} = useParams()
    const [uniqueProduct,setUniqueProduct] = useState({})

    useEffect(()=>{
    setUniqueProduct({...flowers.find(el => el.id === id)})
    },[])
    
    const addToCart =()=>{
        if(cart.some(el => el.id === id)){
            setCart([
                ...cart.map((el) => {
                    if(el.id === id){
                        return{
                            ...el, 
                            count:el.count + 1,
                            price:el.price + el.price / el.count
                        }
                    }
                    return el
                })
            ])
        }else{
            setCart([
                ...cart,
                {
                    ...flowers.find((el) => el.id === id),
                    count:1
                }
            ])
        }
    }

    return (
        <section className='flowerPart'>
            <div className='imgPart'>
                <img src={uniqueProduct.src} className='flower' alt='flower'/>
            </div>
            <div className='infoFlower'>
                <h1 className='title'>{uniqueProduct?.title}</h1>
                <p className='aboutFlower'>{uniqueProduct?.body}</p>
                <h3 className='price'> Price -{uniqueProduct?.price} AMD</h3>
                <button onClick={addToCart}  className='buy'>Buy</button>
            </div>
        </section>
    );
  };
   
export default FlowerUnique;