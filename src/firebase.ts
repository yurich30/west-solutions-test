import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4JQyiDNcevSUdoUiHCdmyEOKo_hejxYE',
  authDomain: 'west-solutions.firebaseapp.com',
  projectId: 'west-solutions',
  storageBucket: 'west-solutions.appspot.com',
  messagingSenderId: '552159850782',
  appId: '1:552159850782:web:731ad0a5f7458604d6990f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
