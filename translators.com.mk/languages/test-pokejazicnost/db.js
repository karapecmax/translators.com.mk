<script>
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
    el.addEventListener('click',()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent=data[attr].title;
        descrEl.textContent=data[attr].description;

    });
});

var data={
    "english":{
        "title":"Hello World",
        "description":
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos architecto, ipsa in vitae assumenda, blanditiis quod commodi fugit quasi dolores, repellendus quis. Autem facilis accusamus perferendis eveniet ipsam id dolor natus tempora blanditiis magnam saepe distinctio ab quia vel, fugit neque at reiciendis culpa nesciunt dolorem, voluptatibus magni. Atque consequuntur cum at voluptas nisi doloremque possimus laborum explicabo distinctio et id blanditiis mollitia maxime impedit, voluptatem reprehenderit fuga rerum odio quia esse cupiditate repudiandae dignissimos? Architecto quidem sit sint aliquid?"
    
},
"macedonian":{
        "title":"Здраво Свето",
        "description":
        "Здраво свету ние пробаваме да направиме страна со повеќе јазици за нашата мила и драга сунчица"
        "service":
        "bla bla"
},
}
</script>