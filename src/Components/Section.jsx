export function Section({ startingPosition = "left" }) {
  return (
    <div className={`section section-${startingPosition}`}>
      {startingPosition === "right" ? (
        <>
          <div className="section-content">
            <h2>Cateogry Name</h2>
            <p>You have spent "0" hours and "0" mins in this category!</p>
          </div>
          <div className="section-img"></div>
        </>
      ) : (
        <>
          <div className="section-img"></div>
          <div className="section-content">
            <h2>Cateogry Name</h2>
            <p>You have spent "0" hours and "0" mins in this category!</p>
          </div>
        </>
      )}
    </div>
  );
}
