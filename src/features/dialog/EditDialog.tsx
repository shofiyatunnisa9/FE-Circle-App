import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/useAuth";
import { useUpdateProfile } from "@/hooks/useProfile";
import { useState, useEffect } from "react";

function EditDialog() {
  const { profile } = useCurrentUser();
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    bio: "",
    avatar: "",
    banner: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  // Update form data when profile changes
  useEffect(() => {
    if (profile) {
      setFormData({
        fullname: profile.fullname || "",
        username: profile.username || "",
        bio: profile.bio || "",
        avatar: profile.avatar || "",
        banner: profile.banner || "",
      });
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("bio", formData.bio);

    if (avatarFile) {
      formDataToSend.append("avatar", avatarFile);
    }
    if (bannerFile) {
      formDataToSend.append("banner", bannerFile);
    }

    updateProfile(formDataToSend, {
      onSuccess: () => {
        setIsOpen(false);
        setAvatarFile(null);
        setBannerFile(null);
      },
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      // Create preview URL
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData((prev) => ({ ...prev, avatar: url }));
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0]);
      // Create preview URL
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData((prev) => ({ ...prev, banner: url }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="items-center bg-transparent rounded-3xl cursor-pointer mt-6"
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border-0 text-white">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <img
              src={
                formData.banner ||
                "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              }
              className="w-full h-20 rounded-lg object-cover"
            />
            <label
              htmlFor="banner"
              className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 hover:opacity-100 cursor-pointer rounded-lg"
            >
              <span className="text-white text-sm">Change Banner</span>
            </label>
            <Input
              type="file"
              id="banner"
              hidden
              accept="image/*"
              onChange={handleBannerChange}
            />
          </div>

          <div className="flex justify-between items-center mt-2 px-4">
            <div className="flex">
              <label
                htmlFor="avatar"
                className="cursor-pointer relative inline-block"
              >
                <Avatar className="size-20 -mt-14">
                  <AvatarImage
                    className="border-gray-800 border-4 rounded-full"
                    src={formData.avatar || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>{formData.fullname[0] || "U"}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 hover:opacity-100 rounded-full pointer-events-none">
                  <span className="text-white text-xs pointer-events-auto">
                    Change
                  </span>
                </div>
              </label>
              <Input
                type="file"
                id="avatar"
                hidden
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
          </div>

          <Input
            placeholder="Nama"
            className="border-gray-500 border-2"
            value={formData.fullname}
            onChange={(e) => handleInputChange("fullname", e.target.value)}
          />
          <Input
            placeholder="Username"
            className="border-gray-500 border-2"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <Textarea
            placeholder="Bio"
            id="content"
            className="border-gray-500 border-2"
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
          />

          <DialogFooter>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-green-500 hover:bg-green-600"
            >
              {isPending ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
