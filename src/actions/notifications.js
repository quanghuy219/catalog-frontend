import { ActionTypes } from '../utils/constant';

export const showErrorMessage = message => ({
  type: ActionTypes.SHOW_ERROR_MESSAGE,
  message: message || 'Something went wrong!',
});

export const showSuccessMessage = message => ({
  type: ActionTypes.SHOW_SUCCESS_MESSAGE,
  message,
});
