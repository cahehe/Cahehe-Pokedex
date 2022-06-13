import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

interface props{
    id : string;    
}

const Logo = ( prop : props) => {
    return(
        <div id = {prop.id}>
            <Link to = {'/'}>
                <img src = {logo} alt = 'Logo'/>
            </Link>
        </div>
    )    
}

export default Logo;
