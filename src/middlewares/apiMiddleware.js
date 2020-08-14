import ActionTypes from '../utils/constant';


const apiMiddleware = ({ dispatch, getState }) => next => async (action) => {
  // Thunk
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const {
    type, promise, ...rest
  } = action;

  // Promise
  if (!promise) {
    // Normal
    return next(action);
  }

  const beginAction = type;
  const successAction = `${type}_SUCCESS`;
  const failureAction = `${type}_FAILURE`;

  next({ type: beginAction, ...rest });
  // Show loading indicator
  next({ type: ActionTypes.SHOW_LOADER });
  let nextAction;
  let result;

  try {
    const response = await promise;
    const jsonResponse = await response.json();

    if (response.ok) {
      nextAction = {
        type: successAction,
        payload: jsonResponse,
        ...rest,
      };
      result = {
        success: true,
        res: jsonResponse,
      };
    } else {
      nextAction = {
        type: failureAction,
        payload: jsonResponse,
        ...rest,
      };

      result = {
        success: false,
        res: jsonResponse,
      };
    }
  } catch (err) {
    nextAction = {
      type: failureAction,
      payload: err,
      ...rest,
    };
    result = {
      success: false,
      res: err,
    };
  }

  next(nextAction);

  // Hide loading indicatoer
  next({ type: ActionTypes.HIDE_LOADER });
  return result;
};

export default apiMiddleware;
