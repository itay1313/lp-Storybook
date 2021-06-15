import { html } from "lit-html";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, theme, size, label, onClick }) => {
  const themeClass = `theme-${theme || "light"}`;
  const variantClass = `button--${variant || "primary"}`;
  const sizeClass = `button--${size || "medium"}`;

  return html`
    <button
      type="button"
      class=${["button", themeClass, variantClass, sizeClass].join(" ")}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
