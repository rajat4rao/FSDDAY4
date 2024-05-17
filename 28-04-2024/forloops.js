const fs = require('fs');

fs.readFile('resume.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }


  const resumeData = JSON.parse(data);



  // for loop
  const languages = resumeData.technicalSkills.languages;
  for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
  }

  // for in loop
  const personalDetails = resumeData.personalDetails;
  for (let key in personalDetails) {
    console.log(`${key}: ${personalDetails[key]}`);
  }

  // for of loop
  const languagesKnown = resumeData.personalDetails.languagesKnown;
  for (let language of languagesKnown) {
    console.log(language);
  }

  // forEach loop
  
  Object.keys(resumeData.professionalExperience[0]).forEach(function(key) {
  console.log('' + key + ' : ' + resumeData.professionalExperience[0][key])
})

});
