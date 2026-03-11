# 🐛 Firebase Error Troubleshooting Guide

## ❌ Error: "auth/configuration-not-found"

### What It Means
Firebase Authentication hasn't been set up in your Firebase Console, OR the authentication service isn't responding properly.

### ✅ Quick Fixes (Try in Order)

#### Fix #1: Check Browser Console (Takes 30 seconds)
1. Press `F12` to open DevTools
2. Click **Console** tab
3. Look for log messages:
   - If you see ✅ messages → Firebase loaded OK
   - If you see ⚠️ or ❌ messages → That's your problem
4. Check the specific error message

#### Fix #2: Force Demo Mode to Test (Takes 10 seconds)
1. Open DevTools Console (F12)
2. Paste this: `useDemo = true;`
3. Press Enter
4. Try login: `captain@brgy.ph / captain123`
5. If this works → Firebase config is the issue

#### Fix #3: Enable Firebase Authentication (Takes 2 minutes)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project **brgy-system-44d04**
3. Click **Authentication** in left menu
4. Click **Sign-in method** tab
5. Find **Email/Password** option
6. Click it and toggle **Enable** switch
7. Click **Save**
8. Wait 30 seconds
9. Refresh your app and try again

#### Fix #4: Verify Firebase Config (Takes 1 minute)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Go to **Project Settings** (gear icon)
3. Find your app registration
4. Copy the web config
5. Compare it with the `firebaseConfig` in `index.html`
6. Update if different

---

## 🔍 Diagnosis: Which Issue Do I Have?

### Issue A: "Firebase SDK not loading"
**Symptoms:** Console shows error about Firebase not defined
- ✅ Solution: Check internet connection
- ✅ Try opening in incognito/private window
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Use Demo Mode instead

### Issue B: "auth/configuration-not-found"
**Symptoms:** Firebase loads but auth not configured
- ✅ Solution: Enable Email/Password in Firebase Console (see Fix #3 above)
- ✅ Temporary: Use Demo Mode
- ✅ Check: Is authentication provider enabled?

### Issue C: "User profile not found"
**Symptoms:** Email/password works but Firestore lookup fails
- ✅ Solution: Create user documents in Firestore `officials` collection
- ✅ Document ID must match user's UID (from Firebase Authentication)
- ✅ Include fields: `role`, `name`

### Issue D: "CORS or Network Error"
**Symptoms:** Can't connect to Firebase at all
- ✅ Check: Internet connection working?
- ✅ Try: Different WiFi/network
- ✅ Try: Browser's incognito mode
- ✅ Try: Different browser
- ✅ Fallback: Use Demo Mode

---

## 📊 Common Error Codes & Fixes

| Error Code | Meaning | Fix |
|-----------|---------|-----|
| `auth/configuration-not-found` | Auth not set up | Enable in console |
| `auth/user-not-found` | Email not registered | Create user first |
| `auth/wrong-password` | Password incorrect | Check password |
| `auth/too-many-requests` | Too many attempts | Wait 15 mins |
| `auth/invalid-email` | Bad email format | Fix email |
| `permission-denied` | Firestore permissions | Fix security rules |
| `operation-not-allowed` | Feature disabled | Enable in console |

---

## 🧪 Debug Mode: Check Status

Paste into browser Console (F12):

```javascript
// Check if Firebase is loaded
console.log("Firebase loaded:", typeof firebase !== 'undefined');

// Check if Demo Mode
console.log("Using Demo Mode:", useDemo);

// Check if Auth initialized
console.log("Auth available:", auth !== null);

// Check if Firestore initialized
console.log("Firestore available:", db !== null);

// Check config
console.log("Firebase Config:", firebaseConfig);
```

---

## 🚀 Decision Tree

```
Is the app working?
├─ YES → Great! You're all set
└─ NO → See error on login page?
   ├─ "auth/configuration-not-found"
   │  └─ Go to Fix #3: Enable Auth in Firebase Console
   ├─ "User profile not found"
   │  └─ Create user documents in Firestore
   ├─ Network/CORS error
   │  └─ Check internet, try incognito, use Demo Mode
   └─ Other error
      └─ Read error message, check browser Console logs
```

---

## 🆘 Still Stuck?

**Quickest Solution: Use Demo Mode**
```javascript
// In browser Console:
useDemo = true;
```

Then login with:
- Email: `captain@brgy.ph`
- Password: `captain123`

This works offline and tests all features without Firebase setup.

---

## 📝 Notes

- Demo mode uses browser localStorage (data not synced across devices)
- Firebase mode uses cloud storage (accessible from any device)
- Always check browser DevTools Console (F12) for actual errors
- Most errors are configuration issues, not code bugs

