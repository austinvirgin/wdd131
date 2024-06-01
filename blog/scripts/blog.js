
articles.forEach(article => {
  const articlebook = document.createElement('section');
  articlebook.classList.add('book');

  const articleEl = document.createElement('section');
  articleEl.classList.add('book_rating');

  const articledate = document.createElement('h2');
  articledate.id = 'book' + article + 'date';
  articledate.innerHTML = article.date;

  const articleage = document.createElement('p');
  articleage.id = 'book' + article.id + 'age';
  articleage.innerHTML = article.ages;

  const articlegenre = document.createElement('p');
  articlegenre.id = 'book' + article.id + 'genre';
  articlegenre.innerHTML = article.genre;

  const articlestars = document.createElement('p');
  articlestars.id = 'book' + article.id + 'stars';
  articlestars.innerHTML = article.stars;

  const bookinfo = document.createElement('section');
  bookinfo.classList.add('book_info');

  const booktitle = document.createElement('h3');
  booktitle.id = 'book' + article.id + 'title';
  booktitle.innerHTML = article.title;

  const articlesection = document.createElement('section');
  articlesection.classList.add('book_img');

  const articleimg = document.createElement('img');
  articleimg.id = 'book' + article.id + 'img';
  articleimg.src = article.imgSrc;
  articleimg.alt = article.imgAlt;

  bookdescription = document.createElement('p');
  bookdescription.id = 'book' + article.id + 'description';
  bookdescription.innerHTML = article.description;
  const booklink = document.createElement('a');
  booklink.href = "#";
  booklink.innerHTML = " Read More...";


  document.querySelector('#maincontent').appendChild(articlebook);
  articlebook.appendChild(articleEl);
  articlebook.appendChild(bookinfo);

  bookdescription.appendChild(booklink);
  articleEl.appendChild(articledate);
  articleEl.appendChild(articleage);
  articleEl.appendChild(articlegenre);
  articleEl.appendChild(articlestars);
  bookinfo.appendChild(booktitle);
  bookinfo.appendChild(articlesection);
  articlesection.appendChild(articleimg);
  bookinfo.appendChild(bookdescription);
});
