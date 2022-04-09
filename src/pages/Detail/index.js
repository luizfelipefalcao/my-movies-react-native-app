import React, { useState, useEffect } from "react";
import {
    Container,
    Header,
    HeaderButton,
    Banner
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { key } from '../../services/api';

function Detail() {

    const navigate = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        let isActive = true;

        async function getMovie() {
            const response = await api.get(`/movie/${route.params?.id}`, {
                params:{
                    api_key: key,
                    language: 'pt-BR'
                }
            })
                .catch((err) => {
                    console.log('error: ' + err);
                })

            if (isActive) {
                setMovie(response.data);
                console.log(response.data);
            }
        }

        if (isActive) {
            getMovie();
        }

        return () => {
            isActive = false
        };

    }, []);

    return (
        <Container>
            <Header>
                <HeaderButton activeOpacity={0.7} onPress={() => navigate.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                        name="bookmark"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
            </Header>
            <Banner
                resizeMethod="resize"
                source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
            />
        </Container>
    )
}

export default Detail;