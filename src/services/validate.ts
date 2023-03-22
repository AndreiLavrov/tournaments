export const validate = (str: string | null): boolean | null => {
  if (str === null) return null;
  if (str.trim() === '') return false; // not an empty string or only spaces;
  // by conditions we need a logic for "must contain only Latin letters, numbers, and spaces"
  return /^[a-z0-9 ]*$/i.test(str);
};
