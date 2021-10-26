import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/configure-store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
