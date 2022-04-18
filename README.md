# node-code-test

## Description
A simple Node.JS express server that utilizes the public Github API to query public repositories for open pull requests and number of commits.

## Usage

### Installing
* Run `npm install` to download necessary dependencies

### Running
* Run `npm start` to start server: Should see `Listening on port 3000...`
* Open browser and in Address Bar type `http://localhost:3000/${username}/${repo}`
    * for example `http://localhost:3000/soostone/katip`
    * You will see a list of open pull requests for example:
        `[{
            "id":540170107,
            "number":126,
            "title":"add withLogEnv",
            "author":"ocramz",
            "commit_count":1
            },
            {
            "id":408781016,
            "number":119,
            "title":"Try removing MonadIO superclass",
            "author":"MichaelXavier",
            "commit_count":1
            },
            {
            "id":160559971,
            "number":79,
            "title":"WIP: Bulk elasticsearch scribe",
            "author":"bitemyapp",
            "commit_count":14
            }]`

#### 🙏🏾
Thank you again for giving me the opportunity to showcase my understanding of Node.JS! 
I believe I documented and commented as thorough as I can, I am submitting this as my final commit for this coding challenge.

Some things I would add:
    * CLI commands so that script can be ran in the terminal
    * Other Github functionalities
    * Add GraphQL to queries (If it makes sense)
    * If app were on a bigger scaled I'd add Typescript as well
