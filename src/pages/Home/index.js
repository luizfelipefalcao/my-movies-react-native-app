import React from 'react';
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
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

export default function Home() {
  return (
    <Container>
      <Header title='React Prime' />
      <SearchContainer>
        <Input
          placeholder='Ex. The Avengers'
          placeholderTextColor='#ddd'
        />
        <SearchButton>
          <Feather name='search' size={30} color='#FFF' />
        </SearchButton>
      </SearchContainer>
      <ScrollView showsHorizontalScrollIndicator={false} >

        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => { alert('okk') }}>
          <Banner
            resizeMethod='resize'
            source={{ uri: 'https://images.unsplash.com/photo-1602461601079-fb03b7b35e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <SliderItem />}
        />

      </ScrollView>
    </Container>
  );
}