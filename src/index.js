import './styles/index.scss';

const openPhoto = () => {
  document.querySelector('body').classList.toggle('open');
};
const init = () => {
  document.querySelector('.btn').addEventListener('click', openPhoto);
};

window.addEventListener('DOMContentLoaded', init, false);
