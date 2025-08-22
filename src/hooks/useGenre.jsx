const useGenre = (selectedGenre) => {
    if(selectedGenre.length <1){
        return null;
    }
    const GenreIds = selectedGenre.map((genre)=>genre.id);
    return GenreIds.reduce((acc,curr)=>acc+","+curr);
}

export default useGenre;