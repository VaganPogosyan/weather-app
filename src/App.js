import styles from './css/App.module.css';
import Weather from './components/Weather';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1 className={styles.App}>Weather app</h1>
      <Form />
      <Weather />
    </div>
  );
}

export default App;
