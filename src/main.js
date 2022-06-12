async function getDegrees(url) {
  await fetch(url)
    .then((response) => response.json())

    .then((data) => {
      getDegreeData(data.data[0].degrees.bachelors.data);
      getDegreeData(data.data[0].degrees.gradcertificate.data);
      getDegreeData(data.data[0].degrees.masters.data);
    });
}

let getDegreeData = (obj) => {
  const main = document.querySelector("main");

  const contain = document.createElement("div");
  contain.classList.add("contain");
  contain.style.backgroundImage = `url(${obj.img})`;

  const logo = document.createElement("img");
  logo.classList.add("logo");
  const bgimg = document.createElement("img");
  bgimg.classList.add("bg");
  const line1 = document.createElement("p");
  line1.classList.add("line1");
  const line2 = document.createElement("p");
  line2.classList.add("line2");

  const a = document.createElement("a");
  const link = document.createTextNode("Check out the program!");
  a.appendChild(link);
  a.href = `${obj.website}`;

  logo.src = `${obj.logo}`;

  if (obj.gpa === "N/A" && obj.honors === "N/A") {
    line1.textContent = `My next program will be a ${obj.type} from ${obj.institution}, I expect to finish in ${obj.date}.`;
    line2.textContent = `I hope to finish at the age of ${obj.age}.`;
  } else {
    line1.textContent = `My first degree was a ${obj.type} from ${obj.institution} in ${obj.date}.`;
    line2.textContent = `I had a GPA of ${obj.gpa}, graduating as ${obj.honors} at the age of ${obj.age}.`;
  }

  const section = document.createElement("section");
  contain.appendChild(section);
  section.appendChild(logo);
  section.appendChild(line1);
  section.appendChild(line2);
  section.appendChild(a);

  main.appendChild(contain);
};
