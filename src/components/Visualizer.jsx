import AlgorithmInfo from './AlgorithmInfo'
import Bar from './Bar'
import RuntimeInfo from './RuntimeInfo'
import styles from './Visualizer.module.css'

const Visualizer = (props) => {
    const arraySize = props.numbers.length; 
    
    return (
        <main className={styles['visualizer-container']}>
            <AlgorithmInfo onArraySizeChange={props.onArraySizeChange} arraySize={arraySize} selectedAlgorithm={props.selectedAlgorithm}/>
            <div className={styles['visualizer']}>
                {props.numbers.map((num, idx) => <Bar key={num} value={num} length={arraySize}/>)}
            </div>
            <RuntimeInfo />
        </main>
    )
}

export default Visualizer