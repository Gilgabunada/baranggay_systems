# INTEGRATED BARANGGAY INFORMATION SYSTEM

## 🔧 Firebase Configuration & Setup Guide

### ❌ Error: "auth/configuration-not-found"

This error occurs when Firebase Authentication is not properly configured. Follow these steps to fix it:

### ✅ Step 1: Enable Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **brgy-system-44d04**
3. In the left sidebar, go to **Authentication** → **Sign-in method**
4. Enable **Email/Password** provider:
   - Click on Email/Password
   - Toggle **Enable**
   - Click **Save**

### ✅ Step 2: Create Test Users (if needed)

1. In Authentication section, go to **Users** tab
2. Click **Add user** and create accounts:
   - **captain@brgy.ph** / password: `captain123` (role: Captain)
   - **assistant@brgy.ph** / password: `assistant123` (role: Assistant)
   - **health@brgy.ph** / password: `health123` (role: Healthcare)

### ✅ Step 3: Set User Roles in Firestore

If using real Firebase, you need to store user profiles in Firestore:

1. Go to **Firestore Database** → **Create Database** (if not exists)
2. Create a collection called **officials**
3. For each user, add a document with their UID as the document ID:

```json
{
  "role": "captain",
  "name": "Hon. Roberto Santos"
}
```

### ⚠️ Temporary Workaround: Use Demo Mode

The application automatically falls back to **demo mode** if Firebase isn't configured. In demo mode:
- All data is stored in browser localStorage
- No Firebase connection needed
- Use the demo credentials shown on the login page

**Demo Mode is perfect for:**
- Testing the system locally
- Development without internet
- Learning the interface

### 🔍 Troubleshooting

#### Issue: Still getting "auth/configuration-not-found"?

1. **Check browser console:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for error messages (prefixed with ✅, ⚠️, or ❌)

2. **Verify Firebase Config is correct:**
   - The config in `index.html` should match your Firebase project
   - Go to Firebase Console → Project Settings → Your apps
   - Compare the config in the app registration with what's in the code

3. **Force demo mode:**
   - Open DevTools Console
   - Run: `useDemo = true; doLogin();`
   - This bypasses Firebase and uses localStorage

#### Issue: Can't find your Firebase project?

1. Check if you're logged into the correct Google account
2. Go to [Firebase Console](https://console.firebase.google.com)
3. Search for "brgy-system-44d04" in projects

#### Issue: Firebase files not loading?

Check browser console for CORS errors. If Firebase CDN scripts aren't loading:
- Ensure you have internet connection
- Try opening in an incognito window
- Clear browser cache (Ctrl+Shift+Delete)

### 📱 Using the Application

**Default Demo Credentials:**
- 🏅 **Captain:** captain@brgy.ph / captain123
- 👨‍💼 **Assistant:** assistant@brgy.ph / assistant123  
- 🏥 **Healthcare:** health@brgy.ph / health123

**Features Available:**
- Resident registry management
- Household grouping
- Document issuance (certificates, clearances)
- Blotter records & summons
- Healthcare records (vaccines, maternal)
- Resident request processing
- Dashboard with statistics
