export const scrollToElem = (elem) => {
  const top = document.querySelector('.introContainer');
  const mid = document.querySelector('.pageContainer');
  const bottom = document.querySelector('.infoContainer');

  const execScroll = (elem) => {
    switch (elem) {
      case 'top':
        top.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      case 'mid':
        mid.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
        break;
      case 'bottom':
        bottom.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
        break;
      default:
        top.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
        break;
    }
  };
  return execScroll(elem);
};
export const showModal = (event, modal) => {
  const ev = document.createEvent('HTMLEvents');
  ev.initEvent(modal, true, false);
  event.target.dispatchEvent(ev);
};

