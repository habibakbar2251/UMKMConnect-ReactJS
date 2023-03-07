import '../CSS_Part/NavbarCSS.css'
import Logo from '../../assets/image/Logo.png'
import { Component } from 'react'

class Navbar extends Component {

    state = { clicked : false }

    // Click Method
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked })
    }

    render() {
        return(
            <>
                <nav>
                <img src={Logo} className='logo-official' />  
                    <ul id='navbar-list' className={this.state.clicked ? '#navbar-list active' : '#navbar-list'}>
                        <li><a className='active'>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Seller</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Login</a></li>
                    </ul>
    
                    {/* Mobile Icon */}
                    <div className='mobile' onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
    
                </nav>
            </>
        )
    }
}

export default Navbar