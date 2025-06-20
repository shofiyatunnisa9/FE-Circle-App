import ProtectedAuth from "@/components/ui/protectedAuth";
import ProtectedLayout from "@/components/ui/protectedLayout";
import FollowPage from "@/pages/followPage";
import ForgotPage from "@/pages/forgotPage";
import HomePage from "@/pages/homePage";
import LoginPage from "@/pages/loginPage";
import ProfilePage from "@/pages/profilePage";
import RegisterPage from "@/pages/registerPage";
import ResetPage from "@/pages/resetPage";
import SearchPage from "@/pages/searchPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    Component: ProtectedLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/profile", Component: ProfilePage },
      { path: "/search", Component: SearchPage },
      { path: "/follow", Component: FollowPage },
    ],
  },
  {
    Component: ProtectedAuth,
    children: [
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
      { path: "/forgot", Component: ForgotPage },
      { path: "/reset", Component: ResetPage },
    ],
  },
]);
