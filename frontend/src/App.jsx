import Home from "./components/Home"
import { Route,Routes } from "react-router-dom"
import Mynotes from "./pages/Maynotes"
import Actions from "./pages/Actions"


function App (){
    return <Routes>
        <Route  path="/" element={<Home />} ></Route>
        <Route  path="/mynotes" element={<Mynotes />} ></Route>
        <Route  path="/Actions/:id" element={<Actions/>} ></Route>
    </Routes>
}

export default App 