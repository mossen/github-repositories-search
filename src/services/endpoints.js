export const repositoriesEndpoint = (keyword = null, perPage = 20) => {
  return `https://api.github.com/search/repositories?q=${keyword}+in:name&sort=stars&order=desc&page=1&per_page=${perPage}`;
};
