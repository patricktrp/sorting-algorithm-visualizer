import styles from './Bar.module.css'

const Bar = (props) => {
    const barHeight = (((props.value) / (props.length)) * 100) + 1

    return (
        <div className={styles['bar']} style={{
            height: `${barHeight}%`,
        }}>

        </div>
    )
}

export default Bar