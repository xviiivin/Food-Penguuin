import firebase from "./firebase";

export const getHistoryRes = async (res) => {
    try {
        const usersRef = firebase.firestore().collection('history').where("nameres", '==', res).where('status', '==', false);;
        const snapshot = await usersRef.get();
        const allUsers = [];

        snapshot.forEach((doc) => {
            allUsers.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return await allUsers;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export const getResWithUID = async (uid) => {
    try {

        const usersRef = firebase.firestore().collection('restaurant').where("useruid", '==', uid);
        const snapshot = await usersRef.get();
        const allUsers = [];

        snapshot.forEach((doc) => {
            allUsers.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return await allUsers;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
