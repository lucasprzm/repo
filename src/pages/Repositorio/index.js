import { useParams } from "react-router-dom";

export default function Repositorio() {
  let params = useParams();
  return (
    <div>
      <h1 style={{ color: "#fff" }}>{decodeURIComponent(params.repositorio)}</h1>
    </div>
  );
}
