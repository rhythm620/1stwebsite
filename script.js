let url = "https://kontests.net/api/v1/all";

let response = fetch(url);

response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests);

    ihtml= "";

    for(item in contests){
        console.log(contests[item]);
        ihtml += 
        `<div class="card my-2 mx-2" style="width: 22rem;">
            <img src="https://www.zdnet.com/a/img/resize/0a6b0be2f543ddbf313fc83a706b807b77c3c202/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=900&width=1200" class="card-img-top" >
            <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p> Status :${contests[item].status}</p>
            <p> Site : <b> ${contests[item].site}</b></p>
            <p> Starts at :${contests[item].start_time}</p>
            <p> Ends at :${contests[item].end_time}</p>
            <a href="${contests[item].url}" class="btn btn-success my-2">Visit Contest</a>
            </div>
        </div>`
        
    }
    cardContainer.innerHTML =  ihtml;
})

