# gitjob_app

A cli app and a custom node module using github job api.

For these two endpoints were used:

1) SEARHCING - https://jobs.github.com/positions.json?search=[keyword]
2) DATA FETCH - https://jobs.github.com/positions/[ID].json

## Prerequisites

- [Install node](https://nodejs.org/en/download/)

## To run the 

- cd into the folder gitjobs_app where there are 2 file namely app.js and cli.js
- Run the follwing into the terminal
```sh
$ cd gitjobs_app
$ node cli.js search -k python
```
- Once entered the command, the list of releveant jobs will pop-up.
- Select any one and press enter, all the details will be available

### For more information look at the video midterm.mp4
