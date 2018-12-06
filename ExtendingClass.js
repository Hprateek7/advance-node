class Page{
    goto(){ console.log('Im going to another page'); }
    setCookie(){ console.log('Im setting a cookie')}
}

class CustomPage {
    constructor(page){
        this.cpage = page;
    }

    login() {
        this.cpage.goto('localhost:3000');
        this.cpage.setCookie();
    }
}

const page = new Page();
const customPage = new CustomPage(page);
customPage.login();
customPage.cpage.goto();

Page.prototype.login = function () {
    this.goto('localhost:3000');
    this.setCookie();
}

const page = new Page();
page.login();

class CustomPage  extends Page{
  
    login() {
        this.goto('localhost:3000');
        this.setCookie();
    }
}

const customPage = new CustomPage();
customPage.login();


class CustomPage {
    static build(){
        const page = new Page();
        const customPage = new CustomPage();

        const superPage = new Proxy(customPage, {
            get: function (target,property) {
                return target[property]|| page[property]
            }
        });

        return superPage;
    }

    constructor(page){
        this.cpage = page;
    }

    login() {
        this.cpage.goto('localhost:3000');
        this.cpage.setCookie();
    }
}

 

CustomPage.build.goto();
CustomPage.build.setCookie();
CustomPage.build.login();