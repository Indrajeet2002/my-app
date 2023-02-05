import Navbar from './Navbar.js'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { createPlaylist, getPlaylists, logout } from './firebase.js'
import { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

const Playlists = () => {
    const [playlists, setPlaylists] = useState([])

    async function get() {
        setPlaylists(await getPlaylists())
    }

    useEffect(() => {
        get()
    })



    return (
        <>
            <Navbar />
            <div className='w-screen max-w-full h-[95vh] bg-gray-700 flex flex-col items-center'>
                <div className='h-[10vh]'>
                    <h1 className='text-white text-[5vh]'>Your Playlists</h1>
                </div>
                <div className='w-screen max-w-full h-[5vh] flex justify-end'>
                    <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => createPlaylist()}>ADD</button>
                </div>
                <div className='h-[85vh] grid grid-cols-3 items-center justify-items-center grid-rows-5 w-screen max-w-full'>
                    {
                        playlists.map((play) =>
                        <Playlist play = {play} />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

const Playlist = (props) => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
                <div className='ml-[5%] w-[90%] h-[70%] bg-slate-200 rounded-xl hover:bg-slate-300 hover:rounded-3xl transition-all duration-300 flex items-center justify-center'>
                    <Link className='w-full h-full' to='/Search' state={{playlist: props.play}}>
                        <div className='w-4/5 h-[80%] flex flex-col items-center justify-center'>
                            <h1 className='text-black font-bold text-[3vh]'>{props.play.name}</h1>
                        </div>
                    </Link>
                    <div className='w-1/5 p-[2%]'>
                        <button>
                            <AiFillEdit className='text-[5vh]'/>
                        </button>
                    </div>
                </div>
            
        </div>

    )
}

export default Playlists