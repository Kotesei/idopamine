export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Convert the image to grayscale using canvas
export function preprocessImage(imgUrl) {
  const image = new Image();
  image.src = imgUrl;

  return new Promise((resolve) => {
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Convert to grayscale and then apply a simple thresholding for binary effect
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const avg = (r + g + b) / 3;

        // Simple thresholding
        const threshold = 128; // You can adjust this value
        const color = avg > threshold ? 255 : 0;

        // Set the RGB values to either black or white based on the threshold
        data[i] = data[i + 1] = data[i + 2] = color;
      }

      // Put the modified image data back into the canvas
      ctx.putImageData(imageData, 0, 0);

      // Resolve with the processed (binary) image data URL
      resolve(canvas.toDataURL());
    };
  });
}
