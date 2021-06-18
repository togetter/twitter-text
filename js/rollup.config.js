import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import license from 'rollup-plugin-license';

const banner = `/*!
 * <%= pkg.name %> <%= pkg.version %>
 *
 * Copyright 2018 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at:
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 */`;

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: 'dist/twitter-text.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/twitter-text.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['twemoji-parser', 'punycode'],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled'
    }),
    commonjs(),
    license({
      banner: banner
    })
  ]
});
