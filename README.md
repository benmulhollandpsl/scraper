# scraper
web scraper using mongo


* create server file
* create routes files where you use express and express.router()
* create appropriate routes to perform needed CRUD operations
* inside of routes use model make database queries
* the code base is already set up on the front end if you carefully copy over the lines of code in server.js that are  relative to handlebars



site deploys to
 https://git.heroku.com/scrapermashable.git






 Instructions
Create an app that accomplishes the following:

Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

Headline - the title of the article

Summary - a short summary of the article

URL - the url to the original article

Feel free to add more content to your database (photos, bylines, and so on).

Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

Beyond these requirements, be creative and have fun with this!

Tips
Go back to Saturday's activities if you need a refresher on how to partner one model with another.

Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.

Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.