import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { algorithms } from './algorithms/constants';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils/array';

const INIITAL_ARRAY_LENGTH = 100;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INIITAL_ARRAY_LENGTH))
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms.BUBBLE_SORT)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, [])

  const shuffleArrayHandler = () => {
    setNumbers((numbers) => createRandomArrayBySize(numbers.length))
  }

  const arraySizeChangedHandler = (newSize) => {
    setNumbers(createRandomArrayBySize(newSize))
  }

  const algorithmChangedHandler = (algorithm) => {
    setSelectedAlgorithm(algorithm)
  }

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsDarkMode(darkmode => !darkmode)
  }

  return (
    <div className={styles['main-layout']}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onShuffleArray={shuffleArrayHandler} selectedAlgorithm={selectedAlgorithm} onAlgorithmChange={algorithmChangedHandler} />
      <Visualizer numbers={numbers} onArraySizeChange={arraySizeChangedHandler} selectedAlgorithm={selectedAlgorithm}/>
    </div>
  )
}

export default App
