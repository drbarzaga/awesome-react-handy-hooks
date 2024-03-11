import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true,
                name: "react-ts-lib"
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            resolve({ browser: true }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', exclude: ['*.d.ts'] }),
            postcss({
                extract: true,
                minimize: true
            }),
            terser(),
            image()
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/],
        plugins: [dts()]
    }
]