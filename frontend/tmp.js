const form = document.querySelector("form");
//const helpText = document.getElementsByClassName("form-text")
const myToastEl = document.getElementById('toast');
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

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
    /* console.log("implement form reset"); */
    form.reset();
    for (const element of elements){
        element.classList.remove("is-valid")
    }
    console.log("implement toaster");
    myToastEl.addEventListener('show.bs.toast', () => {
        myToastEl.isShown()
    })

    toast.innerHTML = `
    <div class="toast-body">
      L'événement est envoyé.
    </div>
    <div id="myToast" class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
    `
});