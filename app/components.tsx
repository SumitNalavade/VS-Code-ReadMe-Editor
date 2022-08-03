import React from "react";
import ReactMarkdown from "react-markdown";

import IComponent from "./utils/componentInterface";

const components: IComponent[] = [
    {
        name: "Acknowledgements",
        content:`
## Acknowledgements  

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
`
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
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

~~~http
  GET /api/items/$\{id}
~~~

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |
#### add(num1, num2)
Takes two numbers and returns the sum.
`
    },
    {
        name: "Appendix",
        content: `
## Appendix  

Any additional information goes here
`
    },
    {
        name: "Authors",
        content: `
## Authors  

- [@SumitNalavade](https://www.github.com/SumitNalavade)
`
    },
    {
        name: "Badges",
        content: `
## Badges  

Add badges from somewhere like: [shields.io](https://shields.io/)  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
        `
    },
    {
        name: "Color Reference",
        content:  `
## Color Reference  

| Color             | Hex                                                                |  
| ----------------- | ------------------------------------------------------------------ |  
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |  
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |  
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |  
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |  
        `
    },
    {
        name: "Contributing",
        content: `
## Contributing  

Contributions are always welcome!  

See \`contributing.md\` for ways to get started.  

Please adhere to this project's \`code of conduct\`.  
`
    },
    {
        name: "Demo",
        content: `
## Demo  

Insert gif or link to demo  
`
    },
    {
        name: "Deployment",
        content: `
## Deployment  

To deploy this project run  

\`\`\`bash
  npm run deploy
\`\`\`
`
    },
    {
        name: "Documentation",
        content: `
## Documentation  

[Documentation](https://linktodocumentation)
`
    },
    {
        name: "Environment Variables",
        content: `
## Environment Variables  

To run this project, you will need to add the following environment variables to your .env file  
\`API_KEY\`  

\`ANOTHER_API_KEY\`  
        `
    },
    {
        name: "FAQ",
        content:`
## FAQ  

#### Question 1  

Answer 1  

#### Question 2  

Answer 2
`
    },
    {
        name: "Features",
        content: `
## Features  

- Light/dark mode toggle  
- Live previews  
- Fullscreen mode  
- Cross platform  
`
    },
    {
        name: "Feedback",
        content: `
## Feedback  

If you have any feedback, please reach out to us at fake@fake.com
`
    },
    {
        name: "Github Profile",
        content: `
# Hi, I'm Sumit! 👋  
            
## 🚀 About Me  
I'm a full stack developer...  

## 🔗 Links  
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)  
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)  
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)  

## 🛠 Skills  
Javascript, HTML, CSS...  

## Other Common Github Profile Sections  
👩‍💻 I'm currently working on...  

🧠 I'm currently learning...  

👯‍♀️ I'm looking to collaborate on...  

🤔 I'm looking for help with...  

💬 Ask me about...  

📫 How to reach me...  

😄 Pronouns...  

⚡️ Fun fact...  
`
    },
    {
        name: "Installation",
        content: `
## Installation  
        
Install my-project with npm  
        
\`\`\`bash
  npm install my-project  
  cd my-project  
\`\`\`
`
    },
    {
        name: "Lessons Learned",
        content: `
## Lessons Learned  

What did you learn while building this project? What challenges did you face and how did you overcome them?  
`
    },
    {
        name: "License",
        content: `
## License  

[MIT](https://choosealicense.com/licenses/mit/)
`
    },
    {
        name: "Logo",
        content: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
`
    },
    {
        name: "Optimizations",
        content: `
## Optimizations  

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility
`
    },
    {
        name: "Related",
        content: `
## Related  

Here are some related projects  

[Awesome README](https://github.com/matiassingers/awesome-readme)
`
    },
    {
        name: "Roadmap",
        content: `
## Roadmap  

- Additional browser support  

- Add more integrations  
`
    },
    {
        name: "Run Locally",
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
`
    },
    {
        name: "Screenshots",
        content: `
## Screenshots  

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
`
    },
    {
        name: "Support",
        content: `
## Support  

For support, email fake@fake.com or join our Slack channel.
`
    },
    {
        name: "Tech Stack",
        content: `
## Tech Stack  

**Client:** React, Redux, TailwindCSS  

**Server:** Node, Express
`
    },
    {
        name: "Title & Description",
        content: `
# Project Title  

A brief description of what this project does and who it's for
`
    },
    {
        name: "Usage/Examples",
        content: `
## Usage/Examples  

~~~javascript  
  import Component from 'my-project'

  console.log("Hello World")
~~~
`
    }
    
];

export default components;