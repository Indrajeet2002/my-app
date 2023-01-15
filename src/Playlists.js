import Navbar from './Navbar.js'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { createPlaylist, getPlaylists } from './firebase.js'
import { useEffect, useState } from 'react'

const Playlists = () => {
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        async function get() {
            setPlaylists(await getPlaylists())
        }
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
                    <button className='bg-white' onClick={() => createPlaylist()}>ADD</button>
                </div>
                <div className='h-[85vh] grid grid-cols-3 items-center justify-items-center grid-rows-5'>
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
            <Link to='/Search' state={{playlist: props.play}}>
                <div className='ml-[5%] w-[90%] h-[70%] bg-slate-200 rounded-xl hover:bg-slate-300 hover:rounded-3xl transition-all duration-300 flex items-center justify-center'>
                    <div className='w-1/5 p-[2%]'>
                        <img className='rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png" />
                    </div>
                    <div className='w-4/5 h-[80%] flex flex-col items-center'>
                        <h1 className='text-black font-bold text-[3vh]'>{props.play.name}</h1>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Playlists