import { useState } from "react";
import {
  useGetProfileQuery,
  useUpdateUserMutation,
} from "@/entities/profile/api/profileApi";
import { fileToBase64 } from "@/shared/lib/fileToBase64";

export const useAvatarUpload = () => {
  const { data: profile } = useGetProfileQuery();
  const [updateUser] = useUpdateUserMutation();

  const [localPreview, setLocalPreview] = useState<string>();
  const image = localPreview ?? profile?.avatarUrl;

  const handleAvatarChange = async (file: File | null) => {
    if (!profile) return;

    if (file === null) {
      setLocalPreview(undefined);

      await updateUser({
        id: profile.id,
        data: { avatarUrl: null },
      });

      return;
    }

    const preview = URL.createObjectURL(file);
    setLocalPreview(preview);

    try {
      const avatarImage = await fileToBase64(file);

      await updateUser({
        id: profile.id,
        data: { avatarImage },
      }).unwrap();
    } catch {
      setLocalPreview(undefined);
    } finally {
      URL.revokeObjectURL(preview);
    }
  };

  return {
    image,
    handleAvatarChange,
  };
};
