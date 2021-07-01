import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {scale} from '@src/utils/scale';

const {block, set, greaterThan, lessThan, Value, cond, sub} = Animated;

const BottomSheetWrapper = ({
  bs,
  snapPoints,
  minimumHeight,
  maxHeight,
  onCloseCb = () => {},
  children,
}) => {
  // BLOCK FOR BOTTOM SHEET ANIMATION
  let trans = new Value(0);
  let untraversedPos = new Value(0);
  let prevTrans = new Value(0);

  let headerPos = block([
    cond(
      lessThan(untraversedPos, sub(trans, minimumHeight)),
      set(untraversedPos, sub(trans, minimumHeight)),
    ),
    cond(greaterThan(untraversedPos, trans), set(untraversedPos, trans)),
    set(prevTrans, trans),
    untraversedPos,
  ]);
  // END BOTTOM SHEET ANIMATION

  // Bottom sheet header
  const renderHeader = () => (
    <Pressable
      onPress={() => {
        bs.current?.snapTo(0);
      }}>
      <View style={styles.headerBottomSheet}>
        <View style={styles.header} />
      </View>
    </Pressable>
  );

  // Bottom sheet inner content
  const renderInner = () => (
    <View>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          zIndex: 1,
          transform: [
            {
              translateY: headerPos,
            },
          ],
        }}>
        {renderHeader()}
        <View style={[styles.content, {height: maxHeight ?? scale(300)}]}>
          <View style={styles.itemContainer}>{children}</View>
        </View>
      </Animated.View>
    </View>
  );

  return (
    <BottomSheet
      ref={bs}
      initialSnap={0}
      contentPosition={trans}
      snapPoints={snapPoints}
      onCloseEnd={() => {
        onCloseCb();
      }}
      renderContent={renderInner}
    />
  );
};

export default BottomSheetWrapper;
