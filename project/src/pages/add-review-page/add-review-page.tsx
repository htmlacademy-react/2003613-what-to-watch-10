import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import Film from '../../types/film';
import User from '../../types/user';
import NotFoundPage from '../not-found-page/not-found-page';

type ReviewPageProps = {
  films: Film[];
  user: User;
}

function AddReviewPage({films, user}: ReviewPageProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  if (!film){
    return (
      <NotFoundPage />
    );
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock avatarUrl={user.avatarUrl} name={user.name} />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
