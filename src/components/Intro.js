const Intro = () => {
  return (
    <div className="container w-4/5 mx-auto py-20 flex flex-col">
      <h1 className="text-4xl flex-1 text-center font-semibold">
        Random Password Generator
      </h1>
      <p className="flex-1 mt-5 text-center text-xl">
        Get secure and random password. Say goodbye to{' '}
        <span className="italic font-medium">"password"</span>.
      </p>
    </div>
  );
};

export default Intro;
