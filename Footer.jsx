var React = require("react");

function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @{2023} </p>
    </footer>
  );
}
export default Footer;