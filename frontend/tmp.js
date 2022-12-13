const form = document.querySelector("form");
const helpText =document.querySelectorAll("form-text");
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const myToast = document.getElementById('toast');
const toast = new bootstrap.Toast(myToast);
const inputs = document.querySelectorAll("input")

const elements = form.elements;
console.log(elements);

/* for (const input of inputs){
    if(input.value == null){
        helpText.classList.add("text-danger")
    }
} */


for (const element of elements) { // for(String str: strings)
    const type = element.type;
    if (type == "date"){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        element.min = `${yyyy}-${mm}-${dd}`;
    }


   if (type != "submit") {
        //element.classList.add("is-invalid");
        element.addEventListener("input", (event)=>{
            const name = element.id;
            const helpText = document.getElementById(`${name}HelpBlock`)
            
            if(element.validity.valid){
                element.classList.remove("is-invalid");
                element.classList.add("is-valid");
                helpText.classList.remove("text-danger");
                helpText.classList.add("text-success");
            }
            else if( element.classList.contains('is-invalid') && element.validity.valid){
                element.classList.remove("is-invalid");
                element.classList.add("is-valid");
                helpText.classList.remove("text-danger");
                helpText.classList.add("text-success");
            }
            else{
                element.classList.remove("is-valid");
                element.classList.add("is-invalid");
                helpText.classList.remove("text-succes");
                helpText.classList.add("text-danger");

            }

        })
        
    }
}

const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        'customClass': 'custom-tooltip',
      })
})

/* function changesValidations(){
    const name = element.name;
    const helpText = document.getElementById(`${name}HelpBlock`)
    helpText.classList.remove("text-danger");
    helpText.classList.add("text-success");
} */

//element.addEventListener("change", changesValidations);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    for (const element of elements){
        element.classList.remove("is-valid")
    }
    toast.show();
})