import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
`;
export const ContainerBackground = styled.View`
  flex: 1;
  opacity: 0.7;
  background-color: #2d004f;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1;
  background: transparent;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
`;

export const TextButton = styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 350px;
  background: #60e8b4;
  border-radius: 4px;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #03002e;
  font-size: 16px;
  font-weight: bold;
`;
