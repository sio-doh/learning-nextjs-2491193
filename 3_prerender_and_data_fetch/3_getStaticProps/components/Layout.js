import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <Link href="/">
                <span><a>Home</a></span>
            </Link> 
            {children}
        </>
    )
}