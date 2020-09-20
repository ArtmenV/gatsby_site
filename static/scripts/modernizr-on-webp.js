Modernizr.on('webp', function(result) {
  if (result) {
    let lazyBg = document.querySelectorAll("[data-bgset]")

    lazyBg.forEach(element => {
      // let bg = element.dataset.bg;
      // bg = bg.replace(new RegExp("\\jpg|jpeg|png"), "webp");
      // element.setAttribute("data-bg", bg);
      if (element.hasAttribute('data-bgset-webp')) {
        const webp = element.dataset.bgsetWebp
        element.setAttribute('data-bgset', webp)
      }
    });
  } 
})

