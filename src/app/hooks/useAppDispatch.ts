import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { type StateSchema, type AppDispatch } from '../providers/StoreProvider/config/StateSchema';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
