import firebase from "./firebase";


export const getUserInfo = async (uid) => {
    try {
        const userDocument = await firebase.firestore().collection('users').doc(uid).get();
        if (!userDocument.exists) {
            throw new Error('User not found in Firestore');
        }

        let data = await userDocument.data();

        console.log(data.firstname);
        return await data;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authenticatedUser) => {
            // Unsubscribe from further changes
            unsubscribe();

            if (authenticatedUser) {
                resolve(authenticatedUser);
            } else {
                
            }
        });
    });
}

export const logout = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User signed out!');
    } catch (error) {
        console.error(error);
    }
}