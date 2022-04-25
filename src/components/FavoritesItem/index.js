import React from 'react'
import { Container, RateContainer, Rate, Title, ActionContainer, DetailButton, DeleteButton } from './styles'

import { Ionicons, Feather } from '@expo/vector-icons'

function FavoritesItem({ data }) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>
            <RateContainer>
                <Ionicons name='md-star' size={12} color='#E7A74e' />
                <Rate>{data.vote_average} / 10</Rate>
            </RateContainer>
            <ActionContainer>
                <DetailButton>
                    <Title size={14}>Details</Title>
                </DetailButton>
                <DeleteButton>
                    <Feather name='trash' size={24} color='#FFF' />
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
}

export default FavoritesItem;