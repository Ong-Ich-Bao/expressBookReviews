const axios = require('axios');

const BASE_URL = "https://ongichbaofpt-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai";

// TASK 10 - Async callback
function getBooks(callback) {
    axios.get(`${BASE_URL}/`)
        .then(response => callback(response.data))
        .catch(error => console.log(error));
}

// TASK 11 - Promises (ISBN)
function getBookByISBN(isbn) {
    return axios.get(`${BASE_URL}/isbn/${isbn}`)
        .then(res => res.data)
        .catch(err => err);
}

// TASK 12 - Promises (Author)
function getBookByAuthor(author) {
    return axios.get(`${BASE_URL}/author/${author}`)
        .then(res => res.data)
        .catch(err => err);
}

// TASK 13 - Promises (Title)
function getBookByTitle(title) {
    return axios.get(`${BASE_URL}/title/${title}`)
        .then(res => res.data)
        .catch(err => err);
}

// ===============================
// RUN TESTS (Screenshots required)
// ===============================

// Task 10
getBooks((data) => {
    console.log("Task 10 - All books:");
    console.log(data);
});

// Task 11
getBookByISBN(1).then((data) => {
    console.log("Task 11 - Book by ISBN 1:");
    console.log(data);
});

// Task 12
getBookByAuthor("Unknown").then((data) => {
    console.log("Task 12 - Books by author Unknown:");
    console.log(data);
});

// Task 13
getBookByTitle("The Divine Comedy").then((data) => {
    console.log("Task 13 - Book by title:");
    console.log(data);
});
