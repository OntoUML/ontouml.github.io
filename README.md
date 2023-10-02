# Welcome

The **OntoUML.org - DEV** is a website that aggregates user documentation for [OntoUML projects on GitHub](https://github.com/OntoUML). In this sense, each documentation includes both technical and normative details, as well as tutorials and user guides.

Use the side panel to navigate to the project of your interest, or continue on this page to learn how to contribute to this website.


## Contributing with documentation

The **OntoUML.org - DEV** website is developed using the [Docusaurus](https://docusaurus.io/) framework, an open source documentation generator built on top of [React](https://react.dev/)/Javascript.

Even though knowledge on these technologies is welcome, it is not strictly necessary, since all pages are written using Markdown files.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Start the website

On your first execution, you will need to install all project dependencies using:

```bash
cd ontouml.github.io
npm ci
```

The `cd` command changes the directory you're working with. Then the `npm ci` command install the necessary dependencies in the appropriate versions.

Once all dependencies are installed, you can run a development server:

```bash
npm run start
```

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

The documentation of each project must be contained inside a dedicated folder within `docs/`.

Once finished your contributions, open a pull request to the [ontouml.github.io](https://github.com/OntoUML/ontouml.github.io) repository for deployment.
