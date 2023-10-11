// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
    // cjs & umd
    {
        input: 'index.ts',
        output: {
            format: 'umd',
            dir: './',
            name: 'colorbrewer'
        },
        plugins: [
            typescript({
                declaration: true,
                declarationDir: './types',
                rootDir: './'
            }),
            commonjs(),
            resolve()
        ]
    },

    // es
    {
        input: 'index.ts',
        output: {
            format: 'es',
            file: 'index.es.js',
            name: 'colorbrewer'
        },
        plugins: [
            typescript(),
            resolve()
        ]
    }
]
