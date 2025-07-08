import { useMediaProfile, useMediaProfileByUsername } from "@/hooks/useProfile";

type MediaProfile = {
  id: string;
  images: string;
  content: string;
};
interface ProfileMediaProps {
  username?: string;
}
function ProfileMedia({ username }: ProfileMediaProps) {
  const { mediaProfile, isLoading, error } = username
    ? useMediaProfileByUsername(username)
    : useMediaProfile();
  if (isLoading)
    return <div className="text-gray-600 text-center">Loading...</div>;
  if (error) {
    return (
      <div className="text-gray-600 text-center"> ❌Failed to load media</div>
    );
  }
  if (!Array.isArray(mediaProfile)) {
    return <div className="text-gray-600 text-center"> No media found !</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-1">
      {mediaProfile.map((thread: MediaProfile) => (
        <div key={thread.id} className="h-60 w-full object-cover">
          <img
            src={thread.images}
            alt={thread.content}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default ProfileMedia;
