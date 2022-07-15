export const capitalize = (str = "") => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatId = (id) => {
  if (id < 10) return `#00${id}`;
  if (id < 100) return `#0${id}`;
  return `#${id}`;
};

export const formatMeasure = (measure) => {
  let formatedMeasure = measure / 10
  if (formatedMeasure >= 1) return formatedMeasure
  return formatedMeasure
}

export const formatWeightToPounds = (weight) => {
  const weightInKilos = formatMeasure(weight)
  const poundValue = 2.205
  return ((weightInKilos * poundValue) * 10).toFixed(1)
}

export const formatHeightToInches = (height) => {
  const heightInInches = formatMeasure(height)
  const inchesValue = 3.281
  return ((heightInInches * inchesValue) * 10).toFixed(1).split('.').join('`')
}
