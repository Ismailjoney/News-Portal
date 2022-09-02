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
         <ul class="nav d-inline-block">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onclick ="allnewBlog('${allNews.category_id}')">${allNews.category_name}</a>
            </li>
       </ul>
         `;
         allNewsNav.appendChild(newDiv);
    });
}

//
const allnewBlog = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data =>  displayNews(data.data))
}

const displayNews = (news) => {
    console.log(news);
    const displayNewsBlog = document.getElementById(`displayNewsBlog`);
    displayNewsBlog.innerHTML="";

      news.forEach(singleNews =>{
        console.log(`singleNews`)
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
                        
                        <div class="d-flex align-items-center mt-4">
                        <img class="news-writer" src="${singleNews.author.img}" class="img-fluid rounded-start" alt="...">
                        <p class="card-text p-3 fw-bold">${singleNews.author.name ? singleNews.author.name : `no found writer`}</p> 
                        </div>
                    </div>
                </div>
            </div>
        
        `;
        displayNewsBlog.appendChild(div)
      })

}
 

loadNews();