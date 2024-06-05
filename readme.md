<h1 align="center" style="font-weight: bold;">BE-07 Project(HOTEL-API)     
    <img src="https://github.com/mesbol6647/BE-04--Pizza-Api-/blob/main/mongo.png" alt="Image Example" width="60px">
    <img src="https://github.com/mesbol6647/BE-04--Pizza-Api-/blob/main/node-express.png" alt="Image Example" width="80px">
    <img src="https://github.com/mesbol6647/JS-01-Todos-/blob/main/images/8621-javascript.png" alt="Image Example" width="50px">
 </h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <h2 id="description">Description</h2>


This project is a backend application utilizing various methods for search, filter, sorting, skip, and session cookies. It is designed to enable users to efficiently search, filter, and manage data.


<h2 id="technologies">💻 Features </h2>

- $or :Allows users to query the database to find documents that match any of the specified conditions.
- $nor:Enables querying the database to find documents that do not match any of the specified conditions.
- $nin:Provides the ability to query the database to find documents where a specified field's value is not in a given array of values.
- distinct:Retrieves distinct values for a specified field across a single collection.
- Custom Filter:Allows users to define and apply custom filtering logic to query the database based on specific criteria. This feature enables complex and flexible data retrieval by combining multiple conditions and logical operators.
- Populate:Mongoose method used to replace a path in a document with actual documents from other collections. It's commonly used to reference related documents.

javascript

- Session Cookie: Manages user sessions and ensures security through session cookies

<h2 id="layout">🎨 Layout</h2>
<img src="https://github.com/mesbol6647/BE-07-HOTEL-API-/blob/main/ERDHOTEL.png" alt="Image Example" >

<h2 id="technologies">💻 Technologies</h2>

- Node.js
- Express.js
- MongoDB
- Mongoose
- Token
- Filter Search Sorting Pagination
- Sync
- Multer
- Morgan

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally


<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/mesbol6647/BE-04--Pizza-Api-.git
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm some-command-to-run
```

<h2 id="colab">🤝 Collaborators</h2>

Special thank you for all people that contributed for this project.

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/81535131?s=400&u=9c81682926b542ea5724b9c7f3186e7f3a68e495&v=4" width="100px;" alt="Mesut Bolat Profile Picture"/><br>
        <sub>
          <b>Mesut Bolat</b>
        </sub>
      </a>
    </td>     
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request

1. `git clone https://github.com/mesbol6647/BE-04--Pizza-Api-.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    logs/
    src/
        configs/
            dbConnection.js
        controllers/
            auth.js
            order.js
            pizza.js
            token.js
            topping.js
            user.js
        helpers/
            passwordEncrypt.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            queryHandler.js
            logger.js
            permissions.js
        models/
        routes/
            auth.js
            document.js
            index.js
            order.js
            pizza.js
            token.js
            topping.js
            user.js
```
