import Text from '../../components/Input/Input';

const Panel = () => {
  return (
    <div>
      <form className="flex flex-row">
        <Text color="green" />

        <button
          type="submit"
          className="w-1/5 bg-green-500 text-white font-medium px-5 py-3 border-2 border-green-600 rounded-full ml-10 hover:border-gray-500"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default Panel;
