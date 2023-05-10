// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);
// Set up the authorization code for the user when they log in:

const provider = new firebase.auth.GoogleAuthProvider();

const login = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    const accessToken = await user.getIdToken();
    // Save the accessToken in local storage or state to use in subsequent requests
  } catch (error) {
    console.log(error);
  }
};
// Save the shopping list in the user's account in the Firebase Realtime Database:

const saveShoppingList = async (list) => {
  try {
    const accessToken = // get the accessToken from local storage or state
    await firebase.database().ref(`users/${accessToken}/shoppingList`).set(list);
  } catch (error) {
    console.log(error);
  }
};
// Display the appropriate header for authorized and unauthorized users:
// For unauthorized users:


{/* For authorized users: */}

{/* On mobile: */}


{/* <header>
  <img src="logo.png" alt="Logo">
  <div class="theme-switcher"></div>
  <button class="burger-menu"></button>
  <div class="user-bar">
    <img src="user-avatar.png" alt="User Avatar">
    <span class="user-name">John Doe</span>
  </div>
</header> */}

{/* When the user clicks on the UserBar on tablet & desktop, you can toggle the display of the Log out button: */}


const userBar = document.querySelector(".user-bar");
const logoutButton = document.querySelector(".logout-button");

userBar.addEventListener("click", () => {
  logoutButton.classList.toggle("hidden");
});

logoutButton.addEventListener("click", () => {
  firebase.auth().signOut();
  window.location.href = "/";
});