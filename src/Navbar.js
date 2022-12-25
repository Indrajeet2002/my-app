import './index.css';
import {AiFillHome} from 'react-icons/ai';
import {IoLogIn} from 'react-icons/io5';
import {HiInformationCircle} from 'react-icons/hi2';

const Navbar = () => {
    return (
        <div className='top-0 w-screen max-w-full bg-black h-[5vh] flex'>
            <div className='left-0 w-1/2 bg-zinc-800 flex justify-start items-center'>
                <h1 className='text-3xl text-white ml-5'>Name of App</h1>
            </div>
            <div className='right-0 w-1/2 bg-zinc-800 flex justify-end items-center'>
                <HiInformationCircle className='navbar-button'/>
                <IoLogIn className='navbar-button'/>
                <AiFillHome className='navbar-button'/>
            </div>
        </div>
    );
}

export default Navbar;