import {NavigationContainer} from '@react-navigation/native'
import { AppRoutes } from './app.routes'


export function Router(){
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}