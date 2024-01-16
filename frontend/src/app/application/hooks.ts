import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

//função para disparar as mudanças de estado do redux
export const useAppDispatch = () => useDispatch<AppDispatch>();

//função para selecionas os estados do redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
