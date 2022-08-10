import ITemplate from './utils/templateInterface';

const templates: ITemplate[] = [
  {
    name: 'Minimal',
    content: `
# Project Title  
This is an example ReadMe with light selections.  

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

## Contributing  

Contributions are always welcome!  

See \`contributing.md\` for ways to get started.  

Please adhere to this project's \`code of conduct\`.  

## License  

[MIT](https://choosealicense.com/licenses/mit/)
`,
  },
  {
    name: 'Maximal',
    content: `
# Project Title  
This is an example of an in-depth ReadMe.  

## Badges  

Add badges from somewhere like: [shields.io](https://shields.io/)  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)

# Table of contents  
1. [Introduction](#introduction)  
2. [Some paragraph](#paragraph1)  
    1. [Sub paragraph](#subparagraph1)  
3. [Another paragraph](#paragraph2)  

## Screenshots  

![App Screenshot](https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png)

## Tech Stack  

**Client:** React, Redux, TailwindCSS  

**Server:** Node, Express

## Features  

- Light/dark mode toggle  
- Live previews  
- Fullscreen mode  
- Cross platform 

## Lessons Learned  

What did you learn while building this project? What challenges did you face and how did you overcome t

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

## Environment Variables  

To run this project, you will need to add the following environment variables to your .env file  
\`API_KEY\`  

\`ANOTHER_API_KEY\` 

## Acknowledgements  

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Feedback  

If you have any feedback, please reach out to us at fake@fake.com

## License  

[MIT](https://choosealicense.com/licenses/mit/)
`,
  },
];

export default templates;
