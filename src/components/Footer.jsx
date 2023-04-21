const react = require("react");

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer>
      <p>Copyrights @{yr}</p>
    </footer>
  );
}
