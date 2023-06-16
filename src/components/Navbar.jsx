import { useEffect, useState } from 'react';
import { BiSortUp } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Algorithms } from '../algorithms/constants';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
    }, [])

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setIsDarkMode(darkmode => !darkmode)
    }

    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar-layout']}>
                <div className={styles['icon']}>
                    <a href="https://treppmann.dev" target='_blank' rel='noreferrer'> 
                        <BiSortUp size="1.8em" />
                    </a>
                </div>

                <div className={styles['middle-control']}>
                    <button className={styles['btn']} disabled={props.isAnimating} onClick={props.onShuffleArray}>Shuffle</button>
                    <select className={styles['select']} disabled={props.isAnimating} value={props.selectedAlgorithm} onChange={e => props.onAlgorithmChange(e.target.value)}>
                        <option value={Algorithms.BUBBLE_SORT}>Bubblesort</option>
                        <option value={Algorithms.INSERTION_SORT}>Insertion Sort</option>
                        <option value={Algorithms.SELECTION_SORT}>Selection Sort</option>
                        <option value={Algorithms.HEAP_SORT}>Heapsort</option>
                        <option value={Algorithms.MERGE_SORT}>Mergesort</option>
                        <option value={Algorithms.QUICK_SORT}>Quicksort</option>
                    </select>
                    <button className={styles['btn']} disabled={props.isAnimating} onClick={props.onAnimate}>Animate</button>
                </div>

                <ul className={styles['navbar-menu-list']}>
                    <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>{!isDarkMode ? <BsFillMoonFill onClick={toggleDarkMode} /> : <BsFillSunFill onClick={toggleDarkMode} />}</li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp/sorting-algorithm-visualizer"><FaGithubSquare size="1.8em" /></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-treppmann/"><FaLinkedin size="1.8em" /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar