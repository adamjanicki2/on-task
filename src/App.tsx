import Display from "src/components/Display";
import Footer from "src/components/Footer";
import OnTask from "src/components/util/OnTask";

const App = () => {
  return (
    <div className="flex flex-column items-center">
      <div className="flex flex-column items-center w-100 pa2">
        <h1 className="b ma0 f1">
          <OnTask />
        </h1>
        <Display className="w-80" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
