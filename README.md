Created for [67-327 Web Application Security](http://67327.cmuis.net/), this application just echoes back all the data it is sent. This serves as a small-scale example of injecting a form and capturing data via XSS

To implement this 'hack', get the code located in `index.html` onto a site. The way I did in the class was via an [XSS attack](https://en.wikipedia.org/wiki/Cross-site_scripting) the in the project description.

![](https://raw.githubusercontent.com/SivanMehta/xss-capture/master/fake-login.png)

Then visit the deployed heroku app [here](https://capture-327-xss.herokuapp.com/) to see your captured data in plaintext
