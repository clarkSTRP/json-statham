fetch('./movies.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    originalData = data;
    IncludeData(data);
})


    function IncludeData(data){
        const MovieCardContainer = document.getElementById('test');
        for(let i=0;i < data.length; i++){
    let div = document.createElement("div");
    div.id = 'div'+[i];
    div.innerHTML = data[i].Title;
    MovieCardContainer.appendChild(div);    
         }
    }
       function displayOriginalData() {

        let MainContainer = document.getElementById('test');
        let divs = Array.from(MainContainer.querySelectorAll('div'));
        for (let i = 0; i < divs.length; i++) {
            divs[i].remove();
        }
        IncludeData(originalData);
    }
    

    function SortCheckbox(){
        let checkbox = document.getElementById('SortBox')
        if (checkbox.checked) {
           return SortIt();
        } else {
            return displayOriginalData();
        }
    }
    function SortIt() {
        let MainContainer = document.getElementById('test');
        let divs = Array.from(MainContainer.querySelectorAll('div'));
        divs.sort((a, b) => {
            return a.innerHTML.localeCompare(b.innerHTML);
        });
        for (let i = 0; i < divs.length; i++) {
            let removedmovies = document.getElementById('div'+[i]);
            removedmovies.remove();
            let SortedList = document.createElement("div");
            SortedList.id = 'NewID'+[i];
            SortedList.innerHTML = divs[i].innerHTML;
            MainContainer.appendChild(SortedList);
        }
    }


    //SortId.sort((a, b) => a.value.localeCompare(b.value))}
