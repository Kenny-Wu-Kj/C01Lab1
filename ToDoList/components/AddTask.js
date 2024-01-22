import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim() !== '') {
          onAddTask(String(title));
          setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter the task"
            value={title}
            onChangeText={(text) => setTitle(text)}
            keyboardType="default"
            returnKeyType="done"
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      );
    };

    const styles = StyleSheet.create({
        addTodoForm: {
          margin: 10,
        },
        input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        },
    });

export default AddTask;