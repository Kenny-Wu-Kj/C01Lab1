# C01Lab1
CSCC01 - Introduction to Software Engineering

Lab 1

Objectives
    ● Understanding React Native Basics - components, state, props, and workflow
    ● Getting familiar with live previewing and testing on Expo Go
    ● Applying the learned concepts to build a simple React Native application

Logistics
    ● This lab is worth 2 points and it will be supervised by your TA during the tutorial
    session of Week 2. If you encounter any problem while doing the steps listed in the
    next section, ask the TA for help.
    ● Attendance will be taken during the tutorial session, and a 5% penalty will be applied
    for being absent with no valid excuse.
    ● The lab should be done individually.
    ● The due date is Jan 21, 2024.

Instructions
1.  Complete the demo following the instructions in the README file of this repository. This
    demo will be shown in your tutorial and is designed to help you solve the lab.

2.  Create a GitHub repository called ‘C01Lab1’ with a README.md file.

3.  Clone the repo into an existing or new directory of your choice using a terminal.

4.  Open VS Code. Go to File > Open Folder > Locate your directory > Click Open

5.  Create a new terminal session and run: npx create-expo-app ToDoList. Then run
    cd ToDoList and npm start sequentially.

6.  You will create a new app similar to CounterApp. You will make a to-do List application
    with two functionalities: adding a task and removing a task.

7.  At this point, you should have App.js and other default files such as app.json and
    package.json.

8.  Create a directory called ‘components’ at the root directory (at the same level as App.js).
    a) You can do this by right clicking on the root directory > New Folder on the Explorer
    section of VS Code, or in the terminal with ‘mkdir components’
    b) You will have two components here: ToDoList.js and AddTask.js.

9. Define ToDoList.js as follows:
    a) Import React and necessary components (useState, View, Text, Button, StyleSheet,
    uuidv4, etc.)
    b) It takes an array of String as a prop to the functional component ToDoList. Each string
    represents the title of a task/to-do item.
    Winter 2024
    c) It initializes the state for the ‘toDos’ array by mapping over the initial values and
    putting it into an object containing a uniquely generated id and a title.
    d) Implement an array function ‘addToDo’ with a parameter `newTitle` and use the
    state setter, previous state values, and spread operator to add a new ToDo object.
    e) Implement an array function ‘removeToDo’ with a parameter ‘id’ that removes the
    toDo object matching the ‘id’ from the previous state values using the state setter.
        ● You may use the built-in JavaScript ‘filter’ method.
        f) Inside the ‘return` statement, map over the ‘toDos’ state array and render each
        item’s ‘title’ as Text along with a remove Button that passes in the ‘removeToDo’
        function as a ‘onPress’ prop.
        ● The Text and Button are enclosed in the same View with id as a specified key.
        ● Include the AddTask component with the ‘onAddTask’ prop.
    g) Set the defaultProps as an empty array.
    h) The styles are provided, so you don’t have to implement them. View styles.
    i) Export the ‘ToDoList’ component.

10. Define AddTask.js as follows:
    a) Import React and necessary components.
    b) Declare the functional component ‘AddTask’ that takes in the ‘onAddTask’ prop, a
    function to handle adding a new task/to-do item.
    c) Use the ‘useState’ hook to manage the state of the input to-do ‘title’. It will be set to
    an empty string.
    d) Implement the ‘handleAddTask’ function that’s called when the ‘Add Task’ button is
    called. It adds the new task ‘title’ if the trimmed input is not empty using the prop
    ‘onAddTask’ function. Then, set the state to empty with the state setter.
    e) Return the TextInput and Button components enclosed in the same View component.
        ● Set TextInput value as the state variable, and pass the onChangeText callback
        function that calls the state setter with the updated text.
        ● Button should add a new task/to-do on press with ‘handleAddTask’ as a prop.
    f) Apply the provided styles to the components. View styles.
    g) Export the ‘AddTask’ component.

11. Modify App.js to include the ‘ToDoList’ component and render it with an array of Strings
    as a prop. Ensure that the prop naming is consistent between the two.
    
12. Add the files to git, commit, and push the changes to the repo.

Submission
    ● Submit the GitHub Repository link containing ToDoList.js, AddTask.js, App.js, and
    other dependency files. Make sure the app is functional.
    Evaluation
    2 pts: Implementation of ToDoList.js and AddTask.js is mostly correct
    1 pt: Implementation is partially correct with notable issues
    Winter 2024
    0 pts: Insignificant/irrelevant attempt or no submission
