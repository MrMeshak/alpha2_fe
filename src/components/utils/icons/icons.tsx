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

export const HeartSolidIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Heart</title>
      <g id="Iconly/Bold/Heart" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Heart" transform="translate(1.999783, 2.500540)" fill={fill} fillRule="nonzero">
          <path d="M6.28001656,3.46389584e-14 C6.91001656,0.0191596721 7.52001656,0.129159672 8.11101656,0.330159672 L8.11101656,0.330159672 L8.17001656,0.330159672 C8.21001656,0.349159672 8.24001656,0.370159672 8.26001656,0.389159672 C8.48101656,0.460159672 8.69001656,0.540159672 8.89001656,0.650159672 L8.89001656,0.650159672 L9.27001656,0.820159672 C9.42001656,0.900159672 9.60001656,1.04915967 9.70001656,1.11015967 C9.80001656,1.16915967 9.91001656,1.23015967 10.0000166,1.29915967 C11.1110166,0.450159672 12.4600166,-0.00984032788 13.8500166,3.46389584e-14 C14.4810166,3.46389584e-14 15.1110166,0.0891596721 15.7100166,0.290159672 C19.4010166,1.49015967 20.7310166,5.54015967 19.6200166,9.08015967 C18.9900166,10.8891597 17.9600166,12.5401597 16.6110166,13.8891597 C14.6800166,15.7591597 12.5610166,17.4191597 10.2800166,18.8491597 L10.2800166,18.8491597 L10.0300166,19.0001597 L9.77001656,18.8391597 C7.48101656,17.4191597 5.35001656,15.7591597 3.40101656,13.8791597 C2.06101656,12.5301597 1.03001656,10.8891597 0.390016562,9.08015967 C-0.739983438,5.54015967 0.590016562,1.49015967 4.32101656,0.269159672 C4.61101656,0.169159672 4.91001656,0.0991596721 5.21001656,0.0601596721 L5.21001656,0.0601596721 L5.33001656,0.0601596721 C5.61101656,0.0191596721 5.89001656,3.46389584e-14 6.17001656,3.46389584e-14 L6.17001656,3.46389584e-14 Z M15.1900166,3.16015967 C14.7800166,3.01915967 14.3300166,3.24015967 14.1800166,3.66015967 C14.0400166,4.08015967 14.2600166,4.54015967 14.6800166,4.68915967 C15.3210166,4.92915967 15.7500166,5.56015967 15.7500166,6.25915967 L15.7500166,6.25915967 L15.7500166,6.29015967 C15.7310166,6.51915967 15.8000166,6.74015967 15.9400166,6.91015967 C16.0800166,7.08015967 16.2900166,7.17915967 16.5100166,7.20015967 C16.9200166,7.18915967 17.2700166,6.86015967 17.3000166,6.43915967 L17.3000166,6.43915967 L17.3000166,6.32015967 C17.3300166,4.91915967 16.4810166,3.65015967 15.1900166,3.16015967 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const HeartOutlineIcon = ({ className = 'h-6 w-6', fill = '#ffffff', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Light/Heart</title>
      <g id="Iconly/Light/Heart" stroke={stroke} strokeWidth={strokeWidth} fill={fill} fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Heart" transform="translate(2.500000, 3.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <path
            d="M0.371865331,8.59832177 C-0.701134669,5.24832177 0.552865331,1.41932177 4.06986533,0.28632177 C5.91986533,-0.31067823 7.96186533,0.0413217701 9.49986533,1.19832177 C10.9548653,0.0733217701 13.0718653,-0.30667823 14.9198653,0.28632177 C18.4368653,1.41932177 19.6988653,5.24832177 18.6268653,8.59832177 C16.9568653,13.9083218 9.49986533,17.9983218 9.49986533,17.9983218 C9.49986533,17.9983218 2.09786533,13.9703218 0.371865331,8.59832177 Z"
            id="Stroke-1"
          ></path>
          <path d="M13.5,3.7 C14.57,4.046 15.326,5.001 15.417,6.122" id="Stroke-3"></path>
        </g>
      </g>
    </svg>
  );
};

export const ShoppingBagIcon = ({ className = 'h-6 w-6', fill = 'none', stroke = 'currentColor', strokeWidth = '1.5' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Iconly/Light/Bag</title>
      <g id="Iconly/Light/Bag" stroke={stroke} strokeWidth={strokeWidth} fill={fill} fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Bag" transform="translate(2.500000, 1.500000)" stroke="#000000" stroke-width="1.5">
          <path
            d="M14.01373,20.0000001 L5.66590392,20.0000001 C2.59954235,20.0000001 0.247139589,18.8924486 0.915331812,14.4347827 L1.69336385,8.39359272 C2.10526317,6.16933642 3.52402748,5.31807783 4.76887874,5.31807783 L14.9473685,5.31807783 C16.2105264,5.31807783 17.5469108,6.23340964 18.0228834,8.39359272 L18.8009154,14.4347827 C19.3684211,18.3890161 17.0800916,20.0000001 14.01373,20.0000001 Z"
            id="Path_33955"
          ></path>
          <path
            d="M14.1510298,5.09839819 C14.1510298,2.71232585 12.216736,0.7779932 9.83066366,0.7779932 L9.83066366,0.7779932 C8.68166274,0.773163349 7.57805185,1.22619323 6.76386233,2.03694736 C5.9496728,2.84770148 5.49199087,3.94938696 5.49199087,5.09839819 L5.49199087,5.09839819"
            id="Path_33956"
          ></path>
          <line x1="12.7963387" y1="9.60183071" x2="12.7505721" y2="9.60183071" id="Line_192"></line>
          <line x1="6.96567509" y1="9.60183071" x2="6.9199085" y2="9.60183071" id="Line_193"></line>
        </g>
      </g>
    </svg>
  );
};
