import 'styled-components';

type ColorProps = {
  BLUE: string;
  WHITE: string;
  BLACK: string;
  LIGHT_GRAY: string;
  SILVER: string;
  GRAY: string;
  CELLO: string;
  RED: string;
};

type SizeProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_LIST_PRODUCT: number;
  FONTSIZE_TEXT: number;
  ICON_SIZE: number;
  ICON_SIZE_FILTER_BAR: number;
  ICON_SIZE_HEADER: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
