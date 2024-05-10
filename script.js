const password = document.querySelector("#pwd")
const confirm = document.querySelector("#confirm-pwd")
const button = document.querySelector("button")

button.addEventListener("click", (e) => {
    if (password.value === confirm.value) {
        button.type = "submit"
        alert("Login successful")
    } else {
        button.type = "button"
        password.value = ""
        confirm.value = ""
        alert("Passwords do not match")
    }
})