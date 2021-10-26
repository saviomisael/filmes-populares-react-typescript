import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store/configure-store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
