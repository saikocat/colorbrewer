// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'index.ts',
    output: [
        {
            format: 'umd',
            file: 'index.js',
            name: 'colorbewer'
        },
        {
            format: 'es',
            file: 'index.es.js',
            name: 'colorbewer'
        }
    ],
    plugins: [
        typescript({
            declaration: true,
            rootDir: './',
            outDir: './build'
        }),
        commonjs(),
        resolve()
    ]
}
