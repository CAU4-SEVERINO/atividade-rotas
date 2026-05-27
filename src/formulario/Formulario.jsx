import { useState } from "react";
import styles from "./Formulario.module.css";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    alert("Enviado com sucesso!");

    setNome("");
    setEmail("");
    setObservacoes("");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Envie sua opinião sobre o site
      </h2>

      <form
        className={styles.formulario}
        onSubmit={enviarFormulario}
      >

        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Observações</label>
        <textarea
          placeholder="Fale sobre o site..."
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          required
        />

        <button type="submit">
          Enviar
        </button>

      </form>
    </div>
  );
}

export default Formulario;