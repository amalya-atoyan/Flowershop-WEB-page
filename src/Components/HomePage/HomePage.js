import IMAGES from '../../images'
import './HomePage.css'

function HomePage() {
    return(
        <section>
            <div className='flexDiv'>
                <div>
                <img src={IMAGES.homePagePhoto} alt='flowers' className='homePagePhoto'/>
                </div>
                <div>
                    <p className='productSlogan'>“Love and let flowers of peace bloom in your heart.”</p>
                </div>
            </div>
        </section>
    )
}


export default HomePage