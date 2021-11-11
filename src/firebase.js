// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: 'AIzaSyCiPMHs0AuRbI-HM6jkgZrHW2FhiTnhFQY',
	authDomain: 'planetside-97a5d.firebaseapp.com',
	projectId: 'planetside-97a5d',
	storageBucket: 'planetside-97a5d.appspot.com',
	messagingSenderId: '1056443477698',
	appId: '1:1056443477698:web:5340a834e0f7888bb0d55b',
	measurementId: 'G-Y1CV8VFT8Q'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default firebase
export { app, analytics }
