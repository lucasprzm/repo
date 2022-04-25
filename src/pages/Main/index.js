import React from "react";
import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";
import { useState, useCallback } from "react";
import { instance } from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        const response = await instance.get(`repos/${newRepo}`);
        const data = {
          name: response.data.full_name,
        };

        setRepositorios([...repositorios, data]);
        setNewRepo("");
      }
      submit();
    },
    [newRepo, repositorios]
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar Repositório"
          value={newRepo}
          onChange={handleInputChange}
        />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
