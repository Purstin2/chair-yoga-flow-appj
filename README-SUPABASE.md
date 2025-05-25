# Supabase Integration for User Authentication and Progress Tracking

This project uses Supabase for user authentication and progress tracking.

## Setup Instructions

### 1. Create a Supabase Account and Project

1. Go to [Supabase](https://supabase.com/) and sign up for an account
2. Create a new project
3. Note your project URL and anon key from the API settings

### 2. Set Up Environment Variables

Create a `.env` file in the root of your project with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace the placeholder values with your actual Supabase project URL and anon key.

### 3. Create the Required Tables in Supabase

Navigate to the SQL Editor in your Supabase dashboard and run the following SQL to create the user_progress table:

```sql
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  userId UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  completedLessons TEXT[] DEFAULT ARRAY[]::TEXT[],
  currentLesson TEXT DEFAULT '',
  lastAccessedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  settings JSONB DEFAULT '{}'::JSONB,
  
  UNIQUE(userId)
);

-- Add RLS (Row Level Security) policies
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own progress
CREATE POLICY "Users can read own progress" 
ON user_progress FOR SELECT 
USING (auth.uid() = userId);

-- Policy: Users can insert their own progress
CREATE POLICY "Users can insert own progress" 
ON user_progress FOR INSERT 
WITH CHECK (auth.uid() = userId);

-- Policy: Users can update their own progress
CREATE POLICY "Users can update own progress" 
ON user_progress FOR UPDATE 
USING (auth.uid() = userId);
```

### 4. Configure Authentication in Supabase

1. Go to Authentication settings in your Supabase dashboard
2. Configure your site URL and redirect URLs
3. Set up email templates if needed

## Usage in the Application

### Authentication

The application uses the `useAuth` hook for authentication:

```jsx
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, signIn, signUp, signOut } = useAuth();
  
  // Use these functions for authentication
}
```

### User Progress Tracking

Use the `useUserProgress` hook to track user progress:

```jsx
import { useUserProgress } from '@/hooks/useUserProgress';

function LessonComponent() {
  const { 
    progress, 
    completeLesson,
    isLessonCompleted,
    updateSettings 
  } = useUserProgress();
  
  // Check if a lesson is completed
  const completed = isLessonCompleted('lesson-1');
  
  // Mark a lesson as completed
  const handleComplete = () => {
    completeLesson('lesson-1');
  };
  
  // Update user settings
  const saveSettings = () => {
    updateSettings({ theme: 'dark', notifications: true });
  };
}
```

## Troubleshooting

- Make sure your environment variables are correctly set
- Check Supabase logs for authentication issues
- Verify Row Level Security policies if data access issues occur 