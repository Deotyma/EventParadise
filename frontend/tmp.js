const form = document.querySelector("form");
//const helpText = document.getElementsByClassName("form-text")
const myToastEl = document.getElementById('toast')

const elements = form.elements;

for (const element of elements) { // for(String str: strings)
    const type = element.type;
    if (type == "date"){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        element.min = `${yyyy}-${mm}-${dd}`;
        //console.log(element.min);
    }
    if (type != "submit") {
        /* console.log(type) */
        element.addEventListener("input", (event)=>{
            element.classList.add("is-invalid");
            if(element.validity.valid){
                element.classList.remove("is-invalid")
                element.classList.add("is-valid");
                //helpText.classList.remove("redTextHelp")
            }
            else if( element.classList.contains('is-invalid') && element.validity.valid){
                element.classList.remove("is-invalid")
                element.classList.add("is-valid");
                //helpText.classList.remove("redTextHelp")
            }
            else{
                element.classList.remove("is-valid");
                element.classList.add("is-invalid");
                //helpText.classList.add("redTextHelp");
            }
        })
    }

}

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



/* const myTooltipEl = document.getElementsByClassName('tool')
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('show.bs.tooltip', () => {
  myTooltipEl.tooltip().mouseover();
})

tooltip.show() */

/* const tooltipList = document.querySelectorAll(`[data-bs-toggle = "tooltip"]`)
const tooltip = bootstrap.Tooltip.getOrCreateInstance(tooltipList)

tooltipList.addEventListener("show.bs.tooltip", ()=>{
    if(tooltipList.classList.contains('is-invalid')){
        tooltip.show()
    }
}) */

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const input = document.querySelector("input");
const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    //if((input.classList.contains('is-invalid'))){
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            'customClass': 'custom-tooltip',
          })
    //}
  
})
