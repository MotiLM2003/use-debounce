import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const useDebounce = (callback, delay) => {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);
  console.log('in debounce');
  return debounceCallback;
};

export default useDebounce;
