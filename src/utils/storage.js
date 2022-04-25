import AsyncStorage from '@react-native-async-storage/async-storage';

//Search saved movies
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

//Save a new movie
export async function saveMovie(key, newMovie) {
    let movieStored = await getMoviesSave(key);

    //If there is any saved movie with the same ID / or duplicated we do need ignore
    const hasMovie = movieStored.some(item => item.id === newMovie.id);

    if (hasMovie) {
        console.log('This movie is already in your favorite list!');
        return;
    }

    movieStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(movieStored));
    console.log('Movie saved!');
}

//Delete a movie
export async function deleteMovie(id) {
    let movieStored = await getMoviesSave('@primereact');

    let myMovies = movieStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    console.log('Movie deleted with success!');
    return myMovies;
}

//Filter a saved movie
export async function hasMovie(movie) {
    let movieStored = await getMoviesSave('@primereact');

    const hasMovie = movieStored.find(item => item.id === movie.id);

    if (hasMovie) {
        return true;
    }
    console.log(hasMovie);

    return false;
}