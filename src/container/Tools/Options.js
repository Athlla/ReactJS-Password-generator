import Input from '../../components/Input/Input';

const Options = (props) => {
  return (
    <div className="flex flex-row mt-10">
      <section className="flex-1 p-2">
        <p>Character types</p>
        <div className="flex flex-wrap">
          <Input type="checkbox" id="uppercase" label="A-Z (uppercase)" />
          <Input type="checkbox" id="numbers" label="0-9" />
          <Input type="checkbox" id="lowercase" label="a-z (lowercase)" />
          <Input type="checkbox" id="symbols" label="!@#$%^..." />
        </div>
      </section>
      <section className="flex-1 p-2">
        <p>Password Length</p>
        <div className="mt-8">
          <input
            type="range"
            id="volume"
            name="volume"
            min="6"
            max="50"
            className="w-11/12 h-0.5 bg-gray-400 appearance-none focus:outline-none"
          />
        </div>
      </section>
    </div>
  );
};

export default Options;
