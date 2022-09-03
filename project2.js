const loadNews =() =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => allNewsCatagory(data.data.news_category))
}

const allNewsCatagory = (news) => {
    // console.log(news);
    const allNewsNav = document.getElementById(`allNewsNav`);
    news.forEach(allNews => {
        // console.log(allNews)
         const newDiv = document.createElement(`div`);
         newDiv.innerHTML = `
         <ul class="nav   ">
            <li class="nav-item ">
            <a class="nav-link active loadSpin" aria-current="page" href="#" onclick ="allnewBlog('${allNews.category_id}')">${allNews.category_name}</a>
            </li>
       </ul>
         `;
         allNewsNav.appendChild(newDiv);
    });


}


 
//onclick function  call :
const allnewBlog = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data =>  displayNews(data.data))
}

//onclick function helper
const displayNews = (news) => {
  
    const displayNewsBlog = document.getElementById(`displayNewsBlog`);
    displayNewsBlog.innerHTML="";

      news.forEach(singleNews => {
        console.log(singleNews);
        const div = document.createElement(`div`);
        div.innerHTML = `
            <div class="card mb-3" style="max-width: 840px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${singleNews.title}</h5>
                        <p class="card-text">${singleNews.details.slice(0, 340) + ` ....`}</p>
                        
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <div class="d-flex">
                                <img class="news-writer" src="${singleNews.author.img}" class="img-fluid rounded-start" alt="...">
                                <p class="card-text p-3 fw-bold">${singleNews.author.name ? singleNews.author.name : `no data avilable`}</p> 
                            </div>
                            <div>
                                <p class ="fw-bold">view : ${singleNews.total_view ? singleNews.total_view : "no view"} </p>
                            </div>
                            <div>
                                <button type="button" class="btn btn-success" onclick ="newsDetails('${singleNews._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">News info</button>
                        </div>
                        </div>
                    </div>
                </div>
        
        `;
        displayNewsBlog.appendChild(div)
      })
 }

  const newsDetails = (idInfo) => {
    const url = `https://openapi.programming-hero.com/api/news/${idInfo}`;
    // console.log(a);
    fetch(url)
    .then(res => res.json())
    .then(data => newsAuthurInfo(data.data[0]))
  }

  const newsAuthurInfo = (authorInfo) => {
    console.log(authorInfo.author.name)
     const modalNewsInfo = document.getElementById(`modalNewsInfo`);
     modalNewsInfo.innerHTML = `
     <div class ="d-flex mt-3 mb-3 align-items-center">
        <img class="news-writer" src="${authorInfo.thumbnail_url
        }" class="img-fluid rounded-start" alt="...">
        <p class="fw-bold ms-3"> ${authorInfo.author.name ? authorInfo.author.name : " no found" }</p>
     </div>
        <p class="fw-bold">Badge : ${authorInfo.rating.badge},  <br><br> Number :  ${authorInfo.rating.number} </p>
        <p class="fw-bold">view : ${authorInfo.total_view ? authorInfo.total_view : "no view"} </p>
        `;
      
  }
 
  
 



 

loadNews();