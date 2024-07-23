// DAY 11: Promises and Async/Await
// Activity 1 : Understanding Promises
// Task 1
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This message is displayed after a 2-second delay");
  }, 2000);
});
promise.then((message) => {
  console.log(message);
});

// Task 2
const promise1 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("This error message is displayed after a 2-second delay"));
  }, 2000);
});

promise1.catch((error) => {
  console.error(error.message);
});

// Activity 2 : Chaining Promises
// Task 3
// Simulate fetching data with a delay
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
// Simulate a sequence of fetching data
fetchData("Fetching user data...", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching posts data...", 2000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Fetching comments data...", 1500);
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetched successfully.");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Activity 3 : Using Async/Await
// Task 4
const fetchingData = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
};
const resolveValue = async () => {
    try {
        const result = await fetchingData();
        console.log(result);
    } catch (error) {
        console.error("Error", error);
    }
}
resolveValue();

// Task 5
const fetchDataWithError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data"))
        }, 2000);
    })
}
const handleRejectPromise = async () => {
    try {
       const result = await fetchDataWithError(); 
       console.log(result);
    } catch (error) {
        console.error("Error: ", error.message);
    }
};
handleRejectPromise();

// Activity 4 : Fetching Data from an API
// Task 6
// URL of the public API
const apiURL = "https://jsonplaceholder.typicode.com/posts/1";
// Fetch data from the public API
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Task 7
// URL of the public API
const APIURL = "https://jsonplaceholder.typicode.com/posts/1";
// Fetch data from the public API
const FetchingDataFromApi = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
FetchingDataFromApi();

// Activity 5 : Concurrent Promises
// Task 8
const promiseOne = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 3000);
  });
  
  const promiseTwo = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000);
  });
  
  const promiseThree = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 1500);
  });
  
Promise.all([promiseOne, promiseTwo, promiseThree])
    .then((values) => {
      console.log(values); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// Task 9
Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((value) => {
    console.log(value); // Logs "Promise 3 resolved" because it resolves first
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  