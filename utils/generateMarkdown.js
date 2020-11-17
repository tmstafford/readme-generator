// function to generate badges based on license
const generateBadge = data => {
  if (data.license == 'GPL') {
    return `
    [![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
    `;
  } else if (data.license == 'MIT') {
    return `
    [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
    `;
  } else if (data.license == 'Apache License 2.0') {
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `;
  } else if (data.license == 'BSD') {
    return `
    [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    `;
  } else if (data.license == 'None') {
    return '';
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${generateBadge(data.license)}

  ## Description
  ${data.description}

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.username}
  If you have additional questions, please contact: ${data.email}
`;
}

module.exports = generateMarkdown;
