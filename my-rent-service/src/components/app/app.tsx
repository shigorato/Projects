import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites/favorites-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import { PrivateRoute } from "../private-route/private-route";
import { AppRoute, AuthorizationStatus } from "../../const";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Offer from "../../pages/offer-page/offer-page";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />}/>
                <Route path={AppRoute.Login} element={<LoginPage/>}/>
                <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.NoAuth }
              >
                <FavoritesPage />

              </PrivateRoute>
            }
          />
                <Route path={AppRoute.Offer} element={<Offer/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default App;