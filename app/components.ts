import IComponent from "./utils/componentInterface";

const components: IComponent[] = [
  {
    name: "Acknowledgements",
    content: `
## Acknowledgements  
- [Readme.so](https://github.com/octokatherine/readme.so)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)  
`,
    description: `
Acknowledgements are a way to give credit and thanks if you used someone else's code or were just inspired by someone else's work.  
Provide a title and link to some resources.  
`,
  },
  {
    name: "API Reference",
    content: `
## API Reference

#### Get all items  

\`\`\`http
  GET /api/items
\`\`\`  

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`id\` | \`string\` | **Required**. ID of the item you're requesting |

#### Get item

~~~http
  POST /api/items
~~~

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`name\`  | \`string\` | **Required**. Name of a new item |
| \`price\` | \`number\` | **Required**. Name of a new item |  
`,
    description: `
API references with proper documentation are crucial when deploying public APIs.  
At a minimum, be sure to include the parameters and type of the parameter for each route.  
You can use this component to display properly formatted tables for each route.
`,
  },
  {
    name: "Appendix",
    content: `
## Appendix  
Any additional information goes here  
`,
    description: `
An appendix can be used to include any additional information that a reader would need or find interesting
`,
  },
  {
    name: "Authors",
    content: `
## Authors  
- [@SumitNalavade](https://www.github.com/SumitNalavade)  
`,
  },
  {
    name: "Badges",
    popular: true,
    content: `
## Badges  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
`,
    description: `
Badge allow readers to view the current state of your project.  
They can be used to display your projects license, number of starts and deployment status  
[Popular Badges](https://dev.to/envoy_/150-badges-for-github-pnk)
`,
  },
  {
    name: "Color Reference",
    content: `
## Color Reference  
| Color             | Hex                                                                |  
| ----------------- | ------------------------------------------------------------------ |  
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |  
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |  
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |  
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |  
        `,
  },
  {
    name: "Contributing",
    content: `
## Contributing  
Contributions are always welcome!  

See \`contributing.md\` for ways to get started.  

Please adhere to this project's \`code of conduct\`.  
`,
    description: `
A contributing section in a ReadMe is crucial to open source projects.  
They allow you to specify some guidelines on contributing for those who are new to your project.  
You can make a 'CONTRIBUTING.md' file directly in VS Code using this editor!
`,
  },
  {
    name: "Demo",
    popular: true,
    content: `
## Demo  
Insert gif or link to demo  
`,
  },
  {
    name: "Deployment",
    content: `
## Deployment  
To deploy this project run  

\`\`\`bash
  npm run deploy
\`\`\`  
`,
  },
  {
    name: "Documentation",
    content: `
## Documentation  
[Documentation](https://linktodocumentation)  
`,
  },
  {
    name: "Environment Variables",
    content: `
## Environment Variables  
To run this project, you will need to add the following environment variables to your .env file  
\`API_KEY\`  

\`ANOTHER_API_KEY\`  
`,
    description: `
A section for environment variables are crucial to open source projects.  
They allow contributors to setup a local development environment with anything they may need.  
Be sure to list how contributors can tokens like API Keys and more.
`,
  },
  {
    name: "FAQ",
    content: `
## FAQ  

#### Question 1  

Answer 1  

#### Question 2  

Answer 2  
`,
  },
  {
    name: "Features",
    popular: true,
    content: `
## Features  
- Accessibility in VS Code  
- Download directly to project root  
- Live Previews    
`,
  },
  {
    name: "Feedback",
    content: `
## Feedback  
If you have any feedback, please reach to me at vs.nalavade2003@gmail.com  
`,
  },
  {
    name: "Lessons Learned",
    content: `
## Lessons Learned  
What did you learn while building this project? What challenges did you face and how did you overcome them?  
`,
    description: `
A 'Lessons Learned' component is great for projects where you've tried something new.  
This can be anything from a couple words on some new technologies you tried or can be a full analysis of the problems you experienced and how you overcame them.
`,
  },
  {
    name: "License",
    popular: true,
    content: `
## License  
[MIT](https://choosealicense.com/licenses/mit/)  
`,
    description: `
Make sure to add a license to your project, and a section to your ReadMe to protect your work and to allow visitors to use it.  
[Choose a License](https://choosealicense.com/)  
`,
  },
  {
    name: "Logo",
    content: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)  
`,
  },
  {
    name: "Optimizations",
    content: `
## Optimizations  
What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility  
`,
  },
  {
    name: "Related",
    content: `
## Related  
Here are some related projects  

[ReadMe.so](https://github.com/octokatherine/readme.so)  
[Awesome README](https://github.com/matiassingers/awesome-readme)  
`,
  },
  {
    name: "Roadmap",
    content: `
## Roadmap  
- Additional browser support  

- Add more integrations  
`,
  },
  {
    name: "Run Locally",
    popular: true,
    content: `
## Run Locally  
Clone the project  

~~~bash  
  git clone https://link-to-project
~~~

Go to the project directory  

~~~bash  
  cd my-project
~~~

Install dependencies  

~~~bash  
npm install
~~~

Start the server  

~~~bash  
npm run start
~~~  
`,
    description: `
A 'Run Locally' section in a ReadMe is crucial for open source projects.  
This component allows contributors to install and run your project locally to work on contributions.  
Make sure to describe all the steps necessary to getting your project up and running locally.
`,
  },
  {
    name: "Images",
    popular: true,
    content: `
## Screenshots  
![App Screenshot](https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png)  
`,
  },
  {
    name: "Support",
    content: `
## Support  
For support, email fake@fake.com or join our Slack channel.  
`,
  },
  {
    name: "Table of Contents",
    popular: true,
    content: `
# Table of contents  
1. [Introduction](#introduction)  
2. [Some paragraph](#paragraph1)  
    1. [Sub paragraph](#subparagraph1)  
3. [Another paragraph](#paragraph2)  
`,
  },
  {
    name: "Tech Stack",
    popular: true,
    content: `
## Tech Stack  
**Client:** TypeScript, React, Next.js  

**Server:** Node, Express, GraphQL  
`,
  },
  {
    name: "Title & Description",
    popular: true,
    content: `
# Project Title  
A brief description of what this project does and who it's for  
`,
  },
  {
    name: "Usage/Examples",
    popular: true,
    content: `
## Usage/Examples  
~~~javascript  
  import Component from 'my-project'

  console.log("Hello World")
~~~  
`,
  },
];

export default components;
