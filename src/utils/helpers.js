export default function handleError(err, dispatch) {
  const error = {
    message: (err.message) ? err.message : 'Something went wrong!',
    error: (err.error) ? err.error : {},
  };
  dispatch({
    type: 'ERROR',
    message: error.message,
    error: error.error,
  });
  // Logout on token error
  if ('token' in error.error) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: 'LOGOUT',
    });
  }
}
