import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import JobsPage from "./pages/JobsPage";
import UpdatesPage from "./pages/UpdatesPage";
import UpdateDetailPage from "./pages/UpdateDetailPage";
import ResultsPage from "./pages/ResultsPage";
import ResultDetailPage from "./pages/ResultDetailPage";
import EventsPage from "./pages/EventsPage";
import SportsPage from "./pages/SportsPage";
import FamousFoodsPage from "./pages/FamousFoodsPage";
import NelloreHistoryPage from "./pages/NelloreHistoryPage";
import FamousStayPage from "./pages/FamousStayPage";
import OffersPage from "./pages/OffersPage";
import MoviesPage from "./pages/MoviesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import NotificationsPage from "./pages/NotificationsPage";
import BookingPage from "./pages/BookingPage";
import TransportationPage from "./pages/TransportationPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./components/AdminLayout";
import JobsManager from "./pages/admin/JobsManager";
import NewsManager from "./pages/admin/NewsManager";
import EventsManager from "./pages/admin/EventsManager";
import OffersManager from "./pages/admin/OffersManager";
import ResultsManager from "./pages/admin/ResultsManager";
import HomePageManager from "./pages/admin/HomePageManager";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "news", Component: NewsPage },
      { path: "news/:id", Component: ArticleDetailPage },
      { path: "jobs", Component: JobsPage },
      { path: "updates", Component: UpdatesPage },
      { path: "updates/:id", Component: UpdateDetailPage },
      { path: "results", Component: ResultsPage },
      { path: "results/:id", Component: ResultDetailPage },
      { path: "events", Component: EventsPage },
      { path: "sports", Component: SportsPage },
      { path: "tourism/foods", Component: FamousFoodsPage },
      { path: "tourism/history", Component: NelloreHistoryPage },
      { path: "tourism/stay", Component: FamousStayPage },
      { path: "offers", Component: OffersPage },
      { path: "famous-foods", Component: FamousFoodsPage },
      { path: "nellore-history", Component: NelloreHistoryPage },
      { path: "movies", Component: MoviesPage },
      { path: "notifications", Component: NotificationsPage },
      { path: "booking/:id", Component: BookingPage },
      { path: "transportation", Component: TransportationPage },
      { path: "contact", Component: ContactUsPage },
    ],
  },
  { path: "login", Component: LoginPage },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: JobsManager },
      { path: "jobs", Component: JobsManager },
      { path: "news", Component: NewsManager },
      { path: "events", Component: EventsManager },
      { path: "offers", Component: OffersManager },
      { path: "results", Component: ResultsManager },
      { path: "homepage", Component: HomePageManager },
    ],
  },
]);