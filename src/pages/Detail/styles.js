import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: #191a30;
`;

export const Header = styled.View`
    z-index: 99;
    top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25, 26, 48, 0.8);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: #E72F49;
    width: 64px;
    height: 64px;
    border-radius: 35px;
    position: absolute;
    top: 350px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 8px;
`;

export const ContentArea = styled.View`
    top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
`;

export const Rate = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const ListGenres = styled.FlatList`
    top: 15px;
    padding-left: 14px;
    margin: 8px 3px;
    margin-bottom: 30px;
    max-height: 35px;
    min-height: 35px;
`;

export const Description = styled.Text`
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 20px;
    font-size: 15px;
    color: #FFF;
    line-height: 20px;
`;
