class GithubApi {

  static get BASE_URL() {
    return 'https://api.github.com';
  }

  static get REQUEST_CONFIG() {
    return {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    };
  }

  static getPublicRepositories(organization = 'thegreenhouseio') {
    const url = `${GithubApi.BASE_URL}/orgs/${organization}/repos`;

    return fetch(url, GithubApi.REQUEST_CONFIG).then(response => {
      return response.json();
    });
  }

}

export default GithubApi;