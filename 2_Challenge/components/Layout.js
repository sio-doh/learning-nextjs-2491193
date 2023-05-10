import Link from "next/link";
import styles from "../styles/Home.module.css";

function Menu() {
    return (
        <ul>
            <Link href="/"><span><a>Home</a></span></Link>&nbsp;&nbsp;&nbsp;
            <Link href="/contacts"><span><a>Contacts</a></span></Link>
        </ul>
    )
}

export default function Layout({ children }) {
    return (
        <div className={styles.container}> 
            <Menu />
            {children}
        </div>
    )
}