import { GetStaticProps } from 'next';
import Head from 'next/head';
import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './index.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

const Home = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | dev.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Fala dev!</span>
          <h1>Novidades <br /> do mundo da <span>programação</span>.</h1>
          <p>
            Tenha acesso à todas publicações <br />
            <span>por {product.amount}/mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl reading" />
      </main>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IYZtiAxnm0v01tWYC4cYKgA');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}