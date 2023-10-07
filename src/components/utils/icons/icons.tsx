export interface IIconProps {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const ArrowRightCircleIcon = ({ className = '', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Arrow - Right Circle</title>
      <circle cx={12} cy={12} r={10} fill="#ffffff" />
      <g id="Iconly/Bold/Arrow---Right-Circle" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Arrow---Right-Circle" transform="translate(2.000100, 2.000000)" fill={fill} fillRule="nonzero">
          <path d="M10,-2.27373675e-13 C15.51,-2.27373675e-13 20,4.49 20,10 C20,15.52 15.51,20 10,20 L10,20 L9.72023508,19.9961558 C4.32942258,19.8478368 -2.26761352e-13,15.4264407 -2.26761352e-13,10 C-2.26761352e-13,4.49 4.48,-2.27373675e-13 10,-2.27373675e-13 Z M8.56,5.78 C8.36,5.78 8.17,5.85 8.02,6 C7.73,6.3 7.73,6.77 8.03,7.06 L8.03,7.06 L10.98,10 L8.03,12.94 C7.73,13.23 7.73,13.71 8.02,14 C8.32,14.3 8.79,14.3 9.08,14 L9.08,14 L12.57,10.53 C12.71,10.39 12.79,10.2 12.79,10 C12.79,9.8 12.71,9.61 12.57,9.47 L12.57,9.47 L9.08,6 C8.94,5.85 8.75,5.78 8.56,5.78 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const ArrowLeftCircleIcon = ({ className = '', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Arrow - Left Circle</title>
      <circle cx={12} cy={12} r={10} fill="#ffffff" />
      <g id="Iconly/Bold/Arrow---Left-Circle" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Arrow---Left-Circle" transform="translate(2.000000, 2.000000)" fill={fill} fillRule="evenodd">
          <path d="M10,-1.13686838e-13 L10.2797649,0.00384420997 C15.6705774,0.152163172 20,4.57355932 20,10 C20,15.51 15.52,20 10,20 C4.49,20 6.123234e-16,15.51 6.123234e-16,10 C6.123234e-16,4.48 4.49,-1.13686838e-13 10,-1.13686838e-13 L10,-1.13686838e-13 Z M11.98,6 C11.68,5.7 11.21,5.7 10.92,6 L10.92,6 L7.43,9.47 C7.29,9.61 7.21,9.8 7.21,10 C7.21,10.2 7.29,10.39 7.43,10.53 L7.43,10.53 L10.92,14 C11.06,14.15 11.25,14.22 11.44,14.22 C11.64,14.22 11.83,14.15 11.98,14 C12.27,13.7 12.27,13.23 11.97,12.94 L11.97,12.94 L9.02,10 L11.97,7.06 C12.27,6.77 12.27,6.29 11.98,6 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const PlusIcon = ({ className = '', fill = 'currentColor', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 6.7C14 6.3134 13.6866 6 13.3 6H8.7C8.3134 6 8 5.6866 8 5.3V0.7C8 0.3134 7.6866 0 7.3 0H6.7C6.3134 0 6 0.313401 6 0.7V5.3C6 5.6866 5.6866 6 5.3 6H0.7C0.3134 6 0 6.3134 0 6.7V7.3C0 7.6866 0.313401 8 0.7 8H5.3C5.6866 8 6 8.3134 6 8.7V13.3C6 13.6866 6.3134 14 6.7 14H7.3C7.6866 14 8 13.6866 8 13.3V8.7C8 8.3134 8.3134 8 8.7 8H13.3C13.6866 8 14 7.6866 14 7.3V6.7Z"
        fill={fill}
      />
    </svg>
  );
};

export const MinusIcon = ({ className = '', fill = 'currentColor', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.7C0 0.313401 0.313401 0 0.7 0H13.3C13.6866 0 14 0.313401 14 0.7V1.3C14 1.6866 13.6866 2 13.3 2H0.7C0.313401 2 0 1.6866 0 1.3V0.7Z" fill={fill} />
    </svg>
  );
};

export const LeftArrowIcon = ({ className = '', fill = 'none', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Iconly/Light/Arrow - Left</title>
      <g id="Iconly/Light/Arrow---Left" stroke={stroke} strokeWidth={strokeWidth} fill={fill} fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Arrow---Left" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <line x1="6.7743" y1="15.75" x2="6.7743" y2="0.75" id="Stroke-1"></line>
          <polyline id="Stroke-3" points="12.7987 9.7002 6.7747 15.7502 0.7497 9.7002"></polyline>
        </g>
      </g>
    </svg>
  );
};

export const RightArrowSquareIcon = ({ className = '', fill = 'none', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Iconly/Light/Arrow - Right Square</title>
      <g id="Iconly/Light/Arrow---Right-Square" stroke={stroke} strokeWidth={strokeWidth} fill={fill} fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g
          id="Arrow---Right-Square"
          transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(2.000000, 2.000000)"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            d="M5.6659,19.25 L14.3349,19.25 C17.3549,19.25 19.2499,17.111 19.2499,14.084 L19.2499,5.916 C19.2499,2.889 17.3649,0.75 14.3349,0.75 L5.6659,0.75 C2.6359,0.75 0.7499,2.889 0.7499,5.916 L0.7499,14.084 C0.7499,17.111 2.6359,19.25 5.6659,19.25 Z"
            id="Stroke-1"
          ></path>
          <line x1="9.9999" y1="14.086" x2="9.9999" y2="5.914" id="Stroke-3"></line>
          <polyline id="Stroke-5" points="13.7479 10.3223 9.9999 14.0863 6.2519 10.3223"></polyline>
        </g>
      </g>
    </svg>
  );
};
