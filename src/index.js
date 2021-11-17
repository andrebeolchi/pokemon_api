import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './normalize.css'
import axios from "axios"

// axios.defaults.baseURL = "https://pokeapi.co/api/"

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)