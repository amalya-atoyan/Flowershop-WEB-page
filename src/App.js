import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import ShopPage from './Components/ShopPage/ShopPage';
import HomeWrapper from './pages/HomeWrapper';
import ErrorWrapper from './pages/ErrorWrapper'
import Ad from './Components/Ad/Ad';
import IMAGES from './images';
import { useEffect, useState } from 'react';
import ShopWrapper from './pages/ShopWrapper';
import FlowerUnique from './Components/FlowerUnique/FlowerUnique';


function App() {
    const [flowers, setFlowers] = useState([
    {
      id: '1',
      src: IMAGES.flower1,
      title: 'Peony and Lilac',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 20000,
    },
    {
      id: '2',
      src: IMAGES.flower2,
      title: 'Rose Bouquet',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 15000,
    },
    {
      id: '3',
      src:IMAGES.flower3,
      title: 'Lilac',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 20000,
    },
    {
      id: '4',
      src: IMAGES.flower4,
      title: 'Purple Tulips',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 15000,
    },
    {
      id: '5',
      src: IMAGES.flower5,
      title: 'Rose and White Tulips Bouquet',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 20000,
    },
    {
      id: '6',
      src: IMAGES.flower6,
      title: 'Daisies',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price: 15000,
    },
    {
        id: '7',
        src: IMAGES.flower7,
        title: 'Pink Roses',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20000,
    },
    {
        id: '8',
        src: IMAGES.flower8,
        title: 'White Tulips',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 15000,
    },
    {
        id: '9',
        src: IMAGES.flower9,
        title: 'Frezia Bouquet',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20000,
    },
    {
        id: '10',
        src: IMAGES.flower10,
        title: 'Pink Piones',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 15000,
    },
    {
        id: '11',
        src: IMAGES.flower11,
        title: 'Gipsophila',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 20000,
    },
    {
        id: '12',
        src: IMAGES.flower12,
        title: 'Pink Roses Bouquet',
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 15000,
    },
  ]
)
    const [cart,setCart] = useState([])
    const [txt,setTxt] = useState('')
    const [showAd,setAd] = useState(false)

   
    useEffect(()=>{
      setTimeout(() =>{
        setAd(true)
      },3000)
    },[])

  return (  
    <div className="App">
     <Routes>
      <Route path='/' element={<HomeWrapper cart={cart}/>}>
          <Route index element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='shop' element={<ShopWrapper  {...{txt,setTxt}}/>}>
              <Route index element={<ShopPage flowers={flowers} {...{txt,setTxt}}/>} />
          </Route>
          <Route path='shop'>
              <Route path=':id' element={<FlowerUnique cart={cart}  setCart={setCart}  flowers={flowers}/>}/>
          </Route>
          <Route path='contact' element={<ContactPage/>}/>
      </Route>
          <Route path='*' element={<ErrorWrapper/>}/>
     </Routes>
     {
      showAd && 
      <Ad closeModal={() =>  setAd(false)}/>
      }
    </div>
  );
}


export default App;

