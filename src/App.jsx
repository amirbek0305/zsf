import React, { useState } from "react";
import TicketForm from "./components/TicketForm";
import Ticket from "./components/Ticket";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  body {
    margin: 0;
    font-family: 'Space Mono', monospace;
    background: radial-gradient(circle at top left, #0f0c29, #302b63, #24243e);
    min-height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const [ticketData, setTicketData] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Container>
        <TicketForm setTicketData={setTicketData} />
        {ticketData && <Ticket data={ticketData} />}
      </Container>
    </>
  );
}
