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
    return <div className="text-red-500">Failed to load media.</div>;
  }
  if (!Array.isArray(mediaProfile)) {
    return <div className="text-gray-600">No media found.</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {mediaProfile.map((thread: MediaProfile) => (
        <div key={thread.id} className="h-32 overflow-hidden rounded-md">
          <img
            src={thread.images}
            alt={thread.content}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default ProfileMedia;
