import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton } from "./styles";
import { instance } from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

export default function Repositorio() {
  const [repositorio, setRepositorio] = useState();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = useParams();
  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        instance.get(`/repos/${nomeRepo}`),
        instance.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);
      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    load();
  }, [params.repositorio]);
  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }
  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>
    </Container>
  );
}
