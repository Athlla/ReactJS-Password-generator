const Input = (props) => {
  return (
    <>
      <input
        type="text"
        className={`bg-${props.color}-200 text-${props.color}-600 w-4/5 border-2 border-bold border-${props.color}-600 px-5 py-3 pr-12 rounded-md`}
      />
      <button className="relative right-10">
        <svg
          className={`text-${props.color}-600`}
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
};

export default Input;
