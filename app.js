const findUser = document.getElementById('searchtxt');
findUser.addEventListener('keyup',getUser);
const viewUdata = document.getElementById('viewUdata');

function getUser(e) {
  const user = e.target.value;
  setInterval(display(user.trim()),2000);
}
 
function display(user) {
  viewUdata.innerHTML = `<div class="columns is-centered">
      <div class="column is-9-desktop">
        <div class="box">
          <div class="field"><label class="label">Loading...</label>
          </div><div></div></div>`;
  if(user !== '') {
    const github = new Github(user);
    console.log(github)
    github.userData().then((res)=>{
      const uiJs = new UI(res.resData,res.repData,viewUdata);
      uiJs.addDetailsToUi();
      });
    }else{
      const uiJs = new UI(null,null,viewUdata);
      uiJs.removeDetailsFromUi();
    }
}


