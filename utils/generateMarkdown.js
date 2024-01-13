// function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  credits,
  license,
  badges,
  features,
  contributers,
  tests,
}) {
  return `
  # ${title}

  # Description ${description}

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  
  ${installation}
  
  ## Usage 
  
  ${usage}

  ## Credits
  
  ${credits} 
  
  ## License

  ${license}  

  ## Badges

  ${badges}
  
  ## Features

  ${features}

  ## Contributing

  ${contributers}
  
  ## Tests

  ${tests}  
`;
}

module.exports = generateMarkdown;
