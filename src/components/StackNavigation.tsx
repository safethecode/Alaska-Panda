import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Arrow from '../assets/arrow';
import Cancel from '../assets/cancel'
import { scale } from '../constants/size';

type Props = {
  title: string;
  status: boolean;
};

const StackNavigation: React.SFC<Props> = props => (
  <View style={styles.container}>
    {props.status ? (
      <Arrow
        width={scale(20)}
        height={scale(20)}
        marginTop={scale(16)}
        marginLeft={scale(24)}
      />
    ) : (
      <Cancel
        width={scale(20)}
        height={scale(20)}
        marginTop={scale(16)}
        marginLeft={scale(24)}
      />
    )}
    <Text style={styles.TextStyle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      height: scale(50),
      backgroundColor: '#FFF',
    },
    TextStyle: {
      marginTop: scale(15),
      position: 'absolute',
      alignSelf: 'center',
      fontSize: 20,
    },
  });

export default StackNavigation;