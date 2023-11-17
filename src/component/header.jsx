import './App.scss'
import {Link} from "react-router-dom"
function Header (){
    return (
        <>
        <div className="container">
            <nav>
                <ul>
                    <li><Link className='Link' to="/">Pokemone</Link></li>
                    <li><Link className='Link' to="/Pokemone">Home</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}
export default Header;