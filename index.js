import getData from "./app"
import axios from "axios";

getData(1)
.then(data => console.log(data))
.catch(e => console.log(e))