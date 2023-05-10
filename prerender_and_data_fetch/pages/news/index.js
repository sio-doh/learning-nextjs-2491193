import Layout from "@/components/Layout";

export default function News() {
    return (
        <Layout>
            <h1>Top Stories</h1>
        </Layout>
    )
}

const API_KEY = "797DFASD7FASTR4EWADF43WEAD";
export async function getStaticProps() {
    // value of 'props' key will be passed to 'home' component
    return {
        props: {},
    }
}