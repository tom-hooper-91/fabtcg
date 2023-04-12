import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => { 
    fetch("https://localhost:8080/api/cards")
      .then((response) => {
        // handle success
        console.log(response);
        return response.json();
      })
      .then((data) => { 
        console.log(data)
        setCards(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A personal project built in next js to brush up my skills</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}