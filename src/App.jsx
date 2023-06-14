import { useState } from 'react';
import { Algorithms } from './algorithms/constants';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize, swap } from './utils/array';
import { Ordering } from './utils/array';
import { getAnimations, AnimationTypes } from './animations';

const INIITAL_ARRAY_LENGTH = 100;
const INITIAL_ANIMATION_SPEED = 200;

function App() {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INIITAL_ARRAY_LENGTH));
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(Algorithms.BUBBLE_SORT);
  const [barColors, setBarColors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(INITIAL_ANIMATION_SPEED);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

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

  const applyCaseOrdering = (ordering) => {
    switch (ordering) {
      case Ordering.IN_ORDER:
        sortNumbers();
        break;
      case Ordering.REVERSE:
        sortNumbersReverse();
        break;
      case Ordering.RANDOM:
        shuffleArrayHandler();
        break;
      default:
        break;
    }
  }

  const animationSpeedChangedHandler = (speed) => {
    setAnimationSpeed(speed);
  }

  const animationHandler = () => {
    setIsAnimating(true);
    setSwaps(0);
    setComparisons(0);
    const speed = 310 - animationSpeed;
    const animations = getAnimations(selectedAlgorithm, [...numbers]);

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      switch (animation.type) {

        case AnimationTypes.SWAP:
          setTimeout(() => {
            const [i, j] = animation.indexes;
            setSwaps((swaps) => swaps + 1);
            setNumbers((oldNumbers) => {
              return swap([...oldNumbers], i, j);
            })
          }, i * speed);
          break;

        case AnimationTypes.COLOR:
          setTimeout(() => {
            if (animation.isComparison) {
              setComparisons(comparisons => comparisons + 1);
            }
            const coloring = animation.coloring;
            setBarColors(oldBarColors => {
              const newBarColors = { ...oldBarColors };
              for (let i = 0; i < coloring.length; i++) {
                newBarColors[coloring[i].index] = coloring[i].color
              }
              return newBarColors;
            })
          }, i * speed)
          break;

        case AnimationTypes.COLOR_RESET:
          setTimeout(() => {
            setBarColors({})
          }, i * speed);
          break;

        case AnimationTypes.COLOR_RESET_BY_INDEXES:
          setTimeout(() => {
            const indexes = animation.indexes;
            setBarColors(oldBarColors => {
              const newBarColors = { ...oldBarColors };
              for (const index of indexes) {
                delete newBarColors[index];
              }
              return newBarColors;
            })
          }, i * speed)
          break;

        default:
          break;
      }
    }

    setTimeout(() => {
      setIsAnimating(false);
      setBarColors({})
    }, (animations.length * speed) + 200)

  }

  return (
    <>
      <Navbar
        onShuffleArray={shuffleArrayHandler}
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={algorithmChangedHandler}
        onAnimate={animationHandler}
        isAnimating={isAnimating}
      />
      <Visualizer
        numbers={numbers}
        isAnimating={isAnimating}
        onArraySizeChange={arraySizeChangedHandler}
        onAnimationSpeedChange={animationSpeedChangedHandler}
        animationSpeed={animationSpeed}
        selectedAlgorithm={selectedAlgorithm}
        applyCaseOrdering={applyCaseOrdering}
        barColors={barColors}
        swaps={swaps}
        comparisons={comparisons}
      />
    </>
  )
}

export default App
