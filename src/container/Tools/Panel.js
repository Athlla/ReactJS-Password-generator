import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Panel = (props) => {
  const generateHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={generateHandler} className="flex flex-row">
        <Input type="text" color="green" value={props.value} />
        <Button type="submit" text="Generate" onclick={props.onclick} />
      </form>
    </div>
  );
};

export default Panel;
