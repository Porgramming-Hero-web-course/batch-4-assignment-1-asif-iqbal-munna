# How to handle asynchronous operations using async/await over callback/promise TypeScript.
In this article we will discuss about async/await and callback/promise and find out when which one to use.

---

## Introductions
In our application we have to handle CRUD operations with server/database which are basically asynchronous tasks. This asynchronous tasks allow applications do I/O operations without blocking the main thread. It helps to improve application's efficiency and performance. For the asynchronous tasks we use callback/promise, and async/await. 

## 1. Callback/Promise

Promise is like a regular promise that we do in our life either we fulfill a promise or don't. Same like that a promise can be resolved or rejected. Actually it has three states which are resolved, rejected and pending. An example of promise given below.

For example:
```
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

```
## 2. Async/Await

Async/await was introduced in ES8 (ECMAScript 2017) which helps do asynchronous tasks in a more cleaner and readable way and this actually increases code maintainability.

For example:

```typescript
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();

Here `await` is used to pause the execution until a promise is resolved or rejected.

```

## Conclusions
As a programmer according to the application needs and logics we use both promise and async/await. Though we mostly use async/await but there are some cases where using promise suits best and increase our code's readability and maintainability. 