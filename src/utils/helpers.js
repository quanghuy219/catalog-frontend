import { ActionTypes } from './constant';

/**
 * Show spinner on screen when start an asynchronous action
 */
export function onStartingRequest() {
  return {
    type: ActionTypes.SHOW_LOADER,
  };
}

/**
 * Hide spinner when request finishes
 */
export function onReceivingResponse() {
  return {
    type: ActionTypes.HIDE_LOADER,
  };
}

/**
 * Show error messages when calling API failed
 */
export function showErrorMessage(message, error) {
  return {
    type: ActionTypes.SHOW_ERROR_MESSAGE,
    message,
    error,
  };
}

/**
 * Show successfull message when calling API returns success
 */
export function showSuccessMessage(message) {
  return {
    type: ActionTypes.SHOW_SUCCESS_MESSAGE,
    message,
  };
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
  dispatch(onReceivingResponse());
  dispatch({
    type: ActionTypes.SHOW_ERROR_MESSAGE,
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

export function getErrorMessage(response) {
  const { message } = response;
  let errMessage = 'Something went wrong!';
  if (typeof message === 'string') {
    errMessage = message;
  } else if (Array.isArray(message)) {
    [errMessage] = message;
  } else if (Object.values(message)) {
    [errMessage] = Object.values(message);
    if (Array.isArray(errMessage)) {
      [errMessage] = errMessage;
    }
  }
  return errMessage;
}

/**
 * Generate limit and offset value for pagination
 * @param {*} page Page start with 0
 * @param {*} itemsPerPage Total items allowed in a page
 */
export function genPaginationParams(page, itemsPerPage) {
  const limit = itemsPerPage;
  const offset = page * itemsPerPage;
  return { offset, limit };
}
