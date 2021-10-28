import { HomePage } from 'pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
