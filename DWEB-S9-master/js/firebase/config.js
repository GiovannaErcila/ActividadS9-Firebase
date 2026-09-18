import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// PASO 1: Copiá aquí el objeto firebaseConfig de tu propio proyecto Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBiFLtjpYqYBOrpJn13nQABewrLj9K2QfU",
  authDomain: "actividad9-panel-privado.firebaseapp.com",
  projectId: "actividad9-panel-privado",
  storageBucket: "actividad9-panel-privado.firebasestorage.app",
  messagingSenderId: "1034098252778",
  appId: "1:1034098252778:web:90e345127861d55b88f093"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
