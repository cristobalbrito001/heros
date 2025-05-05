import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui';
import { DCPages, MarvelPages,Hero,Search } from '../pages';
const HeroesRoutes = () => {
    return(
        <>
            <Navbar/>
            <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPages />} />
                <Route path="DC" element={<DCPages />} />
                <Route path="Hero/:id" element={<Hero />} />
                <Route path="search" element={<Search />} />
               
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
            </div>
        </>
    )
}

export{
    HeroesRoutes
}