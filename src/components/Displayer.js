export default class Displayer {
  constructor({ renderer }) {
    this._renderer = renderer;
  }

  renderItem(item, container) {
    container.append(item);
  }

  renderItemList(list, container) {
    list.forEach((item) => this._renderer(item, container));
  }
}
