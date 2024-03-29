import "./Discord.css";

export default function Discord(props: DiscordProps) {
  return (
    <div className={`${props.className} discord-discord`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1.93 10.843 C 1.93 7.958 1.93 6.516 2.491 5.414 C 2.985 4.445 3.773 3.657 4.742 3.163 C 5.844 2.602 7.286 2.602 10.171 2.602 H 17.726 C 20.61 2.602 22.053 2.602 23.154 3.163 C 24.124 3.657 24.912 4.445 25.405 5.414 C 25.967 6.516 25.967 7.958 25.967 10.843 V 18.397 C 25.967 21.282 25.967 22.724 25.405 23.826 C 24.912 24.795 24.124 25.583 23.154 26.077 C 22.053 26.639 20.61 26.639 17.726 26.639 H 10.171 C 7.286 26.639 5.844 26.639 4.742 26.077 C 3.773 25.583 2.985 24.795 2.491 23.826 C 1.93 22.724 1.93 21.282 1.93 18.397 V 10.843 Z"
          fill="white"
         />
        <path
          d="M 20.499 8.902 C 19.276 8.365 17.969 7.974 16.602 7.752 C 16.434 8.037 16.238 8.42 16.103 8.726 C 14.65 8.52 13.211 8.52 11.785 8.726 C 11.65 8.42 11.449 8.037 11.28 7.752 C 9.912 7.974 8.603 8.366 7.38 8.905 C 4.914 12.406 4.246 15.82 4.58 19.185 C 6.216 20.333 7.801 21.03 9.359 21.486 C 9.744 20.989 10.087 20.46 10.382 19.902 C 9.819 19.701 9.28 19.453 8.771 19.165 C 8.906 19.071 9.038 18.973 9.166 18.872 C 12.274 20.237 15.65 20.237 18.72 18.872 C 18.85 18.973 18.982 19.071 19.116 19.165 C 18.605 19.455 18.064 19.703 17.501 19.904 C 17.796 20.46 18.138 20.99 18.524 21.487 C 20.084 21.031 21.671 20.334 23.306 19.185 C 23.698 15.284 22.636 11.901 20.499 8.902 Z M 10.806 17.116 C 9.873 17.116 9.108 16.297 9.108 15.301 C 9.108 14.305 9.857 13.485 10.806 13.485 C 11.755 13.485 12.52 14.303 12.504 15.301 C 12.505 16.297 11.755 17.116 10.806 17.116 Z M 17.08 17.116 C 16.148 17.116 15.383 16.297 15.383 15.301 C 15.383 14.305 16.131 13.485 17.08 13.485 C 18.03 13.485 18.795 14.303 18.778 15.301 C 18.778 16.297 18.03 17.116 17.08 17.116 Z"
          fill="#0B081C"
         />
      </svg>
    </div>
  );
}

Discord.defaultProps = {
  className: "",
};

interface DiscordProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
