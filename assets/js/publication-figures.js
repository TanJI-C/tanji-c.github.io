for (const image of document.querySelectorAll('.research-publications .abbr img.preview[data-zoomable]')) {
  const title = image.closest('.row').querySelector('.title').textContent.trim();
  const link = document.createElement('a');
  link.className = 'publication-figure-link';
  link.href = image.src;
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', `Open full-size architecture diagram for ${title} in a new tab`);

  image.alt = `Architecture diagram for ${title}`;
  const picture = image.closest('picture');
  picture.before(link);
  link.append(picture);
}
