import React, { useState } from "react";
import {
  Container,
  ContainerBackground,
  Background,
  SubmitButton,
  Text
} from "./styles";

export default function Main({ navigation }) {
  function navigateTo() {
    navigation.navigate("SignIn");
  }
  return (
    <>
      <Background source={require("../../assets/image.jpg")}>
        <ContainerBackground />
      </Background>
      <Container>
        <SubmitButton onPress={() => navigateTo()}>
          <Text>Continuar</Text>
        </SubmitButton>
      </Container>
    </>
  );
}
