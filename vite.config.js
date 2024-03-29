import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: './tsconfig.build.json',
		}),
	],
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'RebasedDesignSystem',
			fileName: 'index',
			formats: ['es', 'umd'],
		},
		outDir: './build',
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
				generatedCode: 'es2015',
			},
		},
		sourcemap: 'inline',
	},
});
