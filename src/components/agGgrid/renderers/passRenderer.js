export default class PassCellRenderer {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `<span class="material-icons">
done
</span> (${params.value}%)`;
  }

  getGui(params) {
    return this.eGui;
  }
}
