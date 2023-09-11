import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page";
import Question from "./Components/Question";
import Privacy from "./Components/Privacy";
import Document from "./Components/Document"

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Page}/>
                    <Route path="/question" Component={Question}/>
                    <Route path="/privacy" Component={Privacy}/>
                    <Route path="/document" Component={Document}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}