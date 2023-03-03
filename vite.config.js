import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig( ( { command, mode } ) => ( {
  css: {
    postcss: {
      plugins: [
        {
          AtRule: {
            charset: ( atRule ) => {
              if ( 'charset' === atRule.name ) {
                atRule.remove()
              }
            },
          },
          postcssPlugin: 'internal:charset-removal',
        },
      ],
    },
  },
  plugins: [ react(), svgr.default(), commonjs() ],
  resolve: { alias: { '@': path.resolve( __dirname, './src' ) } },
  server: {
    port: 4000,
    proxy: { '/api': 'http://localhost:8000' },
  },
  // NOTE: for ckeditor custom build made from online builder
  // https://vitejs.dev/config/dep-optimization-options.html#optimizedeps-include
  optimizeDeps: { include: [ 'ckeditor5-custom-build' ] },
  build: {
    commonjsOptions: {
      // https://vitejs.dev/config/build-options.html#build-commonjsoptions
      exclude: [ 'ckeditor5-custom-build' ],
      include: [],
    },
  },
} ) )
