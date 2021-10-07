export default class FailCellRenderer {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `<span class="material-icons">
close
</span> (${params.value}%)`;
  }

  getGui(params) {
    return this.eGui;
  }
}
