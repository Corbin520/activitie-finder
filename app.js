var servePage = document.getElementById("main-page")
// comment back in
// servePage.style.display = "none";

class Name {
    constructor(param) {
        this.param = param
    }
    print() {
        return this.param
    }
}

function nameFunc() {
    var userInput = document.getElementById("myText").value;
    var inputForm = document.getElementById("input-form");
    var mainHeader = document.getElementById("main-header")
    var userName = new Name(userInput)
    var printPage = document.getElementById("name")
    printPage.textContent = "Hello " + userName.print() + "!";
    mainHeader.style.display = "none";
    inputForm.style.display = "none";
    mainPage()
}


async function mainPage() {
    servePage.style.display = "block";
}







