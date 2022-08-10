import IComponent from './utils/componentInterface';

const components: IComponent[] = [
  {
    name: 'Acknowledgements',
    content: `
## Acknowledgements  
- [Readme.so](https://github.com/octokatherine/readme.so)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)  
`,
  },
  {
    name: 'API Reference',
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
  },
  {
    name: 'Appendix',
    content: `
## Appendix  
Any additional information goes here  
`,
  },
  {
    name: 'Authors',
    content: `
## Authors  
- [@SumitNalavade](https://www.github.com/SumitNalavade)  
`,
  },
  {
    name: 'Badges',
    popular: true,
    content: `
## Badges  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
        `,
  },
  {
    name: 'Color Reference',
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
    name: 'Contributing',
    content: `
## Contributing  
Contributions are always welcome!  

See \`contributing.md\` for ways to get started.  

Please adhere to this project's \`code of conduct\`.  
`,
  },
  {
    name: 'Demo',
    popular: true,
    content: `
## Demo  
Insert gif or link to demo  
`,
  },
  {
    name: 'Deployment',
    content: `
## Deployment  
To deploy this project run  

\`\`\`bash
  npm run deploy
\`\`\`  
`,
  },
  {
    name: 'Documentation',
    content: `
## Documentation  
[Documentation](https://linktodocumentation)  
`,
  },
  {
    name: 'Environment Variables',
    content: `
## Environment Variables  
To run this project, you will need to add the following environment variables to your .env file  
\`API_KEY\`  

\`ANOTHER_API_KEY\`  
`,
  },
  {
    name: 'FAQ',
    content: `
## FAQ  

#### Question 1  

Answer 1  

#### Question 2  

Answer 2  
`,
  },
  {
    name: 'Features',
    popular: true,
    content: `
## Features  
- Accessibility in VS Code  
- Download directly to project root  
- Live Previews    
`,
  },
  {
    name: 'Feedback',
    content: `
## Feedback  
If you have any feedback, please reach to me at vs.nalavade2003@gmail.com  
`,
  },
  {
    name: 'Github Profile',
    content: `
# Hi, I'm Sumit! 👋  
            
## 🚀 About Me  
I'm a student at Texas A&M (Whoop!)...  

## 🔗 Links  
[![portfolio](https://img.shields.io/badge/my_portfolio-1DA1F2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://sumitnalavade.vercel.app/)  
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sumit-nalavade/)  
[![twitter](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SumitNalavade/)  

## 🛠 Skills  
TypeScript, React, GraphQL...  

## Other Common Github Profile Sections  
👩‍💻 I'm currently working on...  

🧠 I'm currently learning...  

👯‍♀️ I'm looking to collaborate on...  

🤔 I'm looking for help with...  

💬 Ask me about...  

📫 How to reach me...  

😄 Pronouns...  

⚡️ Fun fact...  
`,
  },
  {
    name: 'Installation',
    content: `
## Installation  
Install my-project with npm  
        
\`\`\`bash
  npm install my-project  
  cd my-project  
\`\`\`  
`,
  },
  {
    name: 'Lessons Learned',
    content: `
## Lessons Learned  
What did you learn while building this project? What challenges did you face and how did you overcome them?  
`,
  },
  {
    name: 'License',
    popular: true,
    content: `
## License  
[MIT](https://choosealicense.com/licenses/mit/)  
`,
  },
  {
    name: 'Logo',
    content: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)  
`,
  },
  {
    name: 'Optimizations',
    content: `
## Optimizations  
What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility  
`,
  },
  {
    name: 'Related',
    content: `
## Related  
Here are some related projects  

[ReadMe.so](https://github.com/octokatherine/readme.so)  
[Awesome README](https://github.com/matiassingers/awesome-readme)  
`,
  },
  {
    name: 'Roadmap',
    content: `
## Roadmap  
- Additional browser support  

- Add more integrations  
`,
  },
  {
    name: 'Run Locally',
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
  },
  {
    name: 'Images',
    popular: true,
    content: `
## Screenshots  
![App Screenshot](https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png)  
`,
  },
  {
    name: 'Support',
    content: `
## Support  
For support, email fake@fake.com or join our Slack channel.  
`,
  },
  {
    name: 'Table of Contents',
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
    name: 'Tech Stack',
    popular: true,
    content: `
## Tech Stack  
**Client:** TypeScript, React, Next.js  

**Server:** Node, Express, GraphQL  
`,
  },
  {
    name: 'Title & Description',
    popular: true,
    content: `
# Project Title  
A brief description of what this project does and who it's for  
`,
  },
  {
    name: 'Usage/Examples',
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
