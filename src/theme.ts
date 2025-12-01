/**
 * Theme Configuration
 * Update colors here to change the entire site's color scheme
 */

export const theme = {
  // Primary brand colors
  primary: {
    light: "blue-50",
    lighter: "blue-100",
    base: "blue-600",
    dark: "blue-700",
    darker: "blue-900",
  },

  // Secondary accent colors
  accent: {
    light: "cyan-100",
    lighter: "cyan-50",
    base: "cyan-500",
    dark: "cyan-600",
    darker: "cyan-700",
  },

  // Neutral colors
  neutral: {
    white: "white",
    gray50: "slate-50",
    gray100: "slate-100",
    gray200: "slate-200",
    gray300: "slate-300",
    gray400: "slate-400",
    gray500: "slate-500",
    gray600: "slate-600",
    gray700: "slate-700",
    gray800: "slate-800",
    gray900: "slate-900",
  },

  // Semantic colors
  success: "green-500",
  error: "red-500",
  warning: "amber-500",

  // Button styles
  button: {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-900",
  },

  // Text colors
  text: {
    primary: "text-slate-800",
    secondary: "text-slate-600",
    muted: "text-slate-500",
    light: "text-slate-300",
    white: "text-white",
  },

  // Background colors
  background: {
    light: "bg-slate-100",
    primary: "bg-blue-900",
    accent: "bg-cyan-500",
  },

  // Border colors
  border: {
    light: "border-slate-200",
    primary: "border-cyan-500",
    secondary: "border-blue-600",
  },

  // Icon colors
  icon: {
    primary: "text-cyan-500",
    secondary: "text-blue-600",
    light: "text-blue-100",
  },

  // Gradient backgrounds
  gradient: {
    heroOverlay: "brightness(0.4)",
    ctaGradient: "from-blue-50 to-cyan-50",
  },
};

/**
 * How to use the theme in components:
 *
 * import { theme } from "../theme";
 *
 * Example in JSX:
 * <button className={`${theme.button.primary} py-3 px-6 rounded-md`}>
 *   Click me
 * </button>
 *
 * Example for conditional classes:
 * <div className={`bg-${theme.primary.darker}`}>
 *   Content
 * </div>
 */
