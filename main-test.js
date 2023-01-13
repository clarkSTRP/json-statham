fetch('./movies.json')
.then(res => res.json())
.then(data => {
    let dataArr = [];
    for (let i = 0; i <= 5; i++) {
    dataArr.push("data[" + i + "]");
    }
    document.getElementById('test').innerHTML +=

})

let firstMovie = data[0];
let SecondMovie = data[1];
let ThirdMovie = data[2];
let FourthMovie = data[3]
let FithMovie = data[4];
let SixthMovie = data[5]
document.getElementById('test').innerHTML += firstMovie.Title;
document.getElementById('test').innerHTML += SecondMovie.Title;
document.getElementById('test').innerHTML += ThirdMovie.Title;
document.getElementById('test').innerHTML += FourthMovie.Title;
document.getElementById('test').innerHTML += FithMovie.Title;
document.getElementById('test').innerHTML += SixthMovie.Title;

function sortList() {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("id01");
    switching = true;

    while (switching) {

      switching = false;
      b = list.getElementsByTagName("LI");

      for (i = 0; i < (b.length - 1); i++) {

        shouldSwitch = false;

        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

  function SortIt(){
    let MainContainer = document.getElementById('test');
    let DataContainer = MainContainer.querySelectorAll('div');
    DataContainer.sort((a, b) => {
        return a.innerHTML.localeCompare(b.innerHTML);
    });
} 





//last one
function SortIt(){
    for (let i = 0; i <=SortId.length; i++);
    let SortId = document.getElementById(id[i]);
    SortId.sort((a, b) => {
        return a.value.localeCompare(b.value)});
}