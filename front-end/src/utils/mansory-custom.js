import Masonry from "masonry-layout"

export default function criarGridMansory(container){
  new Masonry(container, {
    // options
    columnWidth: 80,
    itemSelector: ".mansory-item",
    fitWidth: true,
    gutter: 5,
  });
}