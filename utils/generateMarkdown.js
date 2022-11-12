// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "* [License](#license)";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
      This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  <a href="#description">Description</a><br>
  <a href="#installation">Installation</a><br>
  <a href="#usage">Usage</a><br>
  <a href="#con">Contributions</a><br>
  <a href="#tests">Tests</a><br>
  <a href="#questions">Questions</a><br>
  <a href="#license">License</a><br>
  
  ## [Description](#description)
  ${data.description} 
  ## [Installation](#installation)
  ${data.installation} 
  ## [Usage](#usage)
  ${data.usage} 
  ## [Contributions](#con)
  ${data.contributing} 
  ## [Tests](#tests)
  ${data.tests}
  ## [Questions](#questions)
  If you have any questions, please contact me at ${data.email} or visit my GitHub page at
  [${data.username}](${data.github})
  ## [License](#license)
  ${data.license} 
  ## Below is a screenshot of the application
  ![Screenshot](screenshot.png)
  ## Below is a link to the video showing the application in action

  https://drive.google.com/file/d/1JbFNtuZkmBbEuw6eZJO9N0PJ9DMn-ACH/view
  
  `;
}

module.exports = generateMarkdown;
