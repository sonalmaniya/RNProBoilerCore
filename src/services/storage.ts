import AsyncStorage from '@react-native-async-storage/async-storage';

// Handle or log Error
const handleAsyncStorageError = (error: any) => {
  console.error('AsyncStorage Error:', error);
  return null;
};

export const setItemInStorage = async (key: string, data: string) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const getItemFromStorage = async (
  key: string,
): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const removeStoreItem = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const setObjectInStore = async (key: string, data: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const getObjectFromStore = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const storeMultiDelete = async (keyArray: string[]) => {
  try {
    return await AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    return handleAsyncStorageError(error);
  }
};
