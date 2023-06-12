import { BsBoxArrowInRight } from 'react-icons/bs';
import styles from './AlgorithmInfo.module.css';

const COMPLEXITIES = {
    bubbleSort: {
        "worst_case": "O(n²)",
        "avg_case": "O(n²)",
        "best_case": "O(n)"
    },
    insertionSort: {
        "worst_case": "O(n²)",
        "avg_case": "O(n²)",
        "best_case": "O(n)"
    },
    selectionSort: {
        "worst_case": "O(n²)",
        "avg_case": "O(n²)",
        "best_case": "O(n²)"
    },
    quickSort: {
        "worst_case": "O(n²)",
        "avg_case": "O(n log n)",
        "best_case": "O(n log n)"
    },
    mergeSort: {
        "worst_case": "O(n log n)",
        "avg_case": "O(n log n)",
        "best_case": "O(n log n)"
    },
    heapSort: {
        "worst_case": "O(n log n)",
        "avg_case": "O(n log n)",
        "best_case": "O(n log n)"
    },
}

const AlgorithmInfo = (props) => {
    return (
        <div className={styles['algorithm-info']}>
            <div className={styles['info-card']}>
                <div style={{marginBottom: '10px'}}>Time Complexity</div>
                <div className={styles['performance-info']}>
                    <div>Best Case: {COMPLEXITIES[props.selectedAlgorithm].best_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']} onClick={props.onSortArray}/>
                </div>
                <div className={styles['performance-info']}>
                    <div>Avg. Case: {COMPLEXITIES[props.selectedAlgorithm].avg_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']}/>
                </div>
                <div className={styles['performance-info']}>
                    <div>Worst Case: {COMPLEXITIES[props.selectedAlgorithm].worst_case}</div>
                    <BsBoxArrowInRight size="1.2rem" className={styles['icon']}/>
                </div>
            </div>
            <div className={styles['info-card']}>
                <div>Array Size</div>
                <input type="range" min="10" max="180" onChange={e => props.onArraySizeChange(e.target.value)} value={props.arraySize}/>
            </div>
            <div className={styles['info-card']}>
                <div>Sorting Speed</div>
                <input type="range" min="10" max="180" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}

export default AlgorithmInfo