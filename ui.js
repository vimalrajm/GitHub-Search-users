class UI {
  constructor(userData, repoData, containerD) {
    this.userData = userData;
    this.containerD = containerD;
    this.repoData = repoData;
  }

  async addDetailsToUi() {
    console.log(this.userData);
    if(this.userData.message === "Not Found") {
      this.containerD.innerHTML = await `<div class="columns is-centered ">
      <div class="column is-9-desktop">
        <div class="box has-background-danger">
          <div class="field"><label class="label">Not Found</label>
          </div><div></div></div>`;
    } else {
      let repos = ``;
      this.repoData.forEach(data=>{
        if(this.repoData.length !== 0) {
        console.log(data);
        repos += `<div class="column"><a style="display: inline-block;width:200px;" href="${data.html_url}" target="new">
        <span>${data.name}<span></a>
            <button class="button is-link" style="display: inline-block;width:150px;">Stars: ${data.stargazers_count}</button>
            <button class="button is-dark" style="display: inline-block;width:150px;">Watchers: ${data.watchers_count}</button>
            <button class="button is-success" style="display: inline-block;width:150px;">Forks: ${data.forks_count}</button>
            </div>`
        }
      });
    const data = await `<div class="columns is-centered">
      <div class="column is-9-desktop">
        <div class="box">
          <div class="field"><label class="label is-size-4">${this.userData.login}</label>
          <hr style="background-color: hsl(293, 81%, 38%)">
            <article class="media">
              <figure class="media-left">
                <div class="image">
                  <img src="${this.userData.avatar_url}" alt="profile pic">
                  <a href="${this.userData.html_url}">
                  <button class="m-btm button box is-link">
                  View profile</button></a>
                </div>
              </figure>
              <figure class="media-content">
                <button class="button is-info">Public Repos:${this.userData.public_repos}</button>
                <button class="button is-dark">Public Gits:${this.userData.public_gists} </button>
                <button class="button is-success">Followers:${this.userData.followers}</button>
                <button class="button is-link">Following:${this.userData.following}</button>
                <div class="m-btm">
                  <table class="table is-bordered is-fullwidth has-padding-top">
                    <tr>
                      <td>Company: ${this.userData.company===null?'---':this.userData.company}</td>
                    </tr>
                    <tr>
                        <td>Website/Blog: ${this.userData.blog===null?'---':this.userData.blog}</td>
                      </tr>
                      <tr>
                          <td>Location: ${this.userData.location===null?'---':this.userData.location}</td>
                        </tr>
                        <tr>
                            <td>Member-since: ${this.userData.created_at}</td>
                          </tr>
                  </table>
                </div>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="columns is-centered">
      <div class="column is-9-desktop">
        <div class="box">
          <div class="field">
            <label class="label">Latest Repos</label>
            <hr style="background-color: hsl(293, 81%, 38%)">
            </div>
            `+repos+`
        </div>
      </div>
    </div>
  </div>`;
    this.containerD.innerHTML = await data;
  }
}
  removeDetailsFromUi() {
    this.containerD.innerHTML = '';
  }
}