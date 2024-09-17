function getPage (page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML =
            this.responseText;
          }
        };
        xhttp.open("GET", page, true);
        xhttp.send();

}



    let button = document.querySelector('#home')
    let button2 = document.querySelector('#about')
    let button3 = document.querySelector('#contact')

    button.addEventListener('click', (e) => {
        e.preventDefault
        history.pushState({ page: 1 }, 'home', './home.html')
        getPage("./home.html")
    })

    button2.addEventListener('click', (e) => {
        e.preventDefault
        history.pushState({ page: 1 }, 'about', './about.html')
        getPage("./about.html")
    })
    button3.addEventListener('click', (e) => {
        e.preventDefault
        history.pushState({ page: 1 }, 'contact', './contact.html')
        getPage("./contact.html")
    })



    window.addEventListener('popstate', (event) => {
 
        switch (event.state.page) {
            case 1:
                fetchHtml('home')
                break
            case 2:
                fetchHtml('contact')
                break
            default:
                fetchHtml('home')
        }
    })


getPage("./home.html")

