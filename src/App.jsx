import { useState } from 'react';
import { algorithms } from './algorithms/constants';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils/array';

const INIITAL_ARRAY_LENGTH = 100;

function App() {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INIITAL_ARRAY_LENGTH))
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms.BUBBLE_SORT)

  const shuffleArrayHandler = () => {
    setNumbers((numbers) => createRandomArrayBySize(numbers.length))
  }

  const arraySizeChangedHandler = (newSize) => {
    setNumbers(createRandomArrayBySize(newSize))
  }

  const algorithmChangedHandler = (algorithm) => {
    setSelectedAlgorithm(algorithm)
  }

  const sortNumbers = () => {
    setNumbers(numbers => [...numbers].sort((a, b) => a - b));
  }

  const sortNumbersReverse = () => {
    setNumbers(numbers => [...numbers].sort((a, b) => b - a));
  }

  return (
    <>
      <Navbar
        onShuffleArray={shuffleArrayHandler}
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={algorithmChangedHandler}
      />
      <Visualizer
        numbers={numbers}
        onArraySizeChange={arraySizeChangedHandler}
        selectedAlgorithm={selectedAlgorithm}
      />
    </>
  )
}

export default App
