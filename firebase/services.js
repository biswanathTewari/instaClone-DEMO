import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const firestoreDB = firestore();
const firebaseAuth = auth();

export {firebaseAuth, firestoreDB};
