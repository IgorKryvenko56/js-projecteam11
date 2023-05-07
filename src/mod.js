// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
//   // Get a reference to the authentication service
//   const auth = firebase.auth();
  
//   // Get a reference to the Firestore database
//   const db = firebase.firestore();
  
//   // Listen for authentication state changes
//   auth.onAuthStateChanged(user => {
//     if (user) {
//       console.log(`User ${user.uid} is authenticated`);
//       // TODO: Load the user's shopping list from the database
//     } else {
//       console.log("No user is authenticated");
//       // TODO: Show the login form
//     }
//   });
  
//   // Sign up a new user with email and password
//   function signUp(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         console.log(`User ${user.uid} signed up successfully`);
//         // TODO: Create a new shopping list for the user in the database
//       })
//       .catch(error => {
//         console.error(`Error signing up: ${error}`);
//         // TODO: Show an error message to the user
//       });
//   }
  
//   // Log in an existing user with email and password
//   function logIn(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         console.log(`User ${user.uid} logged in successfully`);
//         // TODO: Load the user's shopping list from the database
//       })
//       .catch(error => {
//         console.error(`Error logging in: ${error}`);
//         // TODO: Show an error message to the user
//       });
//   }
  
//   // Log out the current user
//   function logOut() {
//     auth.signOut()
//       .then(() => {
//         console.log("User logged out successfully");
//         // TODO: Clear the shopping list from the UI
//       })
//       .catch(error => {
//         console.error(`Error logging out: ${error}`);
//         // TODO: Show an error message to the user
//       });
//   }
  
//   // Save the user's shopping list to the database
//   function saveShoppingList(shoppingList) {
//     const user = auth.currentUser;
//     if (user) {
//       const shoppingListRef = db.collection("users").doc(user.uid).collection("shoppingLists").doc("default");
//       return shoppingListRef.set({ items: shoppingList })
//         .then(() => {
//           console.log("Shopping list saved successfully");
//         })
//         .catch(error => {
//           console.error(`Error saving shopping list: ${error}`);
//           // TODO: Show an error message to the user
//         });
//     } else {
//       console.error("No user is authenticated");
//       // TODO: Show an error message to the user
//     }
//   }
  
//   // Load the user's shopping list from the database
//   function loadShoppingList() {
//     const user = auth.currentUser;
//     if (user) {
//       const shoppingListRef = db.collection("users").doc(user.uid).collection("shoppingLists").doc("default");
//       return shoppingListRef.get()
//         .then(doc => {
//           if (doc.exists) {
//             const shoppingList = doc.data().items;
//             console.log(`Shopping list loaded successfully: ${shoppingList}`);
//             // TODO: Display the shopping list in the UI
//           } else {
//             console.log("No shopping list found");
//             // TODO: Show a message to the user that no shopping list is found
//           }
//         
    

