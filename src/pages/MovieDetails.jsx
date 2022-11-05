import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { useParams } from "react-router-dom"
import { getMovieInfo } from "../services/api"

import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
const BgContainer = styled.div`
    width: 100%;
    height: 200px;
    background-image:url(${({image})=>image}) ;
    background-size: cover;
`
const Title = styled.h1`
    color:white;
    margin-top:16px;
`
const Synopsis = styled.p`
    color:white;
    text-align: justify;
`
export function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams('id')

    useEffect(() => {
        const getApiData = async () => {
            setMovie(await getMovieInfo(id))
        }
        getApiData()
    }, [])
    return (
        <>
            <Div>
                {movie?.title ? (
                   <>
                     <BgContainer image={movie.images.background}/>  
                     <Title>{movie.title}</Title>
                     <Synopsis>
                        {movie.synopsis}
                     </Synopsis>
                   </> 
                ) :( 
                    <div className="loader">
                    <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#f76190" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName="loader"
                    visible={true}
                     />
                    </div>
                )}
            </Div>
        </>
    )
}