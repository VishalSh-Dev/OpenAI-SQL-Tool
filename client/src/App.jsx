import styles from "./index.module.css";
import sqlLogo from "./assets/sql.png";
import { useState } from "react";

function App() {
  const [query, setquery] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  }
  return (
    <main className={styles.body}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3 className={styles.h3}>Generate SQL with AI</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
          className={styles.input}
          onChange={(e)=> setquery(e.target.value)}
        />
        <input type="submit" value="Generate query" className={styles.button} />
      </form>
    </main>
  );
}

export default App;
