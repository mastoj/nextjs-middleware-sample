import React from "react";

type Props = {
  params: {
    user: string;
  };
};

export const generateStaticParams = () => {
  return [];
};

const page = (props: Props) => {
  return <div>Hello {props.params.user}</div>;
};

export default page;
