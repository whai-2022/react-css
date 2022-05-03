# Fullstack boilerplate with CSS Libraries

## Getting Started

### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies (you will need to run this again when switching into some branches)
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

To use one css library for your project, merge that branch into main.

```
git checkout main
git merge [branch-name of libray you want to use]
```

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* Branches with CSS libraries preconfigured with sample code
  * vanilla css  
  * Tailwind
  * Styled-Components
  * Chakra-UI   
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)
