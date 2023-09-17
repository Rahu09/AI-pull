# a2aproject

> App LINK [a2aproject](https://github.com/apps/a2aproject)

## Summary Report: Developing an AI-Powered GitHub App
- In the pursuit of simplifying the life of codebase maintainers, the goal of this project was to create an application capable of providing a quick understanding of the purpose and potential issues within large codebase pull requests. The chosen approach involved harnessing the power of artificial intelligence (AI) for this purpose.

- Initially, I embarked on this project with a limited understanding of GitHub apps, prompting me to dive into GitHub's documentation to gain insights. However, the time-consuming nature of this approach raised concerns about meeting the project's deadlines, given that I started working on it at 9 pm. Consequently, I opted for the Probot setup recommended in the assignment, which offered a faster route but with slightly less control over the app's functionality.

- Progress was relatively smooth until the crucial step of sending responses as review comments. While my intention was to deliver responses in this manner, I encountered challenges with the endpoint, which may have been misconfigured on my part. Consequently, I resorted to posting responses as pull request comments, which, while functional, had some impact on the user experience.

- Ultimately, I successfully integrated the server with the OpenAI API to generate responses, a task that proved relatively straightforward. However, I believe there are several avenues for improvement for this app:
    1. Seamless Review Comments: Enhancing the app to deliver responses as review comments within the same page would significantly improve user experience and streamline the review process.
    2. iston API Integration: Integrating the Piston API on the server side, as planned, would add valuable functionality to the app. This could enable features such as code analysis and automatic issue labeling using the OpenAI API.
    3. Expanded Utilities: The potential for expanding the app's utility is vast. Incorporating additional features, such as code labeling based on OpenAI API analysis, could make the app even more valuable for codebase maintainers.

- In conclusion, while this AI-powered GitHub app has made strides in simplifying the code review process, there remain opportunities for refinement and expansion. Addressing the suggested improvements would enhance its functionality and user-friendliness, ultimately achieving the initial aim of easing the burdens of codebase maintenance.



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
