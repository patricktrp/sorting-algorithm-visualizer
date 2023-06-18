import AlgorithmInfo from './AlgorithmInfo'
import Bar from './Bar'
import RuntimeInfo from './RuntimeInfo'
import styles from './Visualizer.module.css'

const Visualizer = (props) => {
    const arraySize = props.numbers.length;

    return (
        <main className={styles['visualizer-container']}>
            <AlgorithmInfo isAnimating={props.isAnimating} onArraySizeChange={props.onArraySizeChange} arraySize={arraySize} selectedAlgorithm={props.selectedAlgorithm} applyCaseOrdering={props.applyCaseOrdering} animationSpeed={props.animationSpeed} onAnimationSpeedChange={props.onAnimationSpeedChange} />
            <div className={styles['visualizer']}>
                {props.numbers.map((num, idx) => {
                    const color = props.barColors[idx] || null;
                    return <Bar key={Math.random()} value={num} length={arraySize} color={color} />
                })}
            </div>
            <RuntimeInfo swaps={props.swaps} comparisons={props.comparisons} />
        </main>
    )
}

export default Visualizer;