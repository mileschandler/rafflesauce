import React from "react";
import Home from "./components/Home";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
};

export default App;
