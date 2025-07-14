import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({  
    assetsInclude: ["snippets/*"],
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