import styles from "./index.module.css";
import sqlLogo from "./assets/sql.png";
import { useState } from "react";

function App() {
  const [query, setquery] = useState("");
  const [ans, setAns] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const sqlQuery = await generateQuery();
    setAns(sqlQuery);
  };
  const generateQuery = async () => {
    const result = await fetch("http://localhost:5500/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    const data = await result.json();
    return data.response.trim();
  };
  return (
    <main className={styles.body}>
      <div className={styles.heading}>
        <img src={sqlLogo} alt="" className={styles.icon} />
        <h3 className={styles.h3}>Wizard</h3>
      </div>
      <h2 className={styles.h2}>Generate SQL with AI</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query.."
          className={styles.input}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" value="Generate query" className={styles.button} />
      </form>
      <pre className={styles.pre}>{ans}</pre>
    </main>
  );
}

export default App;
