"use client";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const [name, setName] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  // handle click should update a cookie with the user name and reload page
  const handleClick = () => {
    document.cookie = `name=${name}`;
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleClick}
      className="flex gap-2 justify-center items-center"
    >
      <label>User name: </label>
      <input
        className="h-9 rounded p-2 bg-white text-black"
        onChange={handleChange}
        value={name}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Set user name
      </button>
    </form>
  );
};

export default Login;
