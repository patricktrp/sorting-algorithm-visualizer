import { BsBoxArrowInRight } from 'react-icons/bs';
import styles from './AlgorithmInfo.module.css';
import { Ordering } from '../utils/array';

const ALGORITHM_INFO = {
    bubbleSort: {
        "name": "Bubblesort",
        "description": "Bubblesort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order until the entire list is sorted.",
        "complexity": {
            "worst_case": { time: "O(n²)", ordering: Ordering.REVERSE },
            "avg_case": { time: "O(n²)", ordering: Ordering.RANDOM },
            "best_case": { time: "O(n)", ordering: Ordering.IN_ORDER }
        }
    },
    insertionSort: {
        "name": "Insertion Sort",
        "description": "Insertion sort is a sorting algorithm that iteratively builds the final sorted array by inserting each element into its correct position within a partially sorted array.",
        "complexity": {
            "worst_case": { time: "O(n²)", ordering: Ordering.REVERSE },
            "avg_case": { time: "O(n²)", ordering: Ordering.RANDOM },
            "best_case": { time: "O(n)", ordering: Ordering.IN_ORDER }
        }
    },
    selectionSort: {
        "name": "Selection Sort",
        "description": "Selection sort is a sorting algorithm that repeatedly finds the minimum element from the unsorted portion of the array and swaps it with the first unsorted element until the entire array is sorted.",
        "complexity": {
            "worst_case": { time: "O(n²)", ordering: Ordering.REVERSE },
            "avg_case": { time: "O(n²)", ordering: Ordering.RANDOM },
            "best_case": { time: "O(n²)", ordering: Ordering.IN_ORDER }
        }
    },
    quickSort: {
        "name": "Quicksort",
        "description": "Quicksort is a divide-and-conquer sorting algorithm that recursively partitions the array based on a chosen pivot, sorting the elements smaller than the pivot to its left and the elements larger than the pivot to its right.",
        "complexity": {
            "worst_case": { time: "O(n²)", ordering: Ordering.REVERSE },   // IMPORTANT TODO: for quicksort the cases really depend on the pivot selection => implement the algorithm first
            "avg_case": { time: "O(n log n)", ordering: Ordering.RANDOM }, // IMPORTANT TODO: for quicksort the cases really depend on the pivot selection => implement the algorithm first
            "best_case": { time: "O(n log n)", ordering: Ordering.IN_ORDER } // IMPORTANT TODO: for quicksort the cases really depend on the pivot selection => implement the algorithm first
        }
    },
    mergeSort: {
        "name": "Mergesort",
        "description": "Mergesort is a divide-and-conquer sorting algorithm that recursively divides the array into smaller subarrays, sorts them individually, and then merges them back together to produce a sorted array.",
        "complexity": {
            "worst_case": { time: "O(n log n)", ordering: Ordering.REVERSE },
            "avg_case": { time: "O(n log n)", ordering: Ordering.RANDOM },
            "best_case": { time: "O(n log n)", ordering: Ordering.IN_ORDER }
        }
    },
    heapSort: {
        "name": "Heapsort",
        "description": "Heapsort is a sorting algorithm that uses a binary heap data structure to repeatedly extract the maximum element, placing it at the end of the array, until the entire array is sorted.",
        "complexity": {
            "worst_case": { time: "O(n log n)", ordering: Ordering.REVERSE },
            "avg_case": { time: "O(n log n)", ordering: Ordering.RANDOM },
            "best_case": { time: "O(n log n)", ordering: Ordering.IN_ORDER }
        }
    },
}

const AlgorithmInfo = (props) => {
    const algorithm = ALGORITHM_INFO[props.selectedAlgorithm];
    const { best_case, avg_case, worst_case } = algorithm['complexity']

    return (
        <div className={styles['algorithm-info']}>
            <div className={styles['info-card']}>
                <h3 style={{ marginTop: 0 }}>{algorithm.name}</h3>
                <div>{algorithm.description}</div>
            </div>
            <div className={styles['info-card']}>
                <div style={{ marginBottom: '10px' }}>Time Complexity</div>
                <div className={styles['performance-info']}>
                    <div>Best Case: {best_case.time}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} onClick={() => props.isAnimating ? null : props.applyCaseOrdering(best_case.ordering)} />
                </div>
                <div className={styles['performance-info']}>
                    <div>Avg. Case: {avg_case.time}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} onClick={() => props.isAnimating ? null : props.applyCaseOrdering(avg_case.ordering)} />
                </div>
                <div className={styles['performance-info']}>
                    <div>Worst Case: {worst_case.time}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} onClick={() => props.isAnimating ? null : props.applyCaseOrdering(worst_case.ordering)} />
                </div>
            </div>
            <div className={styles['info-card']}>
                <div>Array Size</div>
                <input disabled={props.isAnimating} type="range" min="10" max="200" onChange={e => props.onArraySizeChange(e.target.value)} value={props.arraySize} />
            </div>
            <div className={styles['info-card']}>
                <div>Animation Speed</div>
                <input disabled={props.isAnimating} type="range" min="10" max="300" onChange={e => props.onAnimationSpeedChange(e.target.value)} value={props.animationSpeed} />
            </div>
        </div>
    )
}

export default AlgorithmInfo