import React, { useContext} from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
//import link
import { Link } from 'react-router-dom';
//import logo
import Logo from '../img/logo.svg';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)
  return (
    <header className='bg-pink-200'>
    <div></div>
    {/* logo */}
      <Link to={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} alt="" />
        </div>
      </Link>
      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} className="text-2xl relative max-w-[50px]">
        <BsBag className="text-2xl" />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </header>
  );
};

export default Header;
