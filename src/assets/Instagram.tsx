import "./Instagram.css";

export default function Instagram(props: InstagramProps) {
  return (
    <div className={`${props.className} instagram-instagram`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.42969"
          y="2.60156"
          width="24.0371"
          height="24.0371"
          rx="5.1508"
          fill="#0B081C"
         />
        <path
          d="M 20.453 9.898 C 20.453 10.609 19.877 11.186 19.166 11.186 C 18.454 11.186 17.878 10.609 17.878 9.898 C 17.878 9.187 18.454 8.611 19.166 8.611 C 19.877 8.611 20.453 9.187 20.453 9.898 Z"
          fill="white"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 14.444 18.912 C 16.815 18.912 18.736 16.99 18.736 14.62 C 18.736 12.249 16.815 10.328 14.444 10.328 C 12.074 10.328 10.152 12.249 10.152 14.62 C 10.152 16.99 12.074 18.912 14.444 18.912 Z M 14.444 17.195 C 15.866 17.195 17.019 16.042 17.019 14.62 C 17.019 13.198 15.866 12.044 14.444 12.044 C 13.022 12.044 11.869 13.198 11.869 14.62 C 11.869 16.042 13.022 17.195 14.444 17.195 Z"
          fill="white"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.859 14.276 C 5.859 11.392 5.859 9.949 6.421 8.848 C 6.915 7.878 7.703 7.09 8.672 6.597 C 9.774 6.035 11.216 6.035 14.101 6.035 H 14.787 C 17.672 6.035 19.115 6.035 20.216 6.597 C 21.186 7.09 21.974 7.878 22.467 8.848 C 23.029 9.949 23.029 11.392 23.029 14.276 V 14.963 C 23.029 17.848 23.029 19.29 22.467 20.392 C 21.974 21.361 21.186 22.149 20.216 22.643 C 19.115 23.205 17.672 23.205 14.787 23.205 H 14.101 C 11.216 23.205 9.774 23.205 8.672 22.643 C 7.703 22.149 6.915 21.361 6.421 20.392 C 5.859 19.29 5.859 17.848 5.859 14.963 V 14.276 Z M 14.101 7.752 H 14.787 C 16.258 7.752 17.258 7.753 18.031 7.817 C 18.783 7.878 19.168 7.99 19.437 8.126 C 20.083 8.456 20.608 8.981 20.938 9.627 C 21.074 9.896 21.186 10.281 21.247 11.033 C 21.31 11.806 21.312 12.806 21.312 14.276 V 14.963 C 21.312 16.434 21.31 17.434 21.247 18.206 C 21.186 18.959 21.074 19.344 20.938 19.613 C 20.608 20.259 20.083 20.784 19.437 21.113 C 19.168 21.25 18.783 21.362 18.031 21.423 C 17.258 21.486 16.258 21.488 14.787 21.488 H 14.101 C 12.63 21.488 11.63 21.486 10.857 21.423 C 10.105 21.362 9.72 21.25 9.451 21.113 C 8.805 20.784 8.28 20.259 7.951 19.613 C 7.814 19.344 7.702 18.959 7.641 18.206 C 7.578 17.434 7.576 16.434 7.576 14.963 V 14.276 C 7.576 12.806 7.578 11.806 7.641 11.033 C 7.702 10.281 7.814 9.896 7.951 9.627 C 8.28 8.981 8.805 8.456 9.451 8.126 C 9.72 7.99 10.105 7.878 10.857 7.817 C 11.63 7.753 12.63 7.752 14.101 7.752 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Instagram.defaultProps = {
  className: "",
};

interface InstagramProps {
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
