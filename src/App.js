import "./App.css";
import Appbar from "./Components/Navbar";
import StudentForm from "./Components/StudentForm";
import StudentTable from "./Components/Table";

function App() {
  return (
    <div className="App">
      <Appbar />
      <StudentForm/>
      <h1 className="text-danger"> Hello Student Manager! </h1>
      <StudentTable />
    </div>
  );
}

export default App;
