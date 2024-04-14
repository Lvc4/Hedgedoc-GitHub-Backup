console.log("Hedgedoc to GitHub started");

async function insertSaveButton() {
    var nav_bar = document.querySelector("body > nav > div.navbar-header");
    var save_button = `<ul class="nav navbar-nav navbar-form navbar-left" style="padding:15;">
        <div class="btn-group" data-toggle="buttons">
            <label class="btn ui-night" title="In GitHub speichern">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </label>
    </div >
</ul >`
    nav_bar.insertAdjacentHTML("afterend", save_button)
}

insertSaveButton();
