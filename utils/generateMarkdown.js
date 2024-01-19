// function to generate markdown for README
const badges = {
  Apache: {
    license: "Apache 2.0 License",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  Boost: {
    license: "Boost Software License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  BSD: {
    license: "BSD 3-Clause License",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  "Creative Commons": {
    license: "CC0-1.0",
    badge:
      "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  },
  Eclipse: {
    license: "Eclipse Public License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  "GNU ": {
    license: "GPL v3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  "GNU GPL v2": {
    license: "GPL v2",
    badge:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },
  "GNU AGPL v3": {
    license: "AGPL v3",
    badge:
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  },
  "GNU LGPL v3": {
    license: "LGPL v3",
    badge:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  },
  "GNU FDL v1.3": {
    license: "FDL 1.3",
    badge:
      "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
  },
  "The Hippocratic License 2.1": {
    license: "Hippocratic 2.1",
    badge:
      "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
  },
  "The Hippocratic License 3.0": {
    license: "Hippocratic 3.0",
    badge:
      "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
  },
  "IBM Public License Version 1.0": {
    license: "IPL 1.0",
    badge:
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  },
  "ISC License (ISC)": {
    license: "ISC",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  "MIT License": {
    license: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  "Mozilla Public License 2.0": {
    license: "MPL 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  "Open Data Commons Attribution License": {
    license: "Open Data Commons Attribution",
    badge:
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
  },
  "Open Database License": {
    license: "ODbL",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
  },
  "Public Domain Dedication and License (PDDL)": {
    license: "ODbL",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
  },
  "Perl License": {
    license: "Artistic-2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  "The Artistic License 2.0": {
    license: "Artistic-2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  "SIL Open Font License 1.1": {
    license: "Open Font-1.1",
    badge:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  },
  Unlicense: {
    license: "Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
};
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  email,
  github,
  tests,
}) {
  return `
  # ${title} ${badges[license].badge}


  # Description 
  ${description}

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}
  
  ## Usage 
  ${usage}

  ## License
  ${license}  

  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}  

  ## Questions
  You can reach me with additional questions at this email: [${email}](mailto:${email}) or via [GitHub](https://github.com/${github}) 
`;
}

module.exports = { generateMarkdown, badges };
