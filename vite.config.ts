import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';

export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        tsconfigPaths(),
        linterPlugin({
            include: ['./src/**/*.{ts,tsx}'],
            linters: [
                new EsLinter({
                    configEnv,
                    serveOptions: { clearCacheOnStart: true },
                }),
                new TypeScriptLinter(),
            ],
        }),
    ],
}));
