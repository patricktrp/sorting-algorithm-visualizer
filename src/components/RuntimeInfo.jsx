import styles from './RuntimeInfo.module.css'

const RuntimeInfo = (props) => {
    return (
        <div className={styles['runtime-info']}>
            <div className={styles['info-card']}>
                <h3>Comparisons</h3>
                <div>{props.comparisons}</div>
            </div>
            <div className={styles['info-card']}>
                <h3>Swaps</h3>
                <div>{props.swaps}</div>
            </div>
        </div>
    )
}

export default RuntimeInfo