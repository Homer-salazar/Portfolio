import React from 'react';

const Hero = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="flex max-sm:flex-col">
                <div className="flex-1 items-center justify-center max-sm:text-center max-sm:justify-start border-2">a</div>
                <div className="flex-1 items-center justify-center border-2 text-center">b</div>
            </div>
        </div>

        </>
    )
}

export default Hero
<svg
// className={`w-12 h-12 mt-2 mr-10 max-sm:mx-5 max-sm:w-10 max-sm:h-10 cursor-pointer ${
className={`w-12 h-12 cursor-pointer ${
  isMenuOpen ? 'hidden' : ''
}`}
width="48px" height="48px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.9120000000000001"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="menu-fries"> <path id="vector" d="M3 6H21" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round"></path> <path id="vector_2" d="M9 12L21 12" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round"></path> <path id="vector_3" d="M3 18H21" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round"></path> </g> </g> </g></svg>              
{/* <svg
// className={`w-16 h-16 mr-9 max-sm:mx-3 max-sm:w-14 max-sm:h-14 cursor-pointer ${
className={`w-12 h-12  cursor-pointer ${
  isMenuOpen ? '' : 'hidden'
}`}
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
stroke="#ffffff"
>
<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
<g
  id="SVGRepo_tracerCarrier"
  strokeLinecap="round"
  strokeLinejoin="round"
></g>
<g id="SVGRepo_iconCarrier">
  <path
    d="M16 8L8 16M8 8L16 16"
    stroke="#ffffff"
    strokeWidth="2"
    strokeLinecap="round"
  ></path>
</g>
</svg> */}