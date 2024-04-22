import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {HomeView} from './home/HomeView'
import {ContactsView} from './contacts/ContactsView'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
          <Stack.Screen name='Home' component={HomeView}/>
          <Stack.Screen name='Contacts' component={ContactsView} options={contactsOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const defaultOptions={
   headerStyle:{
    backgroundColor:'#25CCB0'
  }
}
const contactsOptions={
  title:'Lista de Contatos'
 
}