import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
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
