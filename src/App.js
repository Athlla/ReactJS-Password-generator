import Intro from './components/Intro';
import Tools from './components/Tools';

const App = () => {
  return (
    <div className="container w-4/5 mx-auto py-20 flex flex-colcontainer w-4/5 mx-auto py-20 flex flex-col">
      <Intro />
      <Tools />
    </div>
  );
};

export default App;
