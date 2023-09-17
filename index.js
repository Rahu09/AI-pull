// Deployments API example
// See: https://developer.github.com/v3/repos/deployments/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  require("dotenv").config();
  app.log.info("Yay, the app was loaded!");

  const OpenAI = require("openai");

  const openai = new OpenAI({
    apiKey: process.env.API,
  });

  async function helper(prompt) {
    let ans = "";
    console.log(prompt);
    const chatCompletion = await openai.chat.completions
      .create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      })
      .then((res) => {
        ans = res.choices[0].message.content;
        // console.log(res.choices[0].message.content);
      });
    return ans;
  }

  app.on(["pull_request_review_comment.created"], async (context) => {
    let ans = context.payload.comment;
    let lines = ans.diff_hunk.split("@@")[2].split("\n");
    let newLine = [];
    let newans = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length === 0 || lines[i].charAt(0) === "-") continue;
      else {
        newLine.push(lines[i]);
      }
    }
    for (i = ans.original_start_line; i <= ans.original_line; i++) {
      newans.push(newLine[i]);
    }

    let joined = newans.join("\r\n");
    let prompt = ``;
    if (ans.body === "/explain") {
      prompt = `all lines below will be code explain what is code doing and what it is trying to achive. explaine with the bullet points. \n ${joined}`;
    } else {
      prompt = `${ans.body} \n ${joined}`;
    }

    let res = await helper(prompt);

    console.log(ans.body, ans.original_start_line, ans.original_line, res);

    const issueComment = context.issue({
      body: res,
    });

    return context.octokit.issues.createComment(issueComment);
  });
};
