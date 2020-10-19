const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    /* Pass your questions in here */
    // {
    // type: "input",
    // name: "title",
    // message: "What is your title?"
    // },
    // {
    // type: "input",
    // name: "description",
    // message: "Enter a project description?"
    // },
    // {
    // type: "input",
    // name: "install instructions",
    // message: "Enter instructions."
    // },
    // {
    // type: "input",
    // name: "usage",
    // message: "Enter usage information."
    // },
    // {
    // type: "input",
    // name: "guidelines",
    // message: "Enter contribution guidelines"
    // },
    // {
    // type: "input",
    // name: "test",
    // message: "Enter test instructions"
    // },
    // {
    // type: "list",
    // name: "license",
    // message: "What license would you like to use",
    // choices: [
    //     "HTML", 
    //     "CSS", 
    //     "JavaScript", 
    //     "MySQL"
    //   ]
    // },
    {
        type: "input",
        name: "Profile",
        message: "What is your github name?"
        },
        // {
        // type: "input",
        // name: "email",
        // message: "What is your email?"
        // },
           
      ])
      .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        //creat readme file
    
        fs.writeFile("readme_render.md", null, function(err) {
      
          if (err) {
            console.log("fail!");
            return console.log(err);
    
          }
            console.log("Success!");
        });
    
      })
      .catch(error => {
        if(error.isError) {
          // Prompt couldn't be rendered in the current environment
          console.log("Prompt couldn't be rendered in the current environment");
    
        } else {
          // Something else when wrong
          console.log("something else failed");
    
        }
      });