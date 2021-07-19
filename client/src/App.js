import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar/index2";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      {/* <Navbar2 /> */}
    </Container>
  );
}

const Container = styled.section`
  border: 3px dashed blue;
`;

export default App;
