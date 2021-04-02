const Button = (props) => {
  return (
    <button
      type={props.type}
      className="w-1/5 bg-green-500 text-white font-medium px-5 py-3 border-2 border-green-600 rounded-full ml-10"
      onClick={props.onclick}
    >
      {props.text}
    </button>
  );
};

export default Button;
