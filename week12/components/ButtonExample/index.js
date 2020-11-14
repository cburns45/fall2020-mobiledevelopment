import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';

const ButtonExample = (props) => {

    const [pressed, setPressed] = useState(true);

    return(
      <View>
          <Text style={props.styles.header}>Which BR is Better</Text>
          <Button title="Warzone" onPress= { ()=> alert("You chose Warzone!")}/>
          <Divider />
          <Button title="Fortnite" onPress= { ()=> alert("You chose Fortnite (wrong choice)!")}/>
          <Divider />
          <Button title="PUBG" onPress= { ()=> alert("You chose PUBG!")}/>
      </View>  
    );
}

export default ButtonExample;