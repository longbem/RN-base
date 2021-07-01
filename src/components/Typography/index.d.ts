import {TextProps} from 'react-native';

type FontFamily = 'Sneak-Regular' | 'Sneak-Bold' | 'Sneak-Light';
type TypoType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'paragraph'
  | 'note'
  | 'p'
  | 'semi-bold';

interface TypographyProps extends TextProps {
  color: string;
  textAlign: string;
  fontFamily: FontFamily;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
  type: TypoType;
  opacity: double;
}

export default function Typography(props: TypographyProps): {};
