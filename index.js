const details = [
  {
    title: 'Tonic',
    list: {
      list1: 'CANOPY',
      list2: 'Back End Dev',
      list3: '2015',
    },
    image: 'Snapshoot Portfolio 2.svg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    lang: {
      lang1: 'html',
      lang2: 'css',
      lang3: 'js',
      lang4: 'ruby',
    },
    cardNumber: 'card-number-one',
  },
  {
    title: 'Multi-Post Stories',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'Snapshoot Portfolio desktop.svg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    cardNumber: 'card-number-two',
  },
  {
    title: 'Facebook 360',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'Snapshoot Portfolio desktop.svg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    cardNumber: 'card-number-three',
  },
  {
    title: 'Uber',
    list: {
      list1: 'Uber',
      list2: 'Lead Developer',
      list3: '2015',
    },
    image: 'Snapshoot Portfolio (1).svg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    cardNumber: 'card-number-four',
  },
];
// eslint-disable-next-line no-plusplus
const parpopup = document.querySelector('.parpopup');
// eslint-disable-next-line camelcase
const parpopup__popup = document.querySelector('.parpopup__popup');
function detail(projectCardNumber) {
  parpopup.style.display = 'flex';
  const update = details.filter((card) => card.cardNumber === projectCardNumber);
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
  <img src="${update[0].image}" alt="" class="responsive"/>
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
      <button class="live"><span>See live</span> <i class="fa-brands fa-linkedin"></i></button><button class="live">See source <i class="fab fa-github"></i></button>
    </div>
  </div>
</div>

  `;
}

function closes() {
  parpopup.style.display = 'none';
}
if (1 === 2) {
  closes();
  detail('card-number-one');
}
window.onclick = function closeOnWindowClick(event) {
  if (event.target === parpopup) {
    parpopup.style.display = 'none';
  }
};
