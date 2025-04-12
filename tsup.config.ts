import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'], // compila todos os arquivos .ts da pasta src
  outDir: 'dist',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false, // pode deixar false se não precisa dos arquivos de tipo
  preserveModules: true, // preserva estrutura de arquivos
  preserveModulesRoot: 'src' // garante que a pasta 'src' vire a raiz do dist
})
