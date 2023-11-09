const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  l: "840px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

export const DEVICES = {
  xs: `min-width: ${breakpoints.xs}`,
  sm: `min-width: ${breakpoints.sm}`,
  md: `min-width: ${breakpoints.md}`,
  l: `min-width: ${breakpoints.l}`,
  lg: `min-width: ${breakpoints.lg}`,
  xl: `min-width: ${breakpoints.xl}`,
  "2xl": `min-width: ${breakpoints["2xl"]}`,
}