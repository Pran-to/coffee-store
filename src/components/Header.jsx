import { NavLink } from 'react-router-dom';
import logo from '../assets/images/more/logo1.png'

const Header = () => {
  return (
    <div className=" flex justify-center items-center h-16 mx-auto "
      style={{
        backgroundImage: "url('https://i.ibb.co/WH41qnZ/15.jpg')",
        backgroundSize:"cover",
       
      }}
    >
       
       <NavLink to={'/'}><img className='w-10' src={logo} alt="" /></NavLink>
       <NavLink to={'/'}><h1 className="text-white font-title text-2xl ">Coffee Store</h1></NavLink>
      
    </div>
  );
};

export default Header;
