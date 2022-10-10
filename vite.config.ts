import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { resolve, dirname } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({dts: true}), 
  vueI18n({
    include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
