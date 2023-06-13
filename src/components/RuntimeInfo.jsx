import styles from './RuntimeInfo.module.css'

const RuntimeInfo = (props) => {
    return (
        <div className={styles['runtime-info']}>
            <h3>Swaps:</h3>
            <p>{props.swaps}</p>
            <h3>Comparisons:</h3>
            <p>{props.comparisons}</p>
        </div>
    )
}

export default RuntimeInfo