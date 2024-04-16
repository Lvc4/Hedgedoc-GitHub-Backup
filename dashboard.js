var form = document.getElementById("token-form");
var github_token = document.getElementById("github_token");
var user_name = document.getElementById("user_name");

var browser = (window.browser) ? window.browser : window.chrome;

load_token();

form.addEventListener('submit', save_token, false);

function load_token() {
    browser.storage.sync.get()
        .then(data => {
            github_token.value = data.github_token || ''
            user_name.value = data.user_name || ''
        }, error => {
            console.error(`Error: ${error}`)
        })
}

function save_token() {
    browser.storage.sync.set({
        github_token: github_token.value,
        user_name: user_name.value,
    })
}
