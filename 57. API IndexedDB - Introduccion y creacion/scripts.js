const indexedDB = window.indexedDB;

if (indexedDB) {
  let db;
  const request = indexedDB.open("taskList", 1);
  request.onsuccess = () => {
    db = request.result;
    console.log("open", db);
  };
  request.onupgradeneeded = () => {
    db = request.result;
    console.log("create", db);
    const objetStore = db.createObjectStore("tasks");
  };
  request.onerror = (error) => {
    console.log("error", error);
  };
}
