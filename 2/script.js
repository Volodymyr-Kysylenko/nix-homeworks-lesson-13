function showNotification(options) {
  let notification = document.createElement('div');

  notification.classList.add('notification');
  
  notification.style.top = (options.top) ? options.top + 'px' : '0px';
  notification.style.right = (options.right) ? options.right + 'px' : '0px';
  
  notification.textContent = options.html;
  
  if (options.className) notification.classList.add(options.className);

  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: 'Hello!',
  className: 'welcome'
});