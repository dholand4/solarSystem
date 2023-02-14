import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';


export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const WrapperQuestion = styled.View`
  flex-shrink: 1;
`;

export const ContentText = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 17.5px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.white};
`;

export const ContentIconAccordion = styled(Animated.View)``;

export const ContentIconService = styled.View`
  margin-right: 15px;
`;

