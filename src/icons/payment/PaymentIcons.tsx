import React from 'react';
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../IconTemplate';

// ============================================================================
// PAYMENT ICONS - SVG CONSTANTS
// ============================================================================

// Credit Card Icons
export const creditCardV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.3457 16.1976L16.1747 3.36865M18.6316 11.0556L16.4321 13.2551M14.5549 15.1099L13.5762 16.0886" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3.17467 16.1411C1.60844 14.5749 1.60844 12.0355 3.17467 10.4693L10.4693 3.17467C12.0355 1.60844 14.5749 1.60844 16.1411 3.17467L20.8253 7.85891C22.3916 9.42514 22.3916 11.9645 20.8253 13.5307L13.5307 20.8253C11.9645 22.3916 9.42514 22.3916 7.85891 20.8253L3.17467 16.1411Z" stroke="white" stroke-width="1.5"/>
<path d="M4 22H20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

export const creditCardV2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16H11.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 16H18" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9H22" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`;

// PayPal Icons
export const payPalV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2H9.62312C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z" stroke="white" stroke-width="1.5"/>
<path d="M8.24315 19.4998L8.01451 20.8325C7.90978 21.4429 8.38532 21.9998 9.01128 21.9998H11.0018C11.4961 21.9998 11.9179 21.6464 11.9991 21.1642L12.7285 16.8354C12.8098 16.3533 13.2316 15.9998 13.7258 15.9998H15.5289C18.11 15.9998 20.3448 14.2267 20.9047 11.7345C21.2967 9.99004 20.4437 8.30993 19 7.50098" stroke="white" stroke-width="1.5"/>
</svg>`;

// Cart Icons
export const cartV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5H21.5L20.3356 15.4864C19.9365 17.8809 19.737 19.0781 18.8977 19.7891C18.0585 20.5 16.8448 20.5 14.4172 20.5H9.58276C7.15525 20.5 5.94149 20.5 5.10226 19.7891C4.26302 19.0781 4.06348 17.8809 3.6644 15.4864L2.5 8.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.5V16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12.5V16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12.5V16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 8.5H1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8.5L15 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8.5L9 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const cartV2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 6H22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z" stroke="white" stroke-width="1.5"/>
<path d="M17 22C18.1046 22 19 21.1046 19 20C19 18.8954 18.1046 18 17 18C15.8954 18 15 18.8954 15 20C15 21.1046 15.8954 22 17 22Z" stroke="white" stroke-width="1.5"/>
<path d="M8 20H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

// Wallet Icons
export const walletV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;


export const walletV2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10H6.19722C6.91179 10 7.26908 10 7.58952 10.112C7.7852 10.1804 7.96906 10.2788 8.13451 10.4037C8.40544 10.6082 8.60363 10.9054 9 11.5C9.39637 12.0946 9.59456 12.3918 9.86549 12.5963C10.0309 12.7212 10.2148 12.8196 10.4105 12.888C10.7309 13 11.0882 13 11.8028 13H12.1972C12.9118 13 13.2691 13 13.5895 12.888C13.7852 12.8196 13.9691 12.7212 14.1345 12.5963C14.4054 12.3918 14.6036 12.0946 15 11.5C15.3964 10.9054 15.5946 10.6082 15.8655 10.4037C16.0309 10.2788 16.2148 10.1804 16.4105 10.112C16.7309 10 17.0882 10 17.8028 10H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Bag Icons
export const bagV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 6C7 7.65685 8.34315 9 9.99997 9C11.6569 9 13 7.65685 13 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1118 3H8.88824C6.2172 3 4.88168 3 4.01968 3.82064C3.15769 4.64128 3.08361 5.98325 2.93545 8.66719L2.60424 14.6672C2.44025 17.6379 2.35826 19.1233 3.2403 20.0616C4.12235 21 5.60058 21 8.55703 21H11.443C14.3995 21 15.8777 21 16.7597 20.0616C17.6418 19.1233 17.5598 17.6379 17.3958 14.6672L17.0645 8.66717C16.9164 5.98324 16.8423 4.64127 15.9803 3.82064C15.1183 3 13.7828 3 11.1118 3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8883 3H15.1118C17.7828 3 19.1183 3 19.9803 3.82064C20.8423 4.64127 20.9164 5.98324 21.0645 8.66717L21.3958 14.6672C21.5598 17.6379 21.6418 19.1233 20.7597 20.0616C19.8777 21 18.3995 21 15.443 21H12.5571" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const bagV2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.32352 13.0113C3.6739 10.009 4.18585 7.75784 4.66063 6.15851C5.04994 4.84711 5.24459 4.19141 6.04283 3.5957C6.84107 3 7.65697 3 9.28876 3H14.7112C16.343 3 17.1589 3 17.9572 3.5957C18.7554 4.19141 18.9501 4.84711 19.3394 6.15851C19.8142 7.75784 20.3261 10.009 20.6765 13.0113C21.0894 16.5497 21.2959 18.3189 20.1027 19.6594C18.9095 21 16.9758 21 13.1084 21H10.8916C7.02422 21 5.09052 21 3.89731 19.6594C2.70411 18.3189 2.91058 16.5497 3.32352 13.0113Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 7C9 8.65685 10.3431 10 12 10C13.6568 10 15 8.65685 15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const bagV3 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16.3333C19 17.8847 19 18.6604 18.7877 19.2858C18.388 20.4633 17.4633 21.388 16.2858 21.7877C15.6604 22 14.8847 22 13.3333 22H10.6667C9.11529 22 8.3396 22 7.71424 21.7877C6.53668 21.388 5.61201 20.4633 5.21228 19.2858C5 18.6604 5 17.8847 5 16.3333V12Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M5 17C6.64996 15.17 9.17273 14 12 14C14.8273 14 17.35 15.17 19 17" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M11 10H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9 6V5C9 4.06812 9 3.60218 9.15224 3.23463C9.35523 2.74458 9.74458 2.35523 10.2346 2.15224C10.6022 2 11.0681 2 12 2C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5V6" stroke="white" stroke-width="1.5"/>
<path d="M5 19H3.71429C2.76751 19 2 18.2325 2 17.2857V16C2 14.3431 3.34315 13 5 13" stroke="white" stroke-width="1.5"/>
<path d="M19 19H20.2857C21.2325 19 22 18.2325 22 17.2857V16C22 14.3431 20.6569 13 19 13" stroke="white" stroke-width="1.5"/>
</svg>`;

// Tag Icons
export const tagV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.058 8.53645L17.058 7.92286C16.0553 7.30762 15.554 7 15 7C14.446 7 13.9447 7.30762 12.942 7.92286L11.942 8.53645C10.9935 9.11848 10.5192 9.40949 10.2596 9.87838C10 10.3473 10 10.9129 10 12.0442V17.9094C10 19.8377 10 20.8019 10.5858 21.4009C11.1716 22 12.1144 22 14 22H16C17.8856 22 18.8284 22 19.4142 21.4009C20 20.8019 20 19.8377 20 17.9094V12.0442C20 10.9129 20 10.3473 19.7404 9.87838C19.4808 9.40949 19.0065 9.11848 18.058 8.53645Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7.10809C13.3612 6.4951 12.9791 6.17285 12.4974 6.05178C11.9374 5.91102 11.3491 6.06888 10.1725 6.3846L8.99908 6.69947C7.88602 6.99814 7.32949 7.14748 6.94287 7.5163C6.55624 7.88513 6.40642 8.40961 6.10679 9.45857L4.55327 14.8971C4.0425 16.6852 3.78712 17.5792 4.22063 18.2836C4.59336 18.8892 6.0835 19.6339 7.5 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4947 10C15.336 9.44058 16.0828 8.54291 16.5468 7.42653C17.5048 5.12162 16.8944 2.75724 15.1836 2.14554C13.4727 1.53383 11.3091 2.90644 10.3512 5.21135C10.191 5.59667 10.0747 5.98366 10 6.36383" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;


// Gift Icons
export const giftV1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M12 11V22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;


// Default exports (V1 versions)
export const creditCard = creditCardV1;
export const payPal = payPalV1;
export const cart = cartV1;
export const wallet = walletV1;
export const bag = bagV1;
export const tag = tagV1;
export const gift = giftV1;
