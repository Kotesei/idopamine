export function fixTimeFormat(time) {
  // Handle specific cases
  if (time.includes("/h")) {
    // If we encounter "/h", treat it as 7 hours
    time = time.replace("/h", "7h");
  }
  if (time.includes("/m")) {
    // If we encounter "/m", treat it as 7 minutes
    time = time.replace("/m", "7m");
  }

  if (time.includes("Bh")) {
    // If we encounter "Bh", treat it as 5 hours
    time = time.replace("Bh", "5h");
  }
  if (time.includes("Bm")) {
    // If we encounter "Bm", treat it as 5 minutes
    time = time.replace("Bm", "5m");
  }
  // If we encounter "Th", treat it as 1 hour
  if (time.includes("Th")) {
    time = time.replace("Th", "1h");
  }

  // If we encounter "Tm", treat it as 1 minute
  if (time.includes("Tm")) {
    time = time.replace("Tm", "1m");
  }

  // If we encounter "oh", treat it as 6 hours
  if (time.includes("oh")) {
    time = time.replace("oh", "6h");
  }
  // If we encounter "om", treat it as 6 minutes
  if (time.includes("om")) {
    time = time.replace("om", "6m");
  }

  // Ensure that the time has a proper structure (e.g., "h" and "m" together)
  const parts = time.split(" ");

  let hours = 0;
  let minutes = 0;

  parts.forEach((part) => {
    if (part.includes("h")) {
      hours = parseInt(part.replace("h", ""));
    }
    if (part.includes("m")) {
      minutes = parseInt(part.replace("m", ""));
    }
  });

  // Return the formatted time
  return `${hours}h ${minutes}m`;
}

export function splitWithAmpersand(input) {
  const words = input.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "&" && i > 0 && i < words.length - 1) {
      // Combine the previous word, the '&' and the next word into one element
      result[result.length - 1] += ` & ${words[i + 1]}`;
      i++; // Skip the next word since it's already combined
    } else {
      result.push(words[i]);
    }
  }

  return result;
}
