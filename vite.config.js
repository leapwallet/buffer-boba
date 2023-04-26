import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'NameMatcha',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return `index.es.js`
          case 'cjs':
            return `index.js`
        }
      }
    },
    sourcemap: true,
    rollupOptions: {
      external: ['@cosmjs/proto-signing', 'osmojs', 'stridejs', 'protobufjs']
    }
  },
  exclude: ['./src/**/*.spec.ts']
})
