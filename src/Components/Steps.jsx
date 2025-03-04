import { CustomFileInput } from "./FileInput.jsx";
import scanImage from "../utils/ocr.js";

export default function Steps() {
  return (
    <>
      <div className="steps step-one">
        <div className="info-img"></div>
        <CustomFileInput />
      </div>
      <div className="steps step-two">
        <div className="info-img"></div>
        <button className="button" onClick={scanImage}>
          Extract Text
        </button>
      </div>
    </>
  );
}
