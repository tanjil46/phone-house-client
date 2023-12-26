import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import phoneLogo from '../img/phone-shop-logo-design-template-gadget-135331058.jpg'
const Header = () => {
    return (
        <div>
            <Navbar fluid rounded>
            <Navbar.Brand>
        <img src={phoneLogo} className="w-[70px]" alt="Phone logo" />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PHone House</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <div className="flex items-center gap-4">
        <Link >Home</Link>
        <Link to='/order'>Collections</Link>
        <button className="btn">
  My Cart
  <div className="badge badge-secondary">+00</div>
</button>
        <Link  >Contact Us</Link>

     <Link to='/login'>  <Button  gradientMonochrome="pink">Sign In</Button>
     </Link> 
        </div>
      </Navbar.Collapse>
    </Navbar> 
        </div>
    );
};

export default Header;