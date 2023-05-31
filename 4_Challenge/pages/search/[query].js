import Layout from "@/components/Layout";
import { search } from "../api/index";
import List from "@/components/List";

export default function News(props) {
    return (
        <Layout>
            <List {...props} />
        </Layout>
    );
} 

const API_KEY = process.env.API_KEY;  
export async function getServerSideProps({ params }) { 
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
    const results = await search(URL); 
    return { props: { results } }
}