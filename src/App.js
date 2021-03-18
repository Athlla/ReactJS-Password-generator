import Intro from './components/Intro';
import Tool from './container/Tool';

const App = () => {
  return (
    <div className="container w-4/5 mx-auto py-20 flex flex-colcontainer w-4/5 mx-auto py-20 flex flex-col">
      <Intro />
      <Tool />
    </div>
  );
};

export default App;
