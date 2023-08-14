import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./Components/Question";
import Home from "./Components/Home";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/question" Component={Question}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}