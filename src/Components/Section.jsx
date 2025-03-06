export function Section({
  startingPosition = "left",
  categoryName,
  categoryTime,
}) {
  const hour = categoryTime.split(" ")[0].replace("h", "");
  const min = categoryTime.split(" ")[1].replace("m", "");

  return (
    <div className={`section section-${startingPosition}`}>
      {startingPosition === "right" ? (
        <>
          <div className="section-content">
            <h2>{categoryName}</h2>
            <p>
              {`You have spent ${hour !== "0" ? `${hour} hours and` : ""}
              ${min} mins in this category!`}
            </p>
          </div>
          <div className="section-img"></div>
        </>
      ) : (
        <>
          <div className="section-img"></div>
          <div className="section-content">
            <h2>{categoryName}</h2>
            <p>
              {`You have spent ${hour !== "0" ? `${hour} hours and` : ""}
              ${min} mins in this category!`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
