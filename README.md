# a2aproject

> A GitHub App built with [Probot](https://github.com/probot/probot) that a2aproject

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start

```
- now go to localhost:3000 and click on register github app.
- follow the installation guide and install the github app on all the repositories in which you want it to funtion.
  (first query may take some time as it is deployed on render(https://dashboard.render.com) which is serverless that's why it only start running it's server after 1st query is made)
- your app will be created.
- after completing everything just add the gpt-3.5-turbo api key in .env file.
- A video example have been given below.

```sh
  API = <your-api-key>
```

## Docker

```sh
# 1. Build container
docker build -t my-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> my-app
```

## DEMO VIDEO
- If you want to see the demo then create a pull req in any of my repository.
- Select the code portion you want to be explained or you want to perform any query on.
- create a pull request review comment "/explain" for ai to explain that code or your custom query.

https://github.com/Rahu09/a2aproject/assets/89607570/1ecff89a-ab81-4a17-98d6-a7145c21683c


## Contributing

If you have suggestions for how my-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Rahul Tiwari
