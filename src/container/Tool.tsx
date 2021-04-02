import { useState, useEffect } from 'react';
import Options from './Tools/Options';
import Panel from './Tools/Panel';
import { generatePass } from './Tools/generate';

const Tool = () => {
  const [password, setPassword] = useState<string>();
  const [passLength, setPassLength] = useState<number>(10);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    number: true,
    symbol: true,
  });

  useEffect(() => {
    setPassword(generatePass(options, passLength));
  }, [options, passLength]);

  const generateHandler = () => {
    setPassword(generatePass(options, passLength));
  };

  return (
    <div className="mx-auto w-7/12 mt-20">
      <Panel value={password!} onclick={generateHandler} />
      <Options
        length={passLength}
        setLength={setPassLength}
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
};

export default Tool;
