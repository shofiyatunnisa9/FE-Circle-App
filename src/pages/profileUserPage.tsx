import { ProfileUser } from "@/features/profile/ProfileUsers";
import { useParams } from "react-router-dom";

export function ProfileUserPage() {
  const { username } = useParams<{ username: string }>();
  if (!username) {
    return <div className="text-gray-400 text-center">User not Found</div>;
  }

  return <ProfileUser username={username} />;
}
