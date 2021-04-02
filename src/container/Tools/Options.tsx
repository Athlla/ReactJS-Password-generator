import { FormEvent } from 'react';
import Input from '../../components/Input/Input';

interface optionsProps {
  options: optionsInterface;
  setOptions: Function;
  length: number;
  setLength: Function;
}

interface optionsInterface {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
}

const Options = ({ options, setOptions, length, setLength }: optionsProps) => {
  const optionsHandler = (index: number) => {
    setOptions((prevOptions: optionsInterface) => {
      switch (index) {
        case 0:
          return { ...prevOptions, uppercase: !prevOptions.uppercase };
        case 1:
          return { ...prevOptions, number: !prevOptions.number };
        case 2:
          return { ...prevOptions, lowercase: !prevOptions.lowercase };
        case 3:
          return { ...prevOptions, symbol: !prevOptions.symbol };
        default:
          return prevOptions;
      }
    });
  };

  const setLengthHandler = (e: FormEvent) => {
    let element = e.target as HTMLInputElement;
    setLength(+element.value);
  };

  return (
    <div className="flex flex-row mt-10">
      <section className="flex-1 p-2">
        <p>Character types</p>
        <div className="flex flex-wrap">
          <Input
            type="checkbox"
            id="uppercase"
            text="A-Z (uppercase)"
            checked={options.uppercase}
            onchange={() => optionsHandler(0)}
          />
          <Input
            type="checkbox"
            id="numbers"
            text="0-9"
            checked={options.number}
            onchange={() => optionsHandler(1)}
          />
          <Input
            type="checkbox"
            id="lowercase"
            text="a-z (lowercase)"
            checked={options.lowercase}
            onchange={() => optionsHandler(2)}
          />
          <Input
            type="checkbox"
            id="symbols"
            text="!@#$%^..."
            checked={options.symbol}
            onchange={() => optionsHandler(3)}
          />
        </div>
      </section>
      <section className="flex-1 p-2=">
        <p>Password Length</p>
        <div className="mt-8 flex">
          <input
            type="range"
            id="volume"
            name="volume"
            min="6"
            max="50"
            value={length}
            onChange={setLengthHandler}
            className="w-11/12 h-0.5 bg-gray-400 appearance-none focus:outline-none"
          />
          <p className="-mt-3 ml-3">{length}</p>
        </div>
      </section>
    </div>
  );
};

export default Options;
