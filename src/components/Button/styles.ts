import styled from 'styled-components/native';


interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 50%;
  height: 45px;
  background: ${({ theme, color }) => color || theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: -30px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 17px;
  font-weight: 400;
  line-height: 19px;
  color: ${({ theme, colorText }) => colorText || theme.colors.background};
`;
