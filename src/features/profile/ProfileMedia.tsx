import { useMediaProfile } from "@/hooks/useProfile";

type MediaProfile = {
  id: string;
  images: string;
  content: string;
};

function ProfileMedia() {
  const { mediaProfile, isLoading, error } = useMediaProfile();
  if (isLoading) return <div className="text-gray-600">Loading...</div>;
  if (error) {
    return <div className="text-gray-500">Failed to load media.</div>;
  }
  if (!Array.isArray(mediaProfile)) {
    return <div className="text-gray-600">No media found.</div>;
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
