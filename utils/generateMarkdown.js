// function to generate markdown for README


function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributers,
  email,
  github,
  tests,
}) {


const badges = {
  "Apache":{
  license: "Apache 2.0 License",
  badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
},
  "Boost":{
  license: "Boost Software License 1.0",
  badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
},
"BSD":{
  license: "BSD 3-Clause License",
  badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
},
"Creative Commons":{
  license: "CC0-1.0",
  badge: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
},
"Eclipse":{
  license: "Eclipse Public License 1.0",
  badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
},
}




License


GNU
GNU GPL v3
License: GPL v3
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

GNU GPL v2
License: GPL v2
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

GNU AGPL v3
License: AGPL v3
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

GNU LGPL v3
License: LGPL v3
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

GNU FDL v1.3
License: FDL 1.3
[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)

The Organization for Ethical Source
The Hippocratic License 2.1
License: Hippocratic 2.1 [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)

The Hippocratic License 3.0
License: Hippocratic 3.0 [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)

IBM
IBM Public License Version 1.0
License: IPL 1.0
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

ISC
ISC License (ISC)
License: ICL
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

MIT
The MIT License
License: MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Mozilla
Mozilla Public License 2.0
License: MPL 2.0
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

Open Data Commons
Attribution License (BY)
License: Open Data Commons Attribution
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

Open Database License (ODbL)
License: ODbL
[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)

Public Domain Dedication and License (PDDL)
License: ODbL
[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)

Perl
The Perl License
License: Artistic-2.0
[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

The Artistic License 2.0
License: Artistic-2.0
[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

SIL
SIL Open Font License 1.1
License: Open Font-1.1
[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)

Unlicense
The Unlicense
License: Unlicense
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

WTFPL
The Do What the Fuck You Want to Public License
License: WTFPL
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

Zlib
The zlib/libpng License
License: Zlib
[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
]


  const badge;
  switch(license){
    case "Apache" : badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "Boost" : badge = "[![License]([![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    case "BSD-3" : badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" // TODO: Check
    case "Creative Commons": badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    case "Eclipse": badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    case "GNU": badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "The Hippocratic License": badge = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
    case "IBM": badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    case "ISC": badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    case "MIT": badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "Mozilla" : badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    case "Open Data Commons" : badge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"

Open Database License (ODbL)
License: ODbL
[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)

Public Domain Dedication and License (PDDL)
License: ODbL
[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)

Perl
The Perl License
License: Artistic-2.0
[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

The Artistic License 2.0
License: Artistic-2.0
[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

SIL
SIL Open Font License 1.1
License: Open Font-1.1
[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)

Unlicense
The Unlicense
License: Unlicense
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

WTFPL
The Do What the Fuck You Want to Public License
License: WTFPL
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

Zlib
The zlib/libpng License
License: Zlib
[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
  }

  return `
  # ${title}

  # Description 
  ${description}

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
    ${installation}
  
  ## Usage 
    ${usage}

  ## License
  ${license}  

  ## Contributing
  ${contributers}
  
  ## Tests
  ${tests}  

  ## Questions
  You can reach me with additional questions at this email: [${email}](${email}) or via [GitHub](${github}){}  
`;
}

module.exports = generateMarkdown;
