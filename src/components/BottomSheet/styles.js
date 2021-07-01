import {scale} from '@src/utils/scale';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerBottomSheet: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  itemContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    height: scale(160),
    flexDirection: 'row',
  },
  header: {
    height: 5,
    width: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
  },
  content: {backgroundColor: '#fff', width: '100%'},
});

export default styles;
