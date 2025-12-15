# Firebase Setup Guide

This guide will help you set up Firebase Firestore to receive contact form submissions.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Create a Firestore Database

1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" (we'll set up rules next)
4. Select a location for your database (choose closest to your users)
5. Click "Enable"

## Step 3: Set Up Firestore Security Rules

1. In Firestore Database, go to the "Rules" tab
2. Replace the default rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to designwithkarthick collection
    match /designwithkarthick/{document} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string;
      allow read, update, delete: if false; // Only you can read via Firebase Console
    }
  }
}
```

3. Click "Publish"

## Step 4: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>` to add a web app
5. Register your app with a nickname (e.g., "DesignWithKarthick Portfolio")
6. Copy the firebaseConfig object values

## Step 5: Create .env File

1. In your project root, create a `.env` file (copy from `.env.example`)
2. Add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. **Important:** Add `.env` to your `.gitignore` file to keep your keys private

## Step 6: Restart Your Development Server

```bash
npm run dev
```

## Viewing Submissions

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Firestore Database" in the left sidebar
4. You'll see a collection called `designwithkarthick`
5. Click on it to view all form submissions

## Data Structure

Each submission contains:
- `name`: User's full name
- `email`: User's email address
- `phone`: User's phone number
- `service`: Selected service type
- `budget`: Budget (if provided)
- `message`: User's message
- `timestamp`: When the form was submitted
- `status`: "new" (you can update this to "replied", "in-progress", etc.)

## Optional: Set Up Email Notifications

To receive email notifications when someone submits the form:

1. Go to Firebase Console > Functions
2. Enable Cloud Functions
3. Set up a trigger that sends an email when a new document is added to `designwithkarthick`

Or use a third-party service like Zapier to connect Firestore to your email.

## Security Notes

- Never commit your `.env` file to git
- The Firestore rules allow anyone to CREATE submissions but not READ them
- Only you can view submissions through the Firebase Console
- Consider adding rate limiting if you get spam submissions
