import { LocationSVG, TelephoneSVG, MailSVG } from '../../icons/icons'
import './Footer.css'

function Footer() {
    return(
        <footer>
            <span className='footerItem'>
                <LocationSVG/>
                Yerevan,Armenia
            </span>
            <span className='footerItem'>
                <TelephoneSVG/>
                011- 111 111 
            </span>
            <span  className='footerItem'>
                <MailSVG/>
                roseflowers@gmail.com
            </span>
        </footer>
    )
}

export default Footer