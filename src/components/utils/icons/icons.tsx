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
