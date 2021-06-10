import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static instance = new Storage();
  
  store = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.error('Storage Error', e);
      return false;
    }
  };

  get = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error('Storage get Error', e);
    }
  };

  remove = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage remove Error', e);
      return false;
    }
  };

  multiGet = async (keys: any) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (e: any) {
      console.error('Storage  multiGet Error', e);
      throw Error(e);
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (e: any) {
      console.error('Storage getAllKeys err', e);
      throw Error(e);
    }
  };
}

export default Storage; 