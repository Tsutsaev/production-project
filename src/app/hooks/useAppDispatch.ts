import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { type StateSchema } from '../providers/StoreProvider/config/StateSchema';
import { type AppDispatch } from '../providers/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
