function fetchCategories() {
  return dispatch => fetch('http://localhost:5000/api/categories')
    .then(
      response => response.json(),
      error => console.log(error),
    ).then(json => (
      dispatch({
        type: 'FETCH_CATEGORIES',
        categories: json.data.categories,
      })
    ));
}

export default fetchCategories;
