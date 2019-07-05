export default function getAvatarColor(username) {
  let hash = 0;

  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, 46%, 60%)`;
}
