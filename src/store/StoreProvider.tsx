import { Provider } from 'react-redux';
import { WithChildren } from 'utils/with-children';
import { store } from './configure-store';

export const StoreProvider = ({ children }: WithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
