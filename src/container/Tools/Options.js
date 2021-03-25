import Input from '../../components/Input/Input';

const Options = (props) => {
  const optionsHandler = (index) => {
    props.setOptions((prevOptions) => {
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

  return (
    <div className="flex flex-row mt-10">
      <section className="flex-1 p-2">
        <p>Character types</p>
        <div className="flex flex-wrap">
          <Input
            type="checkbox"
            id="uppercase"
            label="A-Z (uppercase)"
            checked={props.options.uppercase}
            onchange={() => optionsHandler(0)}
          />
          <Input
            type="checkbox"
            id="numbers"
            label="0-9"
            checked={props.options.number}
            onchange={() => optionsHandler(1)}
          />
          <Input
            type="checkbox"
            id="lowercase"
            label="a-z (lowercase)"
            checked={props.options.lowercase}
            onchange={() => optionsHandler(2)}
          />
          <Input
            type="checkbox"
            id="symbols"
            label="!@#$%^..."
            checked={props.options.symbol}
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
            value={props.length}
            onChange={props.setLength}
            className="w-11/12 h-0.5 bg-gray-400 appearance-none focus:outline-none"
          />
          <p className="-mt-3 ml-3">{props.length}</p>
        </div>
      </section>
    </div>
  );
};

export default Options;
