
function copyText() {
  const text = document.getElementById("outputText").innerText;
  const msg = document.getElementById("msg");

  navigator.clipboard.writeText(text)
    .then(() => {
      msg.innerText = "Copied ✅";
    })
    .catch(() => {
      msg.innerText = "Failed ❌";
    });

  setTimeout(() => {
    msg.innerText = "";
  }, 2000);
}

async function generateLetter() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  const loading = document.getElementById("loading");
  const outputBox = document.getElementById("outputBox");
  const outputText = document.getElementById("outputText");

  loading.classList.remove("hidden");
  outputBox.classList.add("hidden");

  try {
    const response = await fetch("https://week-4-mission4.onrender.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, role, company, skills })
    });

    const data = await response.json();

  
    outputText.innerText = data.result;

    loading.classList.add("hidden");
    outputBox.classList.remove("hidden");

  } catch (error) {
    loading.innerText = "Error generating cover letter!";
    console.log(error);
  }
}
