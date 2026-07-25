export const calculateAge = (birthDate: string): number | undefined => {
  if (!birthDate) return;

  const birth = new Date(birthDate);

  if (Number.isNaN(birth.getTime())) {
    return;
  }

  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};
