export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
};
