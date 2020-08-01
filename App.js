import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './src/ListItem';

import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  const tarefas = [
    {id: '1', tarefa: 'ganhar mais'},
    {id: '2', tarefa: 'terminasr projetos'},
    {id: '3', tarefa: 'estudar ReactJs'},
    {id: '4', tarefa: 'Programar mais'},
  ];


  return (
    <View style={styles.container}>
      <FlatList
        data = {tarefas}
        keyExtractor = {item => item.id}
        renderItem = { ({item}) => (
          <ListItem 
          data={item}
          handLeft = {() => alert('Tarefa Comcluida!')}
          handRight = {() => alert('Tarefa Excluida!')}
          />
        )}
        ItemSeparatorComponent = { () => <Separator />}
      />
    </View>
  );
}

const Separator = () => <View style={{flex:1, height:1, backgroundColor: "#ddd"}}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
