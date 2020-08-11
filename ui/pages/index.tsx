import Head from 'next/head'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
    <div>
      <Head>
        <title>Simply Splendid Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Title>This title is a styled component.</Title>
          <Button variant="contained" color="primary">This is a material-ui button</Button>
          <StyledButton>This is a styled material-ui button</StyledButton>
      </main>
    </div>
  )
}

// Just to show we can use styled components.
const Title = styled.h1`
    color: red;
`;

const StyledButton = styled(Button)`
    color: white;
    background-color: black;
`;