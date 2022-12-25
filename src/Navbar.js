import './index.css';
import {AiFillHome} from 'react-icons/ai';
import {IoLogIn} from 'react-icons/io5';
import {HiInformationCircle} from 'react-icons/hi2';

const Navbar = () => {
    return (
        <div className='fixed right-0 bg-zinc-800 flex justify-around items-center rounded-2xl w-[8%] h-[5vh] mt-5 mr-5'>
            <HiInformationCircle className='navbar-button'/>
            <IoLogIn className='navbar-button'/>
            <AiFillHome className='navbar-button'/>
        </div>
    );
}

export default Navbar;