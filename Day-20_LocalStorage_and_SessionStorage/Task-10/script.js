// Task 10

function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();

  console.log("LocalStorage after clear:", localStorage.length);
  console.log("SessionStorage after clear:", sessionStorage.length);
}

clearAllStorages();

// Task 10 Ended Here...
