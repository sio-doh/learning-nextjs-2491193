import Link from "next/link";
import Layout from "@/components/Layout";
import contacts from "../api/contacts";

export default function Contacts() {
    return (
        <Layout>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link href={`../contacts/${contact.id}`}>
                            <span>
                                <a>{contact.name}</a>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}