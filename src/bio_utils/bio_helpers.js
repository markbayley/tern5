// Hack to fix the visit date display
// format.
export const parseBioImagesDate = (value) => {
  if (!Number.isNaN(value)) {
    const y = value.substr(0, 4);
    const m = value.substr(4, 2);
    const d = value.substr(6, 2);
    return `${y}-${m}-${d}`;
  }
  return value;
};
