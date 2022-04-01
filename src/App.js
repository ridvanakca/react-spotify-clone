import { BrowserRouter } from "react-router-dom";
import Sidebar from "components/Sidebar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
