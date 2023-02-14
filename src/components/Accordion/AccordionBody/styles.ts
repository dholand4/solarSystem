import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
  margin-top: 8px;
  width: 100%;
  padding: 15px;
  height: auto;
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
`;

export const Content = styled(Animated.View)`
  flex-shrink: 1;
`;
