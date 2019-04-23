const
    jobs = require('gitjobs'),
    inquirer = require('inquirer')


async function discardPrompt(results) {
    const displayPostions = results.map(result => {
        return { name: `${result.title} at ${result.location}`, value: result.id}
    })

    return inquirer.prompt([{
        type: 'list',
        name: 'Positions',
        choices: displayPostions,
    }])
}

async function search(keyword) {
    const results=await jobs.search(keyword)
    const choice_id=await discardPrompt(results)
    const id=Object.values(choice_id)[0]
    getItem(id)
}


async function getItem(id) {
    const jobdetail=await jobs.getItem(id)
    console.log(`Title: ${jobdetail.title}\n`)
    console.log(`Description: ${jobdetail.description}\n`)
    console.log(`Apply: ${jobdetail.how_to_apply}\n`)
    console.log(`Url: ${jobdetail.url}\n`)
}
module.exports = {
    search,
    getItem
}