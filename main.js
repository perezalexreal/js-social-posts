const dataPost = [
    {
        id: 1,
        nome: 'Phil Mangione',
        foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 
        data: '',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil pariatur rem voluptatibus odio animi, eius dolorem doloribus deserunt voluptatum ducimus sed iure ipsam voluptas ullam laudantium! Et, iusto vero.',
        immagine: '',
        likes: 80
    },
    {
        id: 2,
        nome: 'Sofia Perlari',
        foto: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
        data: '',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil pariatur rem voluptatibus odio animi, eius dolorem doloribus deserunt voluptatum ducimus sed iure ipsam voluptas ullam laudantium! Et, iusto vero.',
        immagine: '',
        likes: 120
    }

]


let container = document.getElementById('container');



// function popolationData(){
//     container.innerHTML = `        <div class="post">
//     <div class="post__header">
//         <div class="post-meta">                    
//             <div class="post-meta__icon">
//                 <img class="profile-pic" src="${}" alt="${}">                    
//             </div>
//             <div class="post-meta__data">
//                 <div class="post-meta__author">${}</div>
//                 <div class="post-meta__time">${}</div>
//             </div>                    
//         </div>
//     </div>
//     <div class="post__text">${}</div>
//     <div class="post__image">
//         <img src="${}" alt="">
//     </div>
//     <div class="post__footer">
//         <div class="likes js-likes">
//             <div class="likes__cta">
//                 <a class="like-button  js-like-button" href="#" data-postid="1">
//                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                     <span class="like-button__label">Mi Piace</span>
//                 </a>
//             </div>
//             <div class="likes__counter">
//                 Piace a <b id="like-counter-1" class="js-likes-counter">${}</b> persone
//             </div>
//         </div> 
//     </div>            
// </div>`;
// }



for(let i = 0; i < dataPost.length ; i++){
    container.innerHTML += `        <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${dataPost[i].foto}" alt="${dataPost[i].nome}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${dataPost[i].nome}</div>
                <div class="post-meta__time">${dataPost[i].data}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${dataPost[i].testo}</div>
    <div class="post__image">
        <img src="${dataPost[i].immagine}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${dataPost[i].likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`;

}



