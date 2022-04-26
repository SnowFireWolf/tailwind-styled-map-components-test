import React, { useRef, useEffect } from 'react'
import logo from '@/assets/logo.svg'


import styled from '@emotion/styled';
// import TestButton from '@/components/system/TestButton';


// const Container = styled('div', [
//   'mt-5',
//   'flex',
// ]);


const Box = styled.div``;



const Container = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const Typography = styled('div')`
  padding-top: 2rem;
  font-size: 2.375rem;
  text-align: center;
  font-weight: bold;
`;

const Button = styled.button`
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  margin-top: 1.25rem;
  display: flex;
  color: rgb(255 255 255);
  padding: 0.75rem;
  background-color: rgb(129 140 248);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1.25rem;

  &:active {
    background-color: rgb(55 48 163);
  }
`;

const Alert = styled(Box)`
  padding: 1rem;
  color: #ffffff;
  background-color: rgb(59 130 246);
`;

const Image = styled('img')`
  width: 25%;
  margin-left: auto;
  margin-right: auto;
`;

const GreenCard = styled.div`
  margin-top: 2.5rem;
  max-width: 24rem;
  display: flex;
  border-radius: 0.75rem;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  background-color: rgb(52 235 155);

  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;



export default function HomePage() {
  const [count, setCount] = React.useState<number>(0)
  const [showContet, setShowContent] = React.useState<boolean>(false);

  const handleToggle = () => {
    setShowContent(!showContet);
  }

  return (
    <Container>
      <Typography>
        @emotion/styled Test
      </Typography>

      <Button onClick={() => handleToggle()}>
        Toggle
      </Button>

      {
        showContet && <Alert>測試內容</Alert>
      }

      <Image src={logo} alt="logo" />

      <p>The Tailwind Styled Map Test!</p>

      <GreenCard>Test Background Color Card</GreenCard>

      <Box>
        <Button
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </Button>
      </Box>
    </Container >
  )
}
