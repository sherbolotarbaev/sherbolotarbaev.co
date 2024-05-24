'use client';

import { store } from '@/app/redux/store';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: Readonly<ReduxProviderProps>) {
  return <Provider store={store}>{children}</Provider>;
}
