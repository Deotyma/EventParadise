const form = document.querySelector("form");
//const helpText = document.getElementsByClassName("form-text");
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const myToast = document.getElementById('toast');
const toast = new bootstrap.Toast(myToast);

const elements = form.elements;
console.log(elements);

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
        element.addEventListener("input", (event)=>{
            //const validityState = input.validity;
            if(element.validity.valid){
                element.classList.remove("is-invalid")
                element.classList.add("is-valid");

            }
            else if( element.classList.contains('is-invalid') && element.validity.valid){
                element.classList.remove("is-invalid")
                element.classList.add("is-valid");
               
            }
            else{
                element.classList.remove("is-valid");
                element.classList.add("is-invalid");
            }
        })
    }
}

const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        'customClass': 'custom-tooltip',
      })
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    for (const element of elements){
        element.classList.remove("is-valid")
    }
    console.log("implement toaster");
    toast.show();
})