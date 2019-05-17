import React from 'react';
import styles from './App.module.css';
import { AppHeader } from "./components/AppHeader"
import { AppContent } from "./components/AppContent"

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <AppContent />
    </div >
  );
}

export default App;
