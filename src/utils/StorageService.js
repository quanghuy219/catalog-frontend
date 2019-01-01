const StorageService = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  delete(key) {
    delete localStorage[key];
  },
};

export default StorageService;
