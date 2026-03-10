export default function Header() {
  return (
    <header>
      <div className="logo-text">
        <span style={{ color: "#FF5500", textShadow: "4px 4px 0 #CC2200, 8px 8px 0 rgba(0,0,0,0.4)" }}>BURNT</span>{" "}
        <span style={{ color: "#FF8C00", textShadow: "4px 4px 0 #CC5500, 8px 8px 0 rgba(0,0,0,0.4)" }}>DAD</span>
        <br />
        <span style={{ fontSize: "clamp(10px, 2vw, 16px)", color: "#FF9A3C", textShadow: "2px 2px 0 #CC5500" }}>KITCHEN</span>
      </div>
      <div className="logo-sub">[ WHAT ARE WE MAKING? ]</div>
    </header>
  );
}
