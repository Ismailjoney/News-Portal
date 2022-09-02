const loadNews =() =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => allNewsCatagory(data.data.news_category))
}

const allNewsCatagory = (news) => {
    // console.log(news);
    const allNewsNav = document.getElementById(`allNewsNav`);
    news.forEach(allNews => {
        console.log(allNews.category_name)
         const newDiv = document.createElement(`div`);
         newDiv.innerHTML = `
         <ul class="nav d-inline-block">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">${allNews.category_name}</a>
            </li>
       </ul>
         `;
         allNewsNav.appendChild(newDiv);
    });
}

loadNews();