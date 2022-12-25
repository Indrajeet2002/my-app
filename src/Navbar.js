import './index.css';
import {AiFillHome} from 'react-icons/ai';
import {IoLogIn} from 'react-icons/io5';
import {HiInformationCircle} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='fixed right-0 bg-zinc-800 flex justify-around items-center rounded-2xl w-[8%] h-[5vh] mt-5 mr-5'>
            <Link to="/">
                <HiInformationCircle className='navbar-button'/>
            </Link>
            <Link to="/">
                <IoLogIn className='navbar-button'/>
            </Link>
            <Link to="/">
                <AiFillHome className='navbar-button'/>
            </Link>
        </nav>
    );
}

export default Navbar;