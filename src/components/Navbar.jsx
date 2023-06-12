import { Select } from '@chakra-ui/react';
import { BiSortUp } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { algorithms } from '../algorithms/constants';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react'

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
                <div>
                    <BiSortUp size="1.8em" />
                </div>

                <div style={{ display: 'flex' }}>
                    <button onClick={props.onShuffleArray}>Shuffle</button>
                    <Select value={props.selectedAlgorithm} onChange={e => props.onAlgorithmChange(e.target.value)}>
                        <option value={algorithms.BUBBLE_SORT}>Bubblesort</option>
                        <option value={algorithms.INSERTION_SORT}>Insertion Sort</option>
                        <option value={algorithms.SELECTION_SORT}>Selection Sort</option>
                        <option value={algorithms.HEAP_SORT}>Heapsort</option>
                        <option value={algorithms.MERGE_SORT}>Mergesort</option>
                        <option value={algorithms.QUICK_SORT}>Quicksort</option>
                    </Select>
                    <button>Animate</button>
                </div>

                <ul className={styles['navbar-menu-list']}>
                    <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>{!isDarkMode ? <BsFillMoonFill onClick={toggleDarkMode} /> : <BsFillSunFill onClick={toggleDarkMode} />}</li>
                    <li><FaGithubSquare size="1.8em" /></li>
                    <li><FaLinkedin size="1.8em" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar