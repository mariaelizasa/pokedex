export type ColorKey =
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "black"
  | "white"
  | "purple"
  | "pink"
  | "brown"
  | "gray"
  | "gold"
  | "silver"

export const colorMapping: Record<ColorKey, string | undefined> = {
  red: "linear-gradient(to bottom, #F08030, #FF6F61, #FF3B3B)",
  blue: "linear-gradient(to bottom, #6890F0, #6AB1E8, #0047AB)",
  green: "linear-gradient(to bottom, #78C850, #7DBE68, #006400)",
  yellow: "linear-gradient(to bottom, #F0E030, #F3E76D, #F7C600)",
  black: "linear-gradient(to bottom, #4A4A4A, #6D6D6D, #2E2E2E)",
  white: "linear-gradient(to bottom, #F0F0F0, #DCDCDC, #B0B0B0)",
  purple: "linear-gradient(to bottom, #A040A0, #B56BCE, #6A0D91)",
  pink: "linear-gradient(to bottom, #F0A0A0, #F6B4B4, #D24D77)",
  brown: "linear-gradient(to bottom, #A8A878, #BEB09B, #6F4F28)",
  gray: "linear-gradient(to bottom, #9D9D9D, #B0B0B0, #636363)",
  gold: "linear-gradient(to bottom, #FFD700, #F7E6B0, #F4C542)",
  silver: "linear-gradient(to bottom, #C0C0C0, #D0D0D0, #A0A0A0)",
  
};
