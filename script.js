function showPage(pageId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  }
  
  function startGame(e) {
    e.preventDefault();
    const name = document.getElementById("ceoName").value;
    const industry = document.getElementById("industry").value;
    const company = document.getElementById("company").value;
    alert(`Alright, ${name}! Let's see if ${company} is as green as it should be in ${industry}.`);
    showPage("round1");
  }
  
  function makeDecision(option) {
    alert("You chose Decision " + option);
    // later: adjust scores here
  }
  