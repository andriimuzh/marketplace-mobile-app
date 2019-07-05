export const isThisViewer = (viewer, userId) => {
  let isViewer = false;
  if (viewer) {
    if (!userId) {
      isViewer = true;
    } else if (viewer.id === userId) {
      isViewer = true;
    }
  }
  return isViewer;
};
