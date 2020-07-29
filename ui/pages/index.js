import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simply Splendid Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Title>A styled component.</Title>
      </main>
    </div>
  )
}

const Title = styled.h1`
    color: red;
`;
