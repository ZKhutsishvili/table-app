import './App.css';
import Table from './components/Table';
import dummyColumns from './data/dummyColumns'
import dummyRows from './data/dummyRows'

function App() {
  return (
    <Table columns={dummyColumns} data={JSON.parse(localStorage.getItem("data")) || dummyRows}/>
  );
}

export default App;
