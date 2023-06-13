import styles from './Bar.module.css'
import { ReactPropTypes } from 'react'

const Bar = (props) => {
    const barHeight = (((props.value) / (props.length)) * 100) + 1

    const style = { height: `${barHeight}%` }

    if (props.color !== null) {
        style['backgroundColor'] = props.color;
    }

    return (
        <div className={styles['bar']} style={style}></div>
    )
}

export default Bar