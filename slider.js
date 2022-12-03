
let imgclass = document.querySelector('.imgclass');
let button = document.getElementsByClassName('button')
let imageArray = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg','f.jpg', 'g.jpg', 'h.jpg', 'i.jpg', 'j.jpg'];
let i = 0;


let next = ()=>{
  if (i>= imageArray.length)
    i =-1; i ++;
    return imageslide()
    next.addEventListener ('click', next)
  

}

let prev = ()=>{
  if (i<= imageArray.length)
    i --;
    return imageslide()
    prev.addEventListener ('click', prev)
  }

  let imageslide = ()=>{
    // imgclass.setAttribute (`"src", ../image ${imageArray}[i]`)
     imgclass.setAttribute('src', 'image/'+imageArray[i]);
  }