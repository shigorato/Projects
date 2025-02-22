import { JSX } from "react";
import Header from "../../components/header/header";

function NotFoundPage(): JSX.Element {
  return (
    <>
    <Header/>
    <div className="container-not_found">
      <h1 className="title-not_found">404</h1>
      <p className="subtitle-not_found">Страница не найдена</p>
      <p className="description-not_found">
        Извините, запрашиваемая вами страница не существует.
      </p>
      
    </div>
    </>
  );
};

export default NotFoundPage;