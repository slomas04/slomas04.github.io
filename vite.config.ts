import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({  
    assetsInclude: ["Media/**"],
    plugins: [    tailwindcss(),  

    ],
    build: {
        rollupOptions: {
          input: {
            main: './index.html'
          }
        }
      }
})