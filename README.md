# Front-End Interview Test
### Candidate: Yonathan Pineda

Follow these steps to run the app

```sh
$ git clone https://github.com/mcmakler/frontend-code-challenge.git
$ cd frontend-code-challenge
$ yarn / npm install
$ yarn serve / npm run serve
```

Once all dependencies are installed a browser will automatically open with the application running.

## IMPORTANT NOTE
As the provided API has no CORS enabled for javascript, it gave me the tipical Access-Control-Allow-Origin error

[![N|Solid](https://i.imgur.com/UeM9mOQ.png)](https://i.imgur.com/UeM9mOQ.png)

So I had to install an extension to my browser, you can find it  [here](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=es), once you have the extension installed, you have to enable it, look for this icon [![N|Solid](https://i.imgur.com/4sjffsn.png)](https://i.imgur.com/4sjffsn.png) in your toolbar, enable the `Cross-Origin resource sharing` option

[![N|Solid](https://i.imgur.com/JWZOWLv.png)](https://i.imgur.com/JWZOWLv.png)

Now the requests sent to the API endpoint will not return error with the CORS