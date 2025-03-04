const results = {
  "Time Per Category": [],
};

export const dates = [];

export default function (screenUsage) {
  dates.push(screenUsage);
  const alltimes = [];
  dates.forEach((date) => {
    const screenTime = date["Screen Time"];
    const convertHrsToMins =
      Number(screenTime.split(" ")[0].replace("h", "")) * 60;
    const getMins = Number(screenTime.split(" ")[1].replace("m", ""));
    const time = convertHrsToMins + getMins;

    alltimes.push(time);
  });
  const total = alltimes.reduce((cur, acc) => cur + acc);
  const getTotalTime = `${Math.floor(total / 60)}h ${total % 60}m`;
  results["Total Screen Time"] = getTotalTime;
}

export function updateStatus() {
  results["Time Per Category"] = [];
  const allCategories = [];
  dates.forEach((date) => {
    date.Categories.forEach((category) => {
      allCategories.push(category);
    });
  });
  console.log(dates);

  const combinedValues = {};

  allCategories.forEach((category) => {
    Object.keys(category).forEach((key) => {
      const value = category[key];
      if (combinedValues[key]) {
        combinedValues[key].push(value);
      } else {
        combinedValues[key] = [value];
      }
    });
  });

  //   console.log(combinedValues);

  Object.keys(combinedValues).forEach((category) => {
    // Goes thru each category inside the object

    const alltimes = [];
    combinedValues[category].forEach((categoryTime, i) => {
      const convertHrsToMins =
        Number(categoryTime.split(" ")[0].replace("h", "")) * 60;
      const getMins = Number(categoryTime.split(" ")[1].replace("m", ""));
      const time = convertHrsToMins + getMins;

      alltimes.push(time);
    });
    const total = alltimes.reduce((cur, acc) => cur + acc);
    const getTotalTime = `${Math.floor(total / 60)}h ${total % 60}m`;
    results["Time Per Category"].push({ [category]: getTotalTime });
  });

  //   results["Time Per Category"] = combinedValues;
  console.log(results);
}
