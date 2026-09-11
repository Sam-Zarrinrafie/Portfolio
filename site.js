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
