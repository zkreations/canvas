
/*
 * Comments Reply
 * Copyright 2022
 * Developed by zkreations (https://zkreations.com/)
 */

function commentsReply(data, document) {

  // Crea el formulario de Blogger
  function createForm(src) {
    var iframe = document.createElement("iframe");
    iframe.className = "blogger-iframe-colorize",
    iframe.src = src;
    iframe.id = "comment-editor";
    iframe.width = "100%";
    iframe.height = "88px";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    return iframe;
  }

  // Remueve un elemento
  function removeElement(element) {
    return element.parentNode && element.parentNode.removeChild(element);
  }

  // Comprobar si existe una clase
  function hasClass(element, className) {
    return element.classList.contains(className)
  }

  // Restaurar el boton de responder
  function restoreReplyBtn(reply) {
    reply.classList.remove(data.replyingClass)
    reply.innerHTML = replyLinksText;
  }

  // Inserta el formulario para comentar
  function setCommentEditor(container, src = originalSrc) {
    commentEditor = createForm(src);
    container.appendChild(commentEditor);
  }

  // Entramos al modo "respondiendo" y todo lo que ello conlleva
  function replying(reply) {
    reply.classList.add(data.replyingClass)
    reply.innerHTML = data.cancelText;
    removeElement(commentEditor);
  }

  // Gestiona el estado de todas las respuestas
  function setReplyStatus(element, repliesContainer, replyingSrc) {
    if (hasClass(element, data.replyingClass)) {
      restoreReplyBtn(element)
      removeElement(commentEditor)
      setCommentEditor(commentEditorContainer)
    } else {
      replyLinks.forEach(function (item) {
        restoreReplyBtn(item)
        removeElement(commentEditor)
      });
      replying(element)
      setCommentEditor(repliesContainer, replyingSrc)
    }
  }

  function replies(event) {

    event.preventDefault();
    // Obtenemos el ID del comentario a responder
    var commentId = this.dataset.parentId;
    var commentType = commentsParams.get("postID") ? "postID" : "pageID";
    var replyingSrc = `https://www.blogger.com/comment-iframe.g?blogID=${blogID}&${commentType}=${entryID}&skin=${commentTheme}&parentID=${commentId}`;
    // Obtenemos el contenedor para el formulario de respuestas
    var replyEditorContainer = document.getElementById('c' + commentId + '-ce');

    setReplyStatus(this, replyEditorContainer, replyingSrc)

  }

  // Contenedor de los comentarios
  var comments = document.querySelector(data.container);

  // Obtenemos todos los botones para responder
  var replyLinks = comments.querySelectorAll(data.replyBtn);

  // Obtenemos el contenido de un solo boton, con el fin de poderlo restaurar todos los demas mas adelante
  var replyLinksText = comments.querySelector(data.replyBtn).innerHTML;

  // Url Original del atributo src para el formulario
  var originalSrc = document.getElementById('comment-editor-src').href;

  // Obtenemos solo el formulario (iframe)
  var commentEditor = document.getElementById('comment-editor');

  // Obtenemos el contenedor del formulario 
  var commentEditorContainer = document.getElementById('comment-form-thread');


  // A partir de la url original, obtenemos toda la información necesaria
  var commentsEditorSrc = new URL(originalSrc);
  var commentsParams = new URLSearchParams(commentsEditorSrc.search);

  var blogID = commentsParams.get("blogID");
  // Los post y las paginas estaticas tienen un parametro especifico
  var entryID = commentsParams.get("postID") || commentsParams.get("pageID");
  // Si el parametro skin no existe, entonces usamos el formulario antiguo
  var commentTheme = commentsParams.get("skin") || "legacy";

  replyLinks.forEach(function (item) {
    item.addEventListener('click', replies, false)
  });
};

function initCommentsReply(config) {
  config = Object.assign({
    container: '#comments',
    replyBtn: '.comment-reply',
    replyingClass: 'is-replying',
    cancelText: 'Cancelar'
  }, config);
  commentsReply(config, document);
}

/*
 * LazyLoad Comments
 * Copyright 2021
 * Developed by superchlorine (https://superchlorine.com/)
 */

function loadDisqus() {
  const disqus = document.querySelector('#disqus_thread');
  const script = document.createElement('script');
  window.disqus_config = function () {
    this.page.url = disqus.dataset.postUrl;
    this.page.identifier = disqus.dataset.postId;
  };
  script.src = `https://${disqus.dataset.shortname}.disqus.com/embed.js`;
  script.setAttribute('data-timestamp', +new Date());
  (document.head || document.body).appendChild(script);
}

function initLazyDisqus() {
  if (!('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    loadDisqus();
  } else {
    const observer = new IntersectionObserver(function (entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          loadDisqus();
          observer.unobserve(entry.target);
        }
      }
    });
    observer.observe(document.getElementById('disqus_thread'));
  }
}