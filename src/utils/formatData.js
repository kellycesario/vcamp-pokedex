export const capitalize = (str = "") => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const formatId = (id) => {
    if (id < 10) return `#00${id}`;
    if (id < 100) return `#0${id}`;
    return `#${id}`;
  };