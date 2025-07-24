import React from "react";
import styled from "styled-components";

const TicketContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin-top: 40px;

  img {
    max-width: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export default function Ticket({ data }) {
  return (
    <TicketContainer>
      <Heading>🎟️ Your Ticket</Heading>
      {data.avatar && (
        <img src={data.avatar.preview} alt="User uploaded avatar" />
      )}
      <p>
        <strong>Name:</strong> {data.fullName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>GitHub:</strong> {data.github}
      </p>
    </TicketContainer>
  );
}

