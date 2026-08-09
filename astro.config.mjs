// @ts-check
import { defineConfig, fontProviders} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [{
    provider: fontProviders.local(),
    name: "TerminessMono",
    cssVariable: "--font-terminess-mono",
    options:{
      variants: [{
        src: ['./src/fonts/TerminessMonoWOFF2/TerminessNFM.woff2'],
        weight: 'normal',
        style: 'normal'
      }, {
        src: ['./src/fonts/TerminessMonoWOFF2/TerminessNFM-Bold.woff2'],
        weight: 'bold',
        style: 'normal'
      }, {
        src: ['./src/fonts/TerminessMonoWOFF2/TerminessNFM-Italic.woff2'],
        weight: 'normal',
        style: 'italic'
      }, {
        src: ['./src/fonts/TerminessMonoWOFF2/TerminessNFM-BoldItalic.woff2'],
        weight: 'bold',
        style: 'italic'
      }]
    }
  }, {
    provider: fontProviders.local(),
    name: "SegoeUI",
    cssVariable: "--font-segoeui",
    options:{
      variants: [{
        src: ['./src/fonts/SegoeUI/SegoeUI.woff2'],
        weight: 'normal',
        style: 'normal'
      },{
        src: ['./src/fonts/SegoeUI/SegoeUI-SemiBold.woff2'],
        weight: 'bold',
        style: 'normal'
      }, {
        src: ['./src/fonts/SegoeUI/SegoeUI-Bold.woff2'],
        weight: 'bolder',
        style: 'normal'
      }, {
        src: ['./src/fonts/SegoeUI/SegoeUI-Italic.woff2'],
        weight: 'normal',
        style: 'italic'
      }, {
        src: ['./src/fonts/SegoeUI/SegoeUI-BoldItalic.woff2'],
        weight: 'bold',
        style: 'italic'
      }]
    }
  }],
});