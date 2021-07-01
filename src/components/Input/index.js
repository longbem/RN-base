import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '@src/utils/colors';
import Box from '../Box';
import Typography from '../Typography';
import ImageIcon from '../ImageIcon';
import TouchableBox from '../TouchableBox';

const Input = React.forwardRef(
  ({style, label, styleBoxInput, icon, actionIcon, disabled, ...rest}, ref) => {
    const combinedStyle = ['color', 'fontSize', 'fontFamily']
      .map((e) => {
        if (rest[e]) {
          return styles[e](rest[e]);
        }
      })
      .filter((e) => e);

    return (
      <Box style={styleBoxInput}>
        {label ? <Typography margin={[5, 0]}>{label}</Typography> : null}
        <Box>
          <TextInput
            ref={ref}
            autoCapitalize={'none'}
            autoCorrect={false}
            maxLength={255}
            underlineColorAndroid="rgba(0,0,0,0)"
            selectionColor={colors.black100}
            editable={!disabled}
            {...rest}
            style={[styles.defaultStyle, combinedStyle, style]}
          />
          {icon ? (
            <TouchableBox
              style={styles.icon}
              disabled={actionIcon ? false : true}>
              <ImageIcon name={icon} />
            </TouchableBox>
          ) : null}
        </Box>
      </Box>
    );
  },
);

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    paddingVertical: 0,
    color: colors.black100,
    fontFamily: 'Lexend',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    fontStyle: 'normal',
  },
  color: (color) => {
    return {color};
  },
  fontSize: (size) => {
    return {fontSize: size};
  },
  fontFamily: (fontFamily) => {
    return {fontFamily};
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '25%',
  },
});

export default Input;
