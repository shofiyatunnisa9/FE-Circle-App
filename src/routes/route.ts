import ProtectedAuth from "@/components/ui/protectedAuth";
import ProtectedLayout from "@/components/ui/protectedLayout";
import FollowerPage from "@/pages/followerPage";
import FollowingPage from "@/pages/followingPage";
import FollowPage from "@/pages/followPage";
import ForgotPage from "@/pages/forgotPage";
import HomePage from "@/pages/homePage";
import LoginPage from "@/pages/loginPage";
import ProfilePage from "@/pages/profilePage";
import RegisterPage from "@/pages/registerPage";
import ResetPage from "@/pages/resetPage";
import SearchPage from "@/pages/searchPage";
import ThreadDetailPage from "@/pages/threadDetail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    Component: ProtectedLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/threads/:id", Component: ThreadDetailPage },
      { path: "/profile", Component: ProfilePage },
      { path: "/search", Component: SearchPage },
      { path: "/follow", Component: FollowPage },
      { path: "/follower", Component: FollowerPage },
      { path: "/following", Component: FollowingPage },
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
