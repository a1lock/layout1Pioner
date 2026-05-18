import Content from "./components/Content";
import Foot from "./components/Foot";
import Head from "./components/Head";
import './App.css';

function App() {
  return (
    <div className="box-border mx-auto min-h-screen">
      <div className="mx-auto max-w-[1180px]">
        <Head />
        <Content />
      </div>
      <Foot />
    </div>
  );
}

export default App
