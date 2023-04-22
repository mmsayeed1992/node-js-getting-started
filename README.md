# Lab 12: The Ride-Hailing Service, Part 3

- Identify what aspects of the work have been correctly implemented and what have not.

Everything should be working i believe. All of 'Basic Requirement' were implemented. I didn't do 6 of 'Going Beyond' due to time commitments. But the rest of 1-5 Going Beyond should be working as i tested it out. I added Ming to Heroku server as collaborator. All of Lab 12 work is in my Github repo "node-js-getting-started" and also pushed to heroku server for Ming. I updated Lab 10 index.js file with the new heroku server from jordan-marsh.

- Identify anyone with whom you have collaborated or discussed the assignment.

I used below resources:

Ming's class examples and Ming's repository at https://github.com/tuftsdev/WebEngineering/tree/gh-pages/examples

https://expressjs.com/en/api.html

https://stackoverflow.com/questions/7067966/why-doesnt-adding-cors-headers-to-an-options-route-allow-browsers-to-access-my

https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

https://expressjs.com/en/resources/middleware/cors.html

https://stackoverflow.com/questions/44849082/sending-a-json-file-to-express-server-using-js

https://stackoverflow.com/questions/31793971/node-js-problems-with-postgresql-database-insert-operation

https://stackoverflow.com/questions/19085609/trying-to-connect-my-node-js-to-heroku-postgresql-database-following-heroku-pos

https://stackoverflow.com/questions/51924864/express-validator-how-to-check-queries

https://node-postgres.com/features/pooling


- Say approximately how many hours you have spent completing the assignment.

8 hours


# Lab 11: Getting Started with the Server Side using Node.js and Heroku

- Identify what aspects of the work have been correctly implemented and what have not. 

Everything worked as expected. But i updated the js file with Lab 12 so the empty list response [] doesnt show up any more, since i have data in the DB of Lab 12. But without the data in Lab 12, empty list response [] was still working. Ming said he could grade Lab 11 as part of Lab 12, since the objectives are similar to use POST /rides and achieve a response. I added Ming to Heroku server as collaborator.

- Identify anyone with whom you have collaborated or discussed the lab.

I used below resources:

Ming's class examples and Ming's repository at https://github.com/tuftsdev/WebEngineering/tree/gh-pages/examples

https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction


- Say approximately how many hours you have spent completing the lab.

2 hours



# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

Using resources for this example app counts towards your usage. [Delete your app](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-destroy) and [database](https://devcenter.heroku.com/articles/heroku-postgresql#removing-the-add-on) as soon as you are done experimenting to control costs.

By default, apps use Eco dynos if you are subscribed to Eco. Otherwise, it defaults to Basic dynos. The Eco dynos plan is shared across all Eco dynos in your account and is recommended if you plan on deploying many small apps to Heroku. Learn more about our low-cost plans [here](https://blog.heroku.com/new-low-cost-plans).

Eligible students can apply for platform credits through our new [Heroku for GitHub Students program](https://blog.heroku.com/github-student-developer-program).

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
