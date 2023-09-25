let form = document.getElementById("form");
let username = document.getElementById("name");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordAgain = document.getElementById("password-again");
let birth = document.getElementById("birthdate");
let phone = document.getElementById("phone");
let cpf = document.getElementById("cpf");
let cep = document.getElementById("cep");
let address = document.getElementById("address");
let number = document.getElementById("number");
let complement = document.getElementById("complement");
let neighborhood = document.getElementById("neighborhood");
let city = document.getElementById("city");
let uf = document.getElementById("uf");
let file = document.getElementById("file");
let check = document.getElementById("check");

cep.addEventListener('change', (event) => {
  const cepNumbers = cep.value.replace('-', '');
  const url = `https://viacep.com.br/ws/${cepNumbers}/json/`;

  axios.get(url)
    .then(response => {
      const data = response.data;
      console.log(data)

      cep.value = data.cep;
      address.value = data.logradouro;
      neighborhood.value = data.bairro;
      city.value= data.localidade;
      uf.value= data.uf;

    })
    .catch(error => {
      // Tratar erros, se houver algum
      console.error("Erro na requisição: " + error);
    });
});

form.addEventListener('submit', (event) => {


  let currentDate = new Date();
  let birthdate = new Date(birth.value)

  event.preventDefault();

  let isValid = true;

  let expRegName = /^[A-Za-zÀ-ü\s]{2,}$/;
  if (!expRegName.test(username.value)) {
    username.classList.add("is-invalid");
    isValid = false;
  } else {
    username.classList.remove("is-invalid");
  }
  
  let expRegLastName = /^[A-Za-zÀ-ü\s]{2,}$/;
  if (!expRegLastName.test(lastname.value)) {
    lastname.classList.add("is-invalid");
    isValid = false;
  } else {
    lastname.classList.remove("is-invalid");
  }
  
  let expRegEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!expRegEmail.test(email.value)) {
    email.classList.add("is-invalid");
    isValid = false;
  } else {
    email.classList.remove("is-invalid");
  }
  
  let expRegPassword = /^.{6,}$/;
  if (!expRegPassword.test(password.value)) {
    password.classList.add("is-invalid");
    isValid = false;
  } else {
    password.classList.remove("is-invalid");
  }

  let expRegPasswordAgain = /^.{6,}$/;
  if (!expRegPasswordAgain.test(passwordAgain.value)) {
    password.classList.add("is-invalid");
    isValid = false;
  } else {
    password.classList.remove("is-invalid");
  }
  
  if (password.value !== passwordAgain.value) {
    passwordAgain.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordAgain.classList.remove("is-invalid");
  }

  let years = currentDate.getFullYear() - birthdate.getFullYear();
  if (years < 18) {
    birth.classList.add("is-invalid");
    isValid = false;
  } else {
    birth.classList.remove("is-invalid");
  }
  
  let expRegPhone = /^\d{2} \d{9}$/;
  if (!expRegPhone.test(phone.value)) {
    phone.classList.add("is-invalid");
    isValid = false;
  } else {
    phone.classList.remove("is-invalid");
  }
  
  let expRegCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!expRegCpf.test(cpf.value)) {
    cpf.classList.add("is-invalid");
    isValid = false;
  } else {
    cpf.classList.remove("is-invalid");
  }

  let expRegCep = /^\d{5}-\d{3}$/;
  if (!expRegCep.test(cep.value)) {
    cep.classList.add("is-invalid");
    isValid = false;
  } else {
    cep.classList.remove("is-invalid");
  }

  if (address.value === '') {
    address.classList.add("is-invalid");
    isValid = false;
  } else {
    address.classList.remove("is-invalid");
  }

  if (number.value === '') {
    number.classList.add("is-invalid");
    isValid = false;
  } else {
    number.classList.remove("is-invalid");
  }

  if (neighborhood.value === '') {
    neighborhood.classList.add("is-invalid");
    isValid = false;
  } else {
    neighborhood.classList.remove("is-invalid");
  }

  if (city.value === '') {
    city.classList.add("is-invalid");
    isValid = false;
  } else {
    city.classList.remove("is-invalid");
  }

  if (uf.value === '') {
    uf.classList.add("is-invalid");
    isValid = false;
  } else {
    uf.classList.remove("is-invalid");
  }

  if (isValid) {
    form.reset();
  } 
}
)

