const details = [
  {
    id: 1,
    title: 'Tonic',
    list: {
      list1: 'CANOPY',
      list2: 'Back End Dev',
      list3: '2015',
    },
    image: 'static/imgs/three.png',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    lang: {
      lang1: 'html',
      lang2: 'css',
      lang3: 'js',
      lang4: 'ruby',
    },
    category: 'project1',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'static/imgs/four.png',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project2',
  },
  {
    id: 3,
    title: 'Facebook 360',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'static/imgs/Snapshoot Portfolio.png',
    desc: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project3',
  },
  {
    id: 4,
    title: 'Uber',
    list: {
      list1: 'Uber',
      list2: 'Lead Developer',
      list3: '2015',
    },
    image: 'static/imgs/two.png',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project4',
  },
];
// eslint-disable-next-line no-plusplus
const parpopup = document.querySelector('.parpopup');
// eslint-disable-next-line camelcase
const parpopup__popup = document.querySelector('.parpopup__popup');


function detail( projectCardNumber ) {
  parpopup.style.display = 'flex';
  const update = details.filter((item) => item.category == projectCardNumber);
  parpopup__popup.innerHTML = `
  <div class="head">
  <span class="name">${update[0].title}</span>
  <span id="close" onclick="closes()">&times;</span>
</div>
<ul>
  <li>${update[0].list.list1}</li>
  <li>${update[0].list.list2}</li>
  <li>${update[0].list.list3}</li>
</ul>
<div class="popup__responsive">
  <img src="${update[0].image}" alt="" class="responsive" />
</div>
<div class="types">
  <div class="type">
    <p>${update[0].desc}</p>
  </div>
  <div class="type">
    <ul>
      <li>${update[0].lang.lang1}</li>
      <li>${update[0].lang.lang2}</li>
      <li>${update[0].lang.lang3}</li>
      <li>${update[0].lang.lang4}</li>
    </ul>
    <div class="btns live">
      <button class="live"><span>See live</span> <img src="static/imgs/Icon.png"/></button><button class="live">See source <i class="fab fa-github"></i></button>
    </div>
  </div>
</div>
  
  
  `;
}
// ========================================================================
// eslint-disable-next-line no-unused-vars
function closes() {
  parpopup.style.display = 'none';
}

// ========================================================================
// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === parpopup) {
    parpopup.style.display = 'none';
  }
};
