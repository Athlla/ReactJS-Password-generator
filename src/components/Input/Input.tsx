import { ChangeEventHandler, ReactNode } from 'react';

interface inputProps {
  type: 'text' | 'checkbox';
  text: string;
  color?: string;
  id?: string;
  checked?: boolean;
  onchange?: ChangeEventHandler;
}

const Input = ({ type, text, color, id, checked, onchange }: inputProps) => {
  let element: ReactNode;
  switch (type) {
    case 'text':
      element = (
        <>
          <input
            type="text"
            value={text}
            className={`bg-${color}-200 text-${color}-600 w-4/5 border-2 border-bold border-${color}-600 px-5 py-3 pr-12 rounded-md`}
          />
          <button className="relative right-10">
            <svg
              className={`text-${color}-600`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </>
      );
      break;
    case 'checkbox':
      element = (
        <div className="w-1/2">
          <input
            type="checkbox"
            id={id}
            className="ml-3 mr-5 my-3 h-5 w-5"
            checked={checked}
            onChange={onchange}
          />
          <label htmlFor={id}>{text}</label>
        </div>
      );
      break;
    default:
      break;
  }

  return <>{element}</>;
};

export default Input;
