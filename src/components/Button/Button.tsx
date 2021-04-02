import { MouseEventHandler } from 'react';

interface buttonProps {
  type: 'button' | 'submit' | 'reset';
  onclick: MouseEventHandler;
  text: string;
}

const Button = ({ type, onclick, text }: buttonProps) => {
  return (
    <button
      type={type}
      className="w-1/5 bg-green-500 text-white font-medium px-5 py-3 border-2 border-green-600 rounded-full ml-10"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
