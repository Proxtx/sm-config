export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.button = this.document.getElementById("button");
    this.button.addEventListener("click", async () => {
      let u = new URL(this.data.host);
      u.pathname = "/edit/";
      u.searchParams.set(
        "path",
        encodeURIComponent(this.data.path + "/" + this.data.file)
      );
      window.location = u;
    });
  }

  setData(data) {
    this.data = data;
  }
}
