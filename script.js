
// active sections
//function showPage(pageId) {
    //document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
   // document.getElementById(pageId).classList.add("active");
  //}

  function showPage(pageId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  
  // navigation bars 
  const navbar = document.getElementById("navbar");

  const defaultNav = `
    <a href="#" onclick="showPage('home')">HOME</a>
    <a href="#" onclick="showPage('about')">ABOUT</a>
  `;

  const dashboardNav = `
    <a href="#" onclick="showPage('round1')">Dashboard</a>
    <a href="#" onclick="showPage('home')">HOME</a>
    <a href="#" onclick="showPage('about')">ABOUT</a>
  `;
  
    if (pageId === "round1") {
      navbar.innerHTML = dashboardNav;
    } else {
      navbar.innerHTML = defaultNav;
    }
  }
  

// alerts 
  function startGame(e) {
    e.preventDefault();
    const name = document.getElementById("ceoName").value;
    const industry = document.getElementById("industry").value;
    const company = document.getElementById("company").value;
    alert(`Alright, ${name}! Let's see if ${company} is as green as it should be in the ${industry} industry!`);
    alert('You will go through three different rounds where you will be presented with real-life business situations. You will have to choose only one solution. And be careful! You will need to keep your ESG and Profit Scores balanced!');
    showPage("round1");
  }
  

// decisions logic 
  function makeDecision(option) {
    alert("You chose Decision " + option);
    // later: adjust scores here
  }
  