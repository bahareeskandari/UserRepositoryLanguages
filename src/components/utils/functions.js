export const searchHandler = {
  async searchUserRepos(userInput) {
    return fetch(`https://api.github.com/users/${userInput}/repos`)
      .then((res) => res.json())
      .then((r) => r)
      .catch((error) => error)
  },
  async searchLanguagesOfEveryRepo(usersLanguages) {
    return fetch(usersLanguages)
      .then((res) => res.json())
      .then((r) => r)
  },
}
