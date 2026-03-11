# 🔐 Firebase Setup Checklist

## Quick Fix for "auth/configuration-not-found" Error

### 📋 Checklist

- [ ] **Firebase Project Created**
  - Project: brgy-system-44d04
  - [Firebase Console](https://console.firebase.google.com)

- [ ] **Authentication Enabled**
  - [ ] Go to Authentication → Sign-in method
  - [ ] Enable "Email/Password" provider
  - [ ] Click Save

- [ ] **Test Users Created** (optional - demo mode works without this)
  - [ ] captain@brgy.ph / captain123
  - [ ] assistant@brgy.ph / assistant123
  - [ ] health@brgy.ph / health123

- [ ] **Firestore Database Setup** (if using real Firebase)
  - [ ] Create Firestore Database (Start in test mode)
  - [ ] Create collection: `officials`
  - [ ] Add user documents with proper roles

---

## 🚀 Quick Start Options

### Option 1: Use Demo Mode (Recommended for Development)
✅ **Easiest** - Works immediately without Firebase setup
- Open `index.html` in browser
- Demo mode automatically activates
- Data stored in browser localStorage
- Perfect for testing & development

### Option 2: Configure Firebase (Production)
1. Follow checklist above
2. Firebase automatically initializes
3. Real data stored in Firestore
4. User authentication required

---

## 🧪 Testing & Debugging

### Check what mode is active:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `useDemo`
   - Returns `true` → Using demo mode ✓
   - Returns `false` → Using Firebase ✓

### View initialization logs:

In Console tab, look for:
- ✅ "Firebase app initialized"
- ✅ "Firebase auth initialized"  
- ✅ "Firebase Firestore initialized"
- ⚠️ "Using demo mode (localStorage) instead"

### Force demo mode (if stuck on auth error):

```javascript
// In browser console:
useDemo = true;
```

Then try login with: **captain@brgy.ph / captain123**

---

## 🔗 Links

- [Firebase Console](https://console.firebase.google.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Setup Guide](https://firebase.google.com/docs/firestore/quickstart)
- [Authentication Setup](https://firebase.google.com/docs/auth/web/start)

---

## 💾 Data Storage

### Demo Mode (localStorage)
- Data: Browser's local storage
- Persists: Only in this browser
- Clear: Browser cache clears data

### Firebase Mode  
- Data: Firestore database
- Persists: Cloud storage
- Access: Any device with credentials

