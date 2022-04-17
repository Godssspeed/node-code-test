const axios = require('axios')
//Array to store responses in jsonArr format
let jsonArr = []

module.exports = {
    getPullRequests: (req,res) => {
        //User Input based off of what's passed via the url
        const {username, repo} = req.params
        let url = `https://api.github.com/repos/${username}/${repo}/pulls`
        //Github API Request to get list of PRs
        axios.get(url).then( async response => {

            data = response.data

            // Loop to iterate over data and build object to push into the jsonArr array
            for (let i=0;i<data.length; i++) {
            number = data[i].number
            //Github API Request to list number of commits for each Open PR
            const commits = await axios.get(`${url}/${number}/commits`)
            let newItem = {
                id : data[i].id,
                number,
                title: data[i].title,
                author: data[i].user.login,
                commit_count: commits.data.length
                }
            
                jsonArr.push(newItem)
            }
            
            res.status(200).json(jsonArr)
            console.log(jsonArr)
        }).catch(err => {
            res.status(500).send("Github repository is either private or doesn't exist.")
        })

    }
}