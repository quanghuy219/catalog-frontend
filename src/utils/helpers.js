/**
 * Show spinner on screen when start an asynchronous action
 */
export function startFetching(dispatch) {
  dispatch({
    type: 'SHOW_LOADER',
  });
}

/**
 * Hide spinner when request finishes
*/
export function endFetching(dispatch) {
  dispatch({
    type: 'HIDE_LOADER',
  });
}

/**
 * Handle error when sending a request
 * Dispatch ERROR action to show notification on screen, hide loading spinner
 */
export function handleError(err, dispatch) {
  const error = {
    message: (err.message) ? err.message : 'Something went wrong!',
    error: (err.error) ? err.error : {},
  };
  endFetching(dispatch);
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
