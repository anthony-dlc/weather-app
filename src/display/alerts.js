export default function alerts(obj) {
  if (obj.alerts[0]) {
    const alert = document.querySelector(".alert");
    alert.textContent = obj.alerts[0].event;
  }
}
