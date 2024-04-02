// 打包 UMD 模块所用的配置文件
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'WekoJsComponents',
      fileName: 'weko-js-components',
      formats: ['umd'],
    },
    // vite内部使用的是 rollup，所以可以直接配置 rollupOptions
    rollupOptions: {
      // 排出某些模块，不打包进去
      external: ['vue'],
      output: {
        exports: 'named',
        // 对应的是上方 external 中的依赖
        // 指定了通过什么名字全局引入依赖
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
