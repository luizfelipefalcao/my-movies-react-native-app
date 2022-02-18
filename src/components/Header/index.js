import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, MenuButton, Title } from './styles';

function Header({ title }) {

  const navigation = useNavigation();
  return (
    <Container>
      <MenuButton>
        <Feather name='menu' size={35} color='#FFF' onPress={() => navigation.openDrawer()} />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;