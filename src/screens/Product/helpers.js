import { Linking } from 'react-native';
import { deviceUtils } from '../../utils';

export const isNotMyProduct = (viewer, ownerId) => {
  if (viewer) {
    if (viewer.id === ownerId) {
      return false;
    }
  }
  return true;
};

export const getPhoneNumber = (number) => {
  let phoneNumber;
  if (!deviceUtils.isAndroid) {
    phoneNumber = `tel://${number}`;
  } else {
    phoneNumber = `tel:${number}`;
  }
  return phoneNumber;
};

export const openUrl = async (url, errorHandler) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      return Linking.openURL(url);
    }
    errorHandler();
  } catch (error) {
    errorHandler();
  }
};
