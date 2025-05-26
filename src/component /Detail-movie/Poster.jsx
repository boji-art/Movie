export const Poster=({})=>{
    console.log(`https://image.tmdb.org/t/p/original/${movie?.poster}`
    );
    
    return(<div > 
        <img src={`https://image.tmdb.org/t/p/original/${movie?.poster}`}
        className="h-[148px]"/>
        </div>
    )
};