import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Panel = () => {
  return (
    <div>
      <form className="flex flex-row">
        <Input type="text" color="green" />
        <Button type="submit" text="Generate" />
      </form>
    </div>
  );
};

export default Panel;
