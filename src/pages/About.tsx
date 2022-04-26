import React from "react";
import styled from 'tailwind-styled-map';



const Box = styled('div');
const Typography = styled.div();



export default function AboutPage() {
  return (
    <Box sx={['container', 'mx-auto']}>
      <Typography
        sx={`
          mt-10
          text-[2rem]
          text-center
          font-bold
          text-slate-900
          dark:text-slate-200
        `}
      >
        About Page
      </Typography>
    </Box>
  );
}
