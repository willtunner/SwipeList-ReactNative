import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ data, handLeft, handRight }) {

  function LeftActions(progress, dragX) {

    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.LeftAction}>
        <Animated.Text style={[styles.LeftActionText, { transform: [{ scale }] }]}>Concluir</Animated.Text>
      </View>
    );
  }

  function RightActions({progress, dragX, onPress}) {

    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.RightAction}>
          <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Excluir</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }


  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={handLeft}
      renderRightActions={
        (progress, dragX) => <RightActions progress={progress} dragX={dragX} 
        onPress={handRight}/>
      }>
      <View style={styles.container}>
        <Text style={styles.text}>{data.tarefa}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 17,
    color: '#222'
  },
  LeftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1//fica melhor sem isso
  },
  LeftActionText: {
    color: '#FFF',
    padding: 20,
    fontWeight: "bold",
    fontSize: 25
  },
  RightAction: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    height: '100%',
    flex:1,
    width: 100,
    alignItems: 'center',
  },

});