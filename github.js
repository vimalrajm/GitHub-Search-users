class Github {
  constructor(userName) {
    this.userName = userName;
    this.client_id = 'dcaf3b308d8b209c961b';
    this.client_secret = '8e29cdb03fc2f3923f2dc7d3cb29ed91080b5922';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async userData() {
    const response = await fetch(`https://api.github.com/users/${this.userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const resData = await response.json();

    const reposResponse = await fetch(`https://api.github.com/users/${this.userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repData = await reposResponse.json();

    return { resData, repData };
  }

}