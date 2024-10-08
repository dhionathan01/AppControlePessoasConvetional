import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const [pessoas, setPessoas] = useState(0);
  const [limitePessoas, setLimitePessoas] = useState(10);
  const [notification, setNotification] = useState(false);
  function addPessoas() {
    if (pessoas < 10) {
      setPessoas(pessoas + 1);
    } else {
      setNotification(true);
    }
  }
  function removerPessoas() {
    if (pessoas > 0) {  
      setPessoas(pessoas - 1);
    }
    if (pessoas <= 10) {
      setNotification(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.titulo}>Pessoas no Estabelecimento</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.contador}>
          <Text style={styles.number}>{pessoas}</Text>
        </View>
          {notification && (
            <View style={styles.notificationArea}>
                <Text style={styles.textNotification}>Você atingiu o limite de pessoas!</Text>
            </View>
          )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={addPessoas}
        >
          <Text style={styles.btnAddText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRemover}
          onPress={removerPessoas}
        >
          <Text style={styles.btnAddText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 5,
  },
  body: {
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    gap: 25
  },
  titulo: {
    fontSize: 25,
    color: 'gray'
  },
  contador: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    backgroundColor: '#88BEE2',
    marginTop: 50,
    borderRadius: 15,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationArea: {
    marginTop: 20,
    backgroundColor: '#42A5F5',
    padding: 10,
    borderRadius: 15,
  },
  textNotification: {
    color: 'white',
    fontSize: 20
  },
  number: {
    color: 'white',
    fontSize: 30
  },
  btnAdd: {
    padding: 10,
    backgroundColor: '#90CAF9',
    borderRadius: 10,
  },
  btnRemover: {
    padding: 10,
    backgroundColor: '#90CAF9',
    borderRadius: 10,
  },
  btnAddText: {
    color: 'white',
    fontSize: 20,
  } 
});
