import firebase from "./firebase";

export const getAllRestaurant = async () => {
    try {

        const usersRef = firebase.firestore().collection('restaurant');
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

export const getResStatusFalse = async () => {
    try {
        const usersRefewf = firebase.firestore().collection('restaurant').where("status", '==', 0);
        const snapshot = await usersRefewf.get();
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

export const updateStatus = async (id, status) => {
    try {

         firebase.firestore().collection('restaurant').doc(id).update({
            status: status
        });
        return true;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}