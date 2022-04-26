import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'tailwind-styled-map';



const Box = styled('div');
const Link = styled('button');
const Span = styled('span');
const Svg = styled('svg');



export default function BaseLayout({ ...props }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box sx="w-full h-full wrapper">
        <Box sx="fixed bottom-0 flex justify-center w-full transition-shadow bg-white border md:px-10 hover:shadow-xl">
          <Box sx="px-3 cursor-pointer md:px-6 hover:bg-gray-100">
            <Link sx="flex flex-col py-2 text-gray-700 md:w-20 items-center">
              <Box sx="flex justify-center w-full">
                <Svg sx="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </Svg>
              </Box>
              <Span sx="text-xs font-semibold tracking-wide text-center capitalize anti-xsaliased text md:text-sm sm:subpixel-antialiased">Recents</Span>
            </Link>
          </Box>

          <Box sx="px-3 cursor-pointer md:px-6 hover:bg-blue-100">
            <Link sx="flex flex-col py-2 text-blue-500 md:w-20 active items-center">
              <Box sx="flex justify-center w-full">
                <Svg sx="inline-block w-5 h-5 text-center md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </Svg>
              </Box>
              <Span sx="text-xs font-semibold tracking-wide text-center capitalize anti-xsaliased text md:text-sm sm:subpixel-antialiased">chats</Span>
            </Link>
          </Box>

          <Box sx="px-3 cursor-pointer md:px-6 hover:bg-gray-100">
            <Link sx="flex flex-col py-2 text-gray-700 md:w-20 items-center">
              <Box sx="flex justify-center w-full">
                <Svg sx="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </Svg>
              </Box>
              <Span sx="text-xs font-semibold tracking-wide text-center capitalize anti-xsaliased text md:text-sm sm:subpixel-antialiased">Contact us</Span>
            </Link>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
