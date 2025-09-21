#!/bin/bash

# Go to project folder
cd /Users/nagasubarayudu/Desktop/IOS || exit

echo "📂 Cleaning old docs folder..."
rm -rf docs

echo "📂 Moving new allure-report to docs..."
mv allure-report docs

echo "➕ Staging only docs/..."
git add docs

echo "💾 Committing changes..."
git commit -m "Update Allure report $(date +'%Y-%m-%d')"

echo "⬆️ Pushing to GitHub..."
git push

echo "✅ Done! Report available at: https://thinkhatnag.github.io/allure-reports/"
