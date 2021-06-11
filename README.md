# WBOOK

React Native App.

![Alt Text](./assets/WBOOK.gif)

* Ubicarnos sobre el directorio del proyecto

```
>> cd wolox
```
* instalar las dependencias
```
>> yarn add
```
* correr el proyecto

```
>> npx react-native start &&  npx react-native run-android
```

* ejecutar el servidor 
```
>> json-server --watch ./assets/db.json
```

* opcional, configurar el emulator para correr en el mismo puerto.
```
>> adb -s emulator-5554 reverse tcp:3000 tcp:3000
```