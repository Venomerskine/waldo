import { NavLink} from 'react-router-dom';

function Header () {
    return (
        <header className='sticky top-0 z-50 bg-slate-900 text-white shadow-md opacity-97'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
            <h1 className='text-3xl font-bold tracking-wide'>
                My App
            </h1>
            <nav className='flex items-center gap-6'>
                <NavLink 
                    to="/"
                    // className='transition-colors duration-200 hover:text-blue-400'
                    className={({isActive}) => 
                    isActive
                    ? "text-blue-400 font-semibold"
                    : "transition-colors duration-200 hover:text-blue-400"}
                >
                    Home
                </NavLink>


                <NavLink 
                    to="/leaderboard"
                    // className='transition-colors duration-200 hover:text-blue-400'
                    className={({isActive}) => 
                    isActive
                    ? "text-blue-400 font-semibold"
                    : "transition-colors duration-200 hover:text-blue-400"}
                >
                    Leaderboard
                </NavLink>

                <NavLink
                    to="/game"
                    className='rounded-md bg-blue-800 px-4 py-2 transition hover:bg-blue-700'
                    className={({isActive}) => 
                    isActive
                    ? "invisible"
                    : "rounded-md bg-blue-800 px-4 py-2 transition hover:bg-blue-700"}
                >
                    Play Game
                    
                </NavLink>
            </nav>
            </div>
        </header>
    );
}

export default Header;