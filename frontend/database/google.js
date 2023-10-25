import * as Google from 'expo-google-app-auth'
import firebase from './firebase';

async function signInWithGoogleAsync() {
    try {
        const { idToken, refreshToken, clientId } = await Google.logInAsync({
            androidClientId: "762845299162-d7dd4aom0if43al8mio6rj0djqa6ljo8.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
        });
        console.log("resulfewt");

        console.log(idToken);

        if (result.type === 'success') {
            onSignIn(result);
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        console.log(e);
        return { error: true };
    }
}

const onSignIn = (googleUser) => {
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        if (!isUserEqual(googleUser, firebaseUser)) {
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
            );
            firebase.auth().signInWithCredential(credential).catch((error) => {
                console.log(error);
            });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}

const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.user.id) {
                return true;
            }
        }
    }
    return false;
}


export { signInWithGoogleAsync, onSignIn, isUserEqual }