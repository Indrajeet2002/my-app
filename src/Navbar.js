import './index.css';
import {AiFillHome} from 'react-icons/ai';
import {IoLogIn} from 'react-icons/io5';
import {HiInformationCircle} from 'react-icons/hi2';
import { Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react'; 

const Navbar = () => {
    const [active, setActive] = useState(["","",""]);
    const path = useLocation().pathname;
    useEffect(() => {
        if(path==="/")
            setActive(["","","active-button"]);
    },[])

    return (
        <nav className='fixed right-0 bg-zinc-800 flex justify-around items-center rounded-2xl w-[8%] h-[5vh] mt-5 mr-5'>
            <Link to="/">
                <HiInformationCircle className={'navbar-button ' + active.at(0)}/>
            </Link>
            <Link to="/">
                <IoLogIn className={'navbar-button ' + active.at(1)}/>
            </Link>
            <Link to="/">
                <AiFillHome className={'navbar-button ' + active.at(2)}/>
            </Link>
        </nav>
    );
}

export default Navbar;