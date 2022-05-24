import Head from 'next/head'
import { useRouter } from "next/router";

export default function Home() {
    const { query } = useRouter();
    const { id } = query

    return (
        <div>
            <Head>
                <title>assets-madseed</title>
                <meta name="description" content="Madseed assets"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <img alt="madseed-logo"
                 src={`/images/icons/${id}`}/>
        </div>
    )
}
