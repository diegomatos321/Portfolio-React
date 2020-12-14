export default function LoadJS(config) {
  try {
    const { src, id, defer, async, type, callback } = config;
    let script = document.createElement("script");

    if (id) script.setAttribute("id", id);
    if (defer) script.setAttribute("defer", defer);
    if (async) script.setAttribute("async", async);
    if (src) script.setAttribute("src", src);
    if (type) script.setAttribute("type", type);
    if (callback) script.addEventListener("load", callback);

    document.body.appendChild(script)
  } catch (error) {
    console.error(error)
  }
}