"use client";

export default function BookCta() {
  return (
    <div className="book-cta">
      <div className="book-cta-title">{"\uD83D\uDD25"} BURNT DAD COOKBOOKS {"\uD83D\uDD25"}</div>
      <div className="book-cta-text">
        Nailed it? This recipe might be in the upcoming Burnt Dad cookbook series.
        Written for dads. Tested by kids. Survived by both.
      </div>
      <button
        className="cook-btn"
        style={{ maxWidth: 340, margin: "0 auto", display: "block", fontSize: 9, padding: 14 }}
        onClick={() => alert("Cookbook waitlist coming soon! \uD83D\uDCDA")}
      >
        JOIN THE COOKBOOK WAITLIST
      </button>
    </div>
  );
}
