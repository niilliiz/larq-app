import axios from "axios";

const instance = axios.create({
    baseURL: "https://console.firebase.google.com/project/larq-project/firestore/data/~2Fproducts",
});
export default instance;