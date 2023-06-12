import { BsBoxArrowInRight } from 'react-icons/bs';
import styles from './AlgorithmInfo.module.css';

const COMPLEXITIES = {
    bubbleSort: {
        "worst_case": "O(n²)", // sorted reverse
        "avg_case": "O(n²)", // random
        "best_case": "O(n)" // sorted
    },
    insertionSort: {
        "worst_case": "O(n²)", // sorted reverse
        "avg_case": "O(n²)", // random
        "best_case": "O(n)" // sorted
    },
    selectionSort: {
        "worst_case": "O(n²)", // sorted reverse
        "avg_case": "O(n²)", // random 
        "best_case": "O(n²)" // sorted
    },
    // IMPORTANT TODO: for quicksort the cases really depend on the pivot selection => implement the algorithm first
    quickSort: {
        "worst_case": "O(n²)",
        "avg_case": "O(n log n)",
        "best_case": "O(n log n)"
    },
    mergeSort: {
        "worst_case": "O(n log n)", // sorted reverse
        "avg_case": "O(n log n)", // random
        "best_case": "O(n log n)" // sorted
    },
    heapSort: {
        "worst_case": "O(n log n)", // sorted reverse
        "avg_case": "O(n log n)", // random
        "best_case": "O(n log n)" // sorted
    },
}

const AlgorithmInfo = (props) => {
    const { best_case, avg_case, worst_case } = COMPLEXITIES[props.selectedAlgorithm];

    return (
        <div className={styles['algorithm-info']}>
            <div className={styles['info-card']}>
                <div style={{ marginBottom: '10px' }}>Time Complexity</div>
                <div className={styles['performance-info']}>
                    <div>Best Case: {best_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} />
                </div>
                <div className={styles['performance-info']}>
                    <div>Avg. Case: {avg_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} />
                </div>
                <div className={styles['performance-info']}>
                    <div>Worst Case: {worst_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} />
                </div>
            </div>
            <div className={styles['info-card']}>
                <div>Array Size</div>
                <input type="range" min="10" max="180" onChange={e => props.onArraySizeChange(e.target.value)} value={props.arraySize} />
            </div>
            <div className={styles['info-card']}>
                <div>Sorting Speed</div>
                <input type="range" min="10" max="180" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}

export default AlgorithmInfo