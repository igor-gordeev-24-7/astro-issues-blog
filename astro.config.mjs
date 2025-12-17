import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Указываем корневую папку для стилей
  scopedStyleStrategy: 'class',
  
  // Настройки для деплоя
  site: process.env.SITE_URL || 'https://example.com',
  
  // Оптимизация сборки
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  
  // Поддержка Markdown (для превью статей)
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});