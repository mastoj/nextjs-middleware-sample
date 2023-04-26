import MainPage from "@/app/MainPage";
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
  return <MainPage name={props.params.user} />;
};

export default page;
