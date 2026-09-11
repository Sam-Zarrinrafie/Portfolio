const dialog = document.querySelector('.lightbox');
if (dialog) {
  const expanded = dialog.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach((trigger) => trigger.addEventListener('click', () => {
    expanded.src = trigger.dataset.lightbox;
    expanded.alt = trigger.querySelector('img')?.alt || 'Expanded project image';
    dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
}

const model = document.querySelector('#farmtron-model');
const reset = document.querySelector('[data-model-reset]');
if (model && reset) reset.addEventListener('click', () => {
  model.cameraOrbit = '35deg 65deg 120%';
  model.cameraTarget = 'auto auto auto';
  model.fieldOfView = '30deg';
});

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const status = carousel.querySelector('[data-carousel-status]');
  let index = 0;
  const show = (next) => {
    slides[index]?.querySelector('video')?.pause();
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    status.textContent = `${index + 1} / ${slides.length}`;
  };
  carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(index - 1));
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(index + 1));
  let startX = 0;
  track.addEventListener('pointerdown', (event) => { startX = event.clientX; });
  track.addEventListener('pointerup', (event) => { if (Math.abs(event.clientX - startX) > 60) show(index + (event.clientX < startX ? 1 : -1)); });
});
