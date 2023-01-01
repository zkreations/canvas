!function(){
  const comments = document.getElementById('comments');
  const restore = document.getElementById('comment-restore');
  const relay = document.getElementById('cmtfpIframe');

  const loadScript = (src) => new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })

  const rpc_relay = (() => {
    if (!relay) {
      return
    }
    src = (relay.value).replace(/<script.*?src='(.*?)'.*?><\/script>/, "$1");
    loadScript(src)
      .then(() => {
        BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html");
      })
      .catch(console.error)
    relay.remove()
  })();

  const replying = (() => {
    if (!comments) {
      return
    }

    let form = document.getElementById("comment-form");
    let formIframe = document.getElementById("comment-iframe");
    let buttons = comments.querySelectorAll("[data-parent-id]");
    let originalSrc = document.getElementById("comment-editor").src;

    let cloneForm = formIframe.cloneNode(true);

    if (!buttons) {
      return
    }

    let ACTIVE_CLASS = "is-active";
    let REPLYING_CLASS = "is-replying";

    function cleanReplyingStatus() {
      formIframe.remove();
      buttons.forEach(el => el.classList.remove(ACTIVE_CLASS));
    }

    buttons.forEach(button => {
      button.onclick = () => {
        let parent = button.dataset.parentId;
        let container = document.querySelector(`#c${parent} .comments-replies`);
        if(restore) {
          restore.classList.add(REPLYING_CLASS);
        }
        if (!button.classList.contains(ACTIVE_CLASS)) {
          cleanReplyingStatus()
          button.classList.add(ACTIVE_CLASS);
          // Reemplazamos en el clon la ruta de respuesta
          cloneForm.querySelector("iframe").src =  `${originalSrc}&parentID=${parent}`;
          // Agregamos el clon modificado
          container.prepend(cloneForm)
        }
      }
    });

    if (!restore){
      return
    }

    restore.onclick = () => {
      if (restore.classList.contains(REPLYING_CLASS)) {
        cleanReplyingStatus()
        restore.classList.remove(REPLYING_CLASS);
        cloneForm.remove()
        form.appendChild(formIframe)
      }
    }

  })();

}();