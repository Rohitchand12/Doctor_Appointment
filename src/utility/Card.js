import React from "react";

const cardStyle = `
    border-2
    border-gray-300
    h-[100%]
    p-3
    md:h-auto
    rounded-md 
    mt-10 
    flex 
    basis-full
    md:basis-[48%]
    lg:basis-[31%]
    items-center
    md:mr-2
    justify-center
    transition 
    delay-100
    ease 
    hover:shadow-xl
`;

const Card = (props) => {
  return <div className={cardStyle}>{props.children}</div>;
};

export default Card;
