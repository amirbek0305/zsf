import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Form = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 0 0 10px 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 20px 0;
`;

const Paragraph = styled.p`
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 20px;
`;

const DropZone = styled.div`
  border: 2px dashed #666;
  padding: 40px;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 8px;

  &:hover {
    border-color: #ff6b6b;
  }

  img {
    max-width: 100px;
    border-radius: 50%;
  }
`;

const Small = styled.small`
  display: block;
  font-size: 0.7rem;
  color: #aaa;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-family: inherit;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #ff6b6b;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff5252;
  }
`;

export default function TicketForm({ setTicketData }) {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.size < 500000) {
      setAvatar(Object.assign(file, { preview: URL.createObjectURL(file) }));
    } else {
      alert("Max file size is 500KB.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketData({
      avatar,
      fullName,
      email,
      github,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>🚀 Coding Conf</Title>
      <SubTitle>Your Journey to Coding Conf 2025 Starts Here!</SubTitle>
      <Paragraph>
        Secure your spot at next year's biggest coding conference.
      </Paragraph>

      <DropZone {...getRootProps()}>
        <input {...getInputProps()} />
        {avatar ? (
          <img src={avatar.preview} alt="User uploaded avatar" />
        ) : (
          <p>Drag and drop or click to upload</p>
        )}
      </DropZone>
      <Small>Upload your photo (JPG or PNG, max size: 500KB).</Small>

      <Input
        type="text"
        placeholder="Full Name"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="example@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="@yourusername"
        required
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <Button type="submit">Generate My Ticket</Button>
    </Form>
  );
}
