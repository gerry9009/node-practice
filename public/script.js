const fetchPhone = document.getElementById("fetch-phones");
const createPhone = document.getElementById("create-phone");

const fetchPhones = async () => {
  const response = await fetch("/phones");
  const data = await response.json();

  let phonesHTML = "<h1>Telefonok:</h1>";
  for (const phone of data) {
    phonesHTML += `
        <div class="card mb-2 w-50">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.name}</p>
            </div>
        </div>
    `;
  }

  document.getElementById("phone-list-component").innerHTML = phonesHTML;
};

const submitPhone = async (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const brand = event.target.elements.brand.value;

  const response = await fetch("phones", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, brand }),
  });

  if (response.ok) {
    fetchPhones();
  } else {
    alert("Server error");
  }
};

fetchPhone.addEventListener("click", fetchPhones);
createPhone.addEventListener("submit", submitPhone);
