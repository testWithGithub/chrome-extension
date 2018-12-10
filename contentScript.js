(function() {
    
const htmlToElement=(html)=> {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
    
const bug= (data) =>`<div class="State State--yellow">
<svg class="octicon octicon-bug" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"></path></svg>
    ${data}
</div>`;

const content = document.getElementsByClassName("TableObject-item");
const element =  document.createElement("div");
const element1  = htmlToElement(bug('BUG')); 

element.id = "zzz";
element.innerHTML = bug;
content[0].appendChild(element1)
//const label = document.getElementsByClassName("State State--green");
//content[0].appendChild(label[0]);
//content[0].appendChild(label[0]);
//content[0].innerHTML= bug;
//     document.body.style.backgroundColor = "blue";
//     const sidebar = document.getElementById("partial-discussion-sidebar");
//     console.log(`sidebar`,sidebar);
//     const element =  document.createElement("div");
//     element.classList.add("discussion-sidebar-item js-discussion-sidebar-item");
//     const details = element.appendChild.add("details")
//     details.classList.add("details-reset details-overlay select-menu js-select-menu js-dropdown-details");
//     const summery = details.appendChild.add("summery")
//     summery.classList.add(" text-bold discussion-sidebar-heading discussion-sidebar-toggle");
//    const data =   document.createTextNode("maty")
//    summery.appendChild(data);
//     sidebar.appendChild(element);
    // var t3 = document.getElementById("time3");
    //     console.log(t3);//works;
    //     return t3;

})();