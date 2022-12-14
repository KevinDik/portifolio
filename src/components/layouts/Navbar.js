import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'
import person from "../../img/person.jpeg";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img className={styles.img} src={person} alt="Minha foto"/>
            <h1>Full Stack Developer</h1>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">About Me</Link></li>
                <li className={styles.item}><Link to="/projects">Projects</Link></li>
                <li className={styles.item}><Link to="/contacts">Contact</Link></li>
            </ul>    
        </nav>
    )
}