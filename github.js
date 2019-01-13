class Github {
  constructor(userName) {
    this.userName = userName;
    //login to git hub
    //1.click on user profile and navigate setting
    //2.click on developer setting
    //3.click on github user name and copy client id and client secret
    this.client_id = '';//paste here inside quotes
    this.client_secret = '';//paste here inside quotes
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