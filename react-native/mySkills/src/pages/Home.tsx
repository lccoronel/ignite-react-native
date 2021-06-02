import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHours = new Date().getHours();
    console.log(currentHours);

    if (currentHours < 12) {
      setGretting('Good morning')
    } else if (currentHours >= 12 && currentHours <= 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night')
    }
  }, []);
  
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas</Text>
      <Text style={styles.greettings}>{gretting}</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[ styles.title, { marginVertical: 50 } ]}>My skills</Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },

  greettings: {
    color: '#fff',
  }
});