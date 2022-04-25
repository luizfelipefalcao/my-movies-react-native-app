import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container, ListMovies } from './styles';

import { getMoviesSave, deleteMovie } from '../../utils/storage';
import FavoritesItem from '../../components/FavoritesItem';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave('@primereact');
      
      if(isActive){
        setMovies(result);
        console.log(result);
        console.log(movies);
      }
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    }

  }, []);

  async function deleteMovie(id){
    const result = await deleteMovie(id);
    setMovies(result);
  }

  return (
    <Container>
      <Header title='My List'/>
      <ListMovies
      showsVerticalIndicator={false}
      data={movies}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <FavoritesItem
        data={item}
        />
      )}

      />
    </Container>
  );
}