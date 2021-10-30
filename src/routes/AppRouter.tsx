import { HomePage } from 'pages/HomePage';
import { MoviePage } from 'pages/MoviePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MoviePage} />
      </Switch>
    </BrowserRouter>
  );
};
