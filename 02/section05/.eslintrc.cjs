module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		"no-unused-vars": "off", // 사용안하는 변수 에러사항 옵션끄기
		"react/prop-types": "off",
		"@typescript-eslint/no-unused-vars": "off" // TypeScript에서 사용하지 않는 변수 경고 비활성화
  },
}
