async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) => {
        if (data.data[0].degrees.gpa.data.type === 'N/A') {
            document.write(
                `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}.
                 I expect to graduate at the age of ${data.data[0].degrees.age.data.type}!`
              )
          } else {
            document.write(
                `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}.
                 I had a GPA of ${data.data[0].degrees.gpa.data.type}, graduating as ${data.data[0].degrees.honors.data.type} at the age of ${data.data[0].degrees.age.data.type}!`
              )
          }
      }
      );
  }
  
  getDegrees("./src/degrees.json");
