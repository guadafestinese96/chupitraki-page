import logoWp from '../../assets/whatsappLogo.png'
import logoIg from '../../assets/instagramLogo.png'
import logoMap from '../../assets/map.png'
import './Footer.css'

export default function Footer(){
    return(
        <div className="footerContainer">
            <a href="https://api.whatsapp.com/send/?phone=1150057994&text&type=phone_number&app_absent=0" target="_blank"><img src={logoWp} alt="logoWp" className='logosFooter'/></a>

            <a href='https://www.instagram.com/distribuidora_chupitraki/' target='_blank'><img src={logoIg} alt="logoIg" className='logosFooter'/></a>

            <a href='https://www.google.com/maps/place/Molina+Ciudad/@-34.639592,-58.3716869,17z/data=!3m1!4b1!4m6!3m5!1s0x95a334b3769ee71b:0x411eb49c905570f!8m2!3d-34.6395964!4d-58.369112!16s%2Fg%2F11clsddnnf?entry=ttu' target='_blank'><img src={logoMap} alt="logoMap" className='logosFooter'/></a>
            
            
        </div>
    )
}