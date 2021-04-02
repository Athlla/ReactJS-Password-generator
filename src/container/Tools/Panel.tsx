import { FormEvent, MouseEventHandler } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

interface panelProps {
  value: string;
  onclick: MouseEventHandler;
}

const Panel = ({ value, onclick }: panelProps) => {
  const generateHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={generateHandler} className="flex flex-row">
        <Input type="text" color="green" text={value} />
        <Button type="button" text="Generate" onclick={onclick} />
      </form>
    </div>
  );
};

export default Panel;
