import { CustomFileInput } from "./FileInput.jsx";
import scanImage from "../utils/ocr.js";

export default function Steps({ onExtract }) {
  async function handleClick() {
    const result = await scanImage();
    onExtract(result);
  }

  return (
    <div className="popout-container">
      <div className="steps step-one">
        <div className="info-img"></div>
        <CustomFileInput />
      </div>
      <div className="steps step-two">
        <div className="info-img"></div>
        <button className="button" onClick={handleClick}>
          Extract Text
        </button>
      </div>
    </div>
  );
}
