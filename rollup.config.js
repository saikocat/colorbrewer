// rollup.config.js
import typescript from '@rollup/plugin-typescript';

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
                declarationDir: './types/',
                rootDir: './'
            }),
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
        ]
    }
]
