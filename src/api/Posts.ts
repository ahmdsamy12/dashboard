import axios from "axios";

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const stadiumsApp = axios.create({
  baseURL: "https://myfakeapi.com/api/football/stadiums",
});

export const productsApp = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});
