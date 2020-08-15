import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchItem } from '../actions/items';

const useItem = (categoryId, itemId) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [item, setItem] = useState({});

  const getItem = async () => {
    const { success, res } = await dispatch(fetchItem(categoryId, itemId));
    if (!success) {
      history.push('/');
    }
    setItem(res);
  };

  useEffect(() => {
    getItem();
  }, [categoryId, itemId]);

  return item;
};

export default useItem;
