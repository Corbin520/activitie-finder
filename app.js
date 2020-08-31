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

function optionsButton() {
    var options = document.getElementById("selectedOption");
    var selectedOption  = options.options[options.selectedIndex].value;
    // console.log(selectedOption)

    if(selectedOption != null) {
        // console.log("options has been picked")

        var queryOption = selectedOption
        console.log("button clicked: " + queryOption);
        var apiKey = ""

        var queryURL = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=017576662512468239146:omuauf_lfve&q=" + queryOption;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
        })
    }
}








