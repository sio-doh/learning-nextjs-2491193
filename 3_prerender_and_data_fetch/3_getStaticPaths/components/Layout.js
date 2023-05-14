import Link from "next/link";

export default function Layout({ children }) {
    const links = [
        {
            title: "Home", 
            path: "/"
        }, 
        {
            title: "Top Stories", 
            path: "/news/top-stories"
        }, 
        {
            title: "Popular",
            path: "/news/popular"
        }
    ];
    return (
        <>
            {links.map((link, index) => {
                return <Link key={index} href={link.path}><span>{link.title}{" "}</span></Link>;
            })}
            {children}
        </>
    )
}