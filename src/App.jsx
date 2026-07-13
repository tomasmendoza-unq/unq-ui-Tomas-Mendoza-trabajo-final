import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home/Home";
import { NotFound } from "./views/404/NotFound";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
}

export default App;
