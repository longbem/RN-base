import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {normalizeOptions} from '@src/utils/formatters';
import colors from '@src/utils/colors';

const Typography = ({
  style,
  children,
  margin,
  padding,
  type,
  opacity,
  ...rest
}) => {
  const combinedStyle = [
    'color',
    'textAlign',
    'fontSize',
    'fontFamily',
    'fontWeight',
    'lineHeight',
  ]
    .map((e) => {
      if (!rest[e]) {
        return;
      }
      return styles[e](rest[e]);
    })
    .filter((e) => e);

  return (
    <Text
      style={[
        styles.defaultStyle,
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        opacity && styles.opacity(opacity),
        type && styles.type(type),
        combinedStyle,
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Lexend',
    fontWeight: '400',
    fontSize: 14,
  },
  type: (type) => {
    if (type === 'h1') {
      return {
        color: colors.black100,
        fontFamily: 'Lexend',
        fontWeight: '300',
        fontSize: 44,
        lineHeight: 44,
        letterSpacing: -2,
        fontStyle: 'normal',
      };
    }
    if (type === 'h2') {
      return {
        color: colors.black100,
        fontFamily: 'Lexend',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: -0.5,
        fontStyle: 'normal',
      };
    }
    if (type === 'h3') {
      return {
        color: colors.black100,
        fontFamily: 'Lexend',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        fontStyle: 'normal',
      };
    }
    if (type === 'h4') {
      return {
        color: colors.black100,
        fontFamily: 'Lexend',
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }
    if (type === 'paragraph') {
      return {
        color: colors.black100,
        fontFamily: 'Lexend',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }
    if (type === 'note') {
      return {
        fontFamily: 'Lexend',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }

    if (type === 'p') {
      return {
        fontFamily: 'Lexend',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        fontStyle: 'normal',
        color: colors.black50,
      };
    }
    if (type === 'title') {
      return {
        fontSize: 12,
        lineHeight: 15,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: colors.gray3,
      };
    }

    if (type === 'infor') {
      return {
        fontSize: 12,
        lineHeight: 15,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: colors.gray3,
      };
    }
    if (type === 'title-header') {
      return {
        fontSize: 17,
        lineHeight: 21,
        fontStyle: 'normal',
        fontWeight: '600',
        color: colors.black,
      };
    }
    if (type === 'semi-bold') {
      return {
        fontFamily: 'Lexend-SemiBold',
        fontWeight: '600',
      };
    }

    return;
  },
  color: (color) => {
    return {color};
  },
  textAlign: (textAlign) => {
    return {textAlign};
  },
  fontSize: (size) => {
    return {fontSize: size};
  },
  fontFamily: (fontFamily) => {
    return {fontFamily};
  },
  fontWeight: (fontWeight) => {
    return {fontWeight: `${fontWeight}`};
  },
  lineHeight: (lineHeight) => {
    return {lineHeight};
  },
  letterSpacing: (letterSpacing) => {
    return {letterSpacing};
  },
  margin: ([top, left, bottom, right]) => {
    return {
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
    };
  },
  padding: ([top, left, bottom, right]) => {
    return {
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    };
  },
  opacity: (opacity) => ({
    opacity,
  }),
});
