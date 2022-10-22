import { useEffect, useState } from 'react'
import './MovieList.css'
import { getMovies } from '../services/api'
import { MovieCard } from './MovieCard'
import { Search } from './Search'
export function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getDataApi = async () => {
            setMovies(await getMovies())
        }
        getDataApi()
    }, [])
    return (
        <>
            <Search />
            <div className="MovieList">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </>
    )
}