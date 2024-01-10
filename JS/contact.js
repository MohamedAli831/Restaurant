

function validate() {
    let namee = document.querySelector("#name");
    let emaill = document.querySelector("#email");
    let phonee = document.querySelector("#phone");
    let msg = document.querySelector("#message");
    let btn = document.querySelector("#submit");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (namee.value == "" || emaill.value == "" || msg.value == "") {
                alert("fields are required")
            } else {
                sendmail(namee.value, emaill.value, phonee.value, msg.value);
                namee.value= emaill.value= phonee.value= msg.value=""
                alert("Message SEnt Successfully")
            }
        });
    }
}
validate();

function sendmail(namee, emaill, phonee, msg) {
    emailjs.send("service_83nibf4", "template_ay2j2v4", {
        name: namee,
        email: emaill,
        phone: phonee,
        message: msg,
    });
}


let cart = JSON.parse(localStorage.getItem("CART")) || [];




  function renderSubtotal() {
    const totalItemsInCart = document.querySelector("#quantity");
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += item.numberOfUnits;
    });
    totalItemsInCart.innerHTML = `(${totalItems})`;
  }
  renderSubtotal();