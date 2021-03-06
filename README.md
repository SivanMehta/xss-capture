# XSS

This repo includes a Node.js application just echoes back all the data it is sent. This serves as a small-scale example of injecting a form and capturing data via XSS

To implement this 'hack', get the code located in `index.html` onto a site. The way I did in the class was via an [XSS attack](https://en.wikipedia.org/wiki/Cross-site_scripting) the in the project description.

![](https://raw.githubusercontent.com/SivanMehta/xss-capture/master/fake-login.png)

Then visit the deployed heroku app [here](https://capture-327-xss.herokuapp.com/) to see your captured data in plaintext

# CSRF

This attack assumes that you're logged into skmehta.cmuisprojects.org already, and then takes the lead from the **totally not obvious** hint found in the HTML source for skmehta.cmuisprojects.org

```html
<head>
  <title>Arbeit :: Home</title>
  <link href="/assets/application-565e4e39ac6812487502b443fa6acb5c.css" media="all" rel="stylesheet" type="text/css" />
  <script src="/assets/application-a526cf8157931dc36008e8ee10970afd.js" type="text/javascript"></script>
	<!-- Not sure what this csrf_meta_tags does, so I'm commenting it out for now... -->
	<!-- Somebody needs to take a look at this later when they have some free time. -->
</head>
```

You can find the page to bait unsuspecting users at `csrf.html`

You can see the attack in action here:

![csrfing the web](https://cloud.githubusercontent.com/assets/6868877/19420088/11c33004-93b2-11e6-8660-99da7928800e.gif)
