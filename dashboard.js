var form = document.getElementById("token-form");
var github_token = document.getElementById("github_token");
var user_name = document.getElementById("user_name");


load_token();

form.addEventListener('submit', save_token, false);

function load_token(){
    user_name.value="test user";
    github_token.value="test token";
}

function save_token(){
    console.log(github_token.value);
    console.log(user_name.value);
}
