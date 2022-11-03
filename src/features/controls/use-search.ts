import { ChangeEventHandler } from 'react';
import {useSelector} from 'react-redux';
import { useAppDispatch } from 'store';
import { selectSearch } from './control-selector';
import { setSearch } from './controls-slice';

type onSearch = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e: { target: { value: string; }; }) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
