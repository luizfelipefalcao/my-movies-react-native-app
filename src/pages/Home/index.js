import React, { useState, useEffect } from 'react';
import {
  Container,
  SearchButton,
  Input,
  SearchContainer,
  Title,
  Banner,
  BannerButton,
  SliderMovie
} from './styles';

import { Feather } from '@expo/vector-icons';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api from '../../services/api';
import { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movies';

export default function Home() {

  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [inputBusca, setInputBusca] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies() {

      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'en-US',
            page: 1
          }
        })
      ])

      if (isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(5, topData.data.results);

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
        setLoading(false);
      }
    }

    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    }

  }, []);

  function navigateDetailPage(item) {
    navigation.navigate('Detail', { id: item.id });
  }

  function hancleInputBusca() {
    if (inputBusca === '') return;
    navigation.navigate('Search', { name: inputBusca });
    setInputBusca('');
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#FFF" />
      </Container>
    )
  }

  return (
    <Container>
      <Header title='My Movies' />
      <SearchContainer>
        <Input
          placeholder='Ex. The Avengers'
          placeholderTextColor='#ddd'
          value={inputBusca}
          onChangeText={(text) => setInputBusca(text)}
        />
        <SearchButton onPress={hancleInputBusca}>
          <Feather name='search' size={30} color='#FFF' />
        </SearchButton>
      </SearchContainer>
      <ScrollView showsHorizontalScrollIndicator={false} >

        <Title>Now Playing</Title>
        <BannerButton activeOpacity={0.9} onPress={() => navigateDetailPage(bannerMovie)}>
          <Banner
            resizeMethod='resize'
            source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Popular</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Top Rated</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailPage(item)} />}
          keyExtractor={(item) => String(item.id)}
        />

      </ScrollView>
    </Container>
  );
}