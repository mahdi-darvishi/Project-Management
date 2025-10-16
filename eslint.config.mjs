import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // اضافه کردن قوانین مورد نیاز در این قسمت
    rules: {
      // 1. غیرفعال کردن خطای استفاده از 'any' (Error)
      "@typescript-eslint/no-explicit-any": "off",

      // 2. تنظیم اخطار برای متغیرهای استفاده نشده، به طوری که متغیرهای شروع شده با '_' نادیده گرفته شوند (Warning)
      // این روش بهتر از "off" کردن کامل است.
      "@typescript-eslint/no-unused-vars": [
        "warn", // می‌توانید به جای "warn" از "off" استفاده کنید اگر می‌خواهید کاملاً غیرفعال شود
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
