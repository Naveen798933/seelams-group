
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                admin: path.resolve(__dirname, 'admin.html')
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
