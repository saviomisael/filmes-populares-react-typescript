import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { WithChildren } from 'utils/with-children';

export const PageTemplate = ({ children }: WithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
