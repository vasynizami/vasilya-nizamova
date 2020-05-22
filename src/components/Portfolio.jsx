import React from 'react';
import Project1 from '../img/wherepartyat.png';
import Project2 from '../img/escapenyc.png';
import Project3 from '../img/urbansmart.png';
import Project4 from '../img/my-recipe-book.png';
import Project5 from '../img/al-di-la.png';
import Project6 from '../img/fresh-cucumbers.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <img src={Project1}/>
      <img src={Project2} />
      <img src={Project3} />
      <img src={Project4} />
      <img src={Project5} />
      <img src={Project6} />
    </div>
  )
}
export default Portfolio;
