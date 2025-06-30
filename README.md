# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# CircleApp - Social Media Platform

CircleApp adalah platform media sosial yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## Fitur yang Tersedia

### 🔐 Autentikasi
- Login dan Register user
- Forgot password dan reset password
- Protected routes

### 👤 Profile Management
- **Profile Page**: Menampilkan data user yang sudah register (username, fullname, bio, banner, avatar)
- **Edit Profile**: Kemampuan untuk mengupdate profile dengan upload gambar
- **Profile List**: Menampilkan semua post/thread dari user
- **Real-time Data**: Profile data diambil dari API dan diupdate secara real-time

### 📝 Thread/Post Management
- Create new thread/post dengan gambar
- View all threads dari semua user
- View user's own threads di profile page
- Like dan reply system (UI ready)

### 🎨 UI/UX Features
- Modern dark theme design
- Responsive layout
- Loading states
- Error handling
- Toast notifications
- File upload dengan preview

## Struktur Komponen Profile

### Profile Components
- `Profile.tsx` - Halaman utama profile
- `ProfileList.tsx` - List semua post user
- `EditDialog.tsx` - Dialog untuk edit profile
- `ProfileBar.tsx` - Profile card di sidebar

### Hooks
- `useCurrentUser()` - Mengambil data profile user
- `useUserThreads()` - Mengambil thread/posts user
- `useUpdateProfile()` - Update profile data

### API Endpoints
- `GET /profile` - Mengambil data profile
- `PUT /profile` - Update profile (dengan file upload)
- `GET /user/threads` - Mengambil thread user
- `GET /threads` - Mengambil semua thread

## Cara Penggunaan

1. **Register/Login**: User harus register dan login terlebih dahulu
2. **Profile Data**: Setelah login, profile akan menampilkan data user yang sudah register
3. **Edit Profile**: Klik tombol "Edit Profile" untuk mengubah data
4. **Upload Images**: Bisa upload avatar dan banner image
5. **View Posts**: Semua post user akan ditampilkan di profile page

## Teknologi yang Digunakan

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI, shadcn/ui
- **Form Handling**: React Hook Form, Zod validation
- **HTTP Client**: Axios
- **Notifications**: Sonner
- **Icons**: React Icons

## Setup dan Instalasi

1. Clone repository
2. Install dependencies: `npm install`
3. Setup environment variables
4. Run development server: `npm run dev`

## Environment Variables

```env
VITE_API_BASE_URL=your_api_base_url
```

## Struktur File

```
src/
├── components/ui/          # UI Components
├── features/              # Feature components
│   ├── auth/             # Authentication
│   ├── profile/          # Profile management
│   ├── home/             # Home/Thread features
│   └── dialog/           # Dialog components
├── hooks/                # Custom hooks
├── lib/                  # Utilities and schemas
├── layouts/              # Layout components
└── pages/                # Page components
```

## Fitur Profile yang Lengkap

✅ **Data User**: Username, fullname, bio, banner, avatar  
✅ **Edit Profile**: Update semua data profile  
✅ **File Upload**: Upload avatar dan banner dengan preview  
✅ **Real-time Updates**: Data terupdate otomatis setelah edit  
✅ **User Posts**: Menampilkan semua post user  
✅ **Responsive Design**: Tampilan yang responsif  
✅ **Loading States**: Loading indicator saat fetch data  
✅ **Error Handling**: Error handling yang baik  
✅ **Toast Notifications**: Notifikasi sukses/error  
