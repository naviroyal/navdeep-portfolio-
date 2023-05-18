// eample colors: {dark: "#000000", light: "#ffffff"}

export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? "#0d2538" : "#DCD6C8");
  const particle = (darkMode = false) => (darkMode ? "#c678dd" : "#5C7C8A");
  const links = (darkMode = false) => (darkMode ? "#98c379" : "#3BB9FF");

  return {
    background,
    particle,
    links,
  };
};
