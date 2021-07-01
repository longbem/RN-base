import { ImageProps } from 'react-native';

  interface ImageIconProps extends ImageProps {
    square: number;
    circle: number;
    width: number;
    height: number;
    tintColor: string;
    name: 'calendar-check' | 'calendar-un_check' | 'home-select' | 'home' | 'member-select' | 'member' | 'user-circle-select' | 'user-circle';
  }
  
  export default function ImageIcon(props: ImageIconProps): {};
  