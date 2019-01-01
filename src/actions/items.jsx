function fetchItems() {
  return dispatch => fetch('http://localhost:5000/api/items')
    .then(
      response => response.json(),
      error => console.log(error),
    ).then(json => (
      dispatch({
        type: 'FETCH_ITEMS',
        categories: json.data.items,
      })
    ));
}

export default fetchItems;
