import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../api/profileApi";
import type { UpdateProfileDto } from "../model/types";

export const useSaveProfile = () => {
  const { data: profile } = useGetProfileQuery();

  const [updateProfile] = useUpdateProfileMutation();

  const saveProfile = async (changes: Partial<UpdateProfileDto>) => {
    if (!profile) return;

    const currentProfile = profile.profiles[0];

    const dto = {
      userId: profile.id,
      description: changes.description ?? currentProfile.description,
      markingWeight: changes.markingWeight ?? currentProfile.markingWeight,
      socialNetwork: changes.socialNetwork ?? currentProfile.socialNetwork,
      image_src: changes.image_src ?? currentProfile.image_src,
      profileSkills:
        changes.profileSkills ??
        currentProfile.profileSkills.map((skill) => skill.id.toString()),
      specializationId:
        changes.specializationId ?? currentProfile.specializationId,
    };

    await updateProfile({
      id: currentProfile.id,
      data: dto,
    }).unwrap();
  };

  return { saveProfile };
};
