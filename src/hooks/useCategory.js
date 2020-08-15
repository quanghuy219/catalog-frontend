import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCategory } from '../actions/categories';

const useCategory = (categoryId) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState({});

  const getCategory = async () => {
    const { success, res } = await dispatch(fetchCategory(categoryId));
    if (!success) {
      history.push('/');
    }
    setCategory(res);
  };

  useEffect(() => {
    getCategory();
  }, [categoryId]);
  return category;
};

export default useCategory;
