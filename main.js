var catogrys = [];
var Row = document.getElementById("Row");
var MMORPG = document.getElementById("MMORPG");
var navbar = document.querySelector("nav");
var header = document.querySelector("header");
var mmm = document.getElementById("mmm")


window.addEventListener("load", function () {
    getdata("MMORPG")
});


async function getdata(cat) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0ee8da8eb8mshffe536985706046p120588jsnbed496d1eb24',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
    catogrys = await api.json();
    displaydata(catogrys)

};



let ullist = document.querySelectorAll('ul li ');
for (let i = 0; i < ullist.length; i++) {
    ullist[i].addEventListener('click', function (e) {
        getdata(e.target.innerHTML)

    });

};





function displaydata(catogrys) {
    var box = '';
    for (let i = 0; i < catogrys.length; i++) {
        box += `
         
        <div class="col-lg-3 col-md-6 mahm my-3">

        <div class=" card " onclick="getdatacustom(${catogrys[i].id})"  >
          <img src="${catogrys[i].thumbnail}"   class="w-100 p-3 " alt="...">
          <div class="card-body" >
            <div class="d-flex justify-content-between ">
              <h5 class="card-title ">${catogrys[i].title}</h5>
              <button class="text-white btn ">free</button>

            </div>
            <p class="card-text ">${catogrys[i].short_description.split(" ", 8)}.</p>
          </div>
          <hr class="">
          <div class="d-flex justify-content-between ">
            <span class="badge badge-color">${catogrys[i].genre}</span>
            <span class="badge badge-color">${catogrys[i].platform}</span>
          </div>
        </div>

      </div><!-- 1 -->
        `
    }
    Row.innerHTML = box


};


let recive = [];
let Roww = document.getElementById("Roww")

async function getdatacustom(rid) {


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0ee8da8eb8mshffe536985706046p120588jsnbed496d1eb24',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const rec = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${rid}`, options);
    recive = await rec.json();

    Row.classList.replace("d-flex", "d-none");
    navbar.classList.replace("d-flex", "d-none");
    header.classList.replace("d-flex", "d-none");
    Roww.classList.replace("d-none", "d-flex");

    displaydatacustom(recive)
};


function displaydatacustom(recive) {
    var box = ' '
    box += `
    <h4 class="text-white">Details Game</h4>

    <div class="col-md-5">
        <img src="${recive.thumbnail}" width="80%"  alt="">

    </div><!-- 4 -->

    <div class="col-md-7 text-white">
    <i id="mmm" class="fas fa-window-close" onclick="zero()"></i>






    <h2>Title: ${recive.title}</h2>

    <h5>Category : <span class="eladl">${recive.genre}</span> </h5>

        <h5>Status : <span class="eladl">${recive.platform}</span>  </h5>

        <h5>Platform : <span class="eladl"> Shooter </span></h5>
        <p > ${recive.short_description}</p>
        <a class=" game my-3" href="${recive.game_url}">Show Game</a>

        <a h ></a>

    </div><!-- 8 -->

    `
    Roww.innerHTML = box

  
};
function zero() {

    Row.classList.replace("d-none", "d-flex");
    navbar.classList.replace("d-none", "d-flex");
    header.classList.replace("d-none", "d-flex");
    Roww.classList.replace("d-flex", "d-none");
}

// $(window).click(function(){
    
// })

$(window).ready(()=>{
    $('#loading').fadeOut(1000,function(){
        $('body').css("overflow-y","scroll")
    })
});



$(window).scroll(function(){
    if($(window).scrollTop() >= $("#comanetnt").offset().top)
    {
        $("nav ").addClass("fixed-top")

    }
    else{
        $("nav ").removeClass("fixed-top")


    }


})







