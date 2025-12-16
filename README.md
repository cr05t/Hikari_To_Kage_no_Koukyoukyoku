https://www.sihd-bk.jp/corporation/expo2025/choetsu/
※microCMSを用いて置いた画像・動画が多く、取り出せないものはそのままにしてます。
※What'sの白が背景なのは上記による理由です。
※動画はYoutubeの埋め込みで対応しています。

# 大阪超越文化横丁（日本語版 README）

このリポジトリは「大阪超越文化横丁」のコードバンドルです。元のプロジェクトは以下で公開されています。  
https://www.figma.com/design/ft7D0da8V9qTTia4xXDOrd/%E5%AE%8C%E5%85%A8%E5%86%8D%E7%8F%BE

## セットアップ
1. 依存関係をインストール  
   ```bash
   npm install
   ```

2. 開発サーバーを起動  
   このプロジェクトの `package.json` には `dev` スクリプトが定義されていません。以下のいずれかで起動してください。
   - 直接起動する場合  
     ```bash
     npx vite --host --port 8000
     ```
   - スクリプトを追加してから使う場合（任意）  
     `package.json` の `"scripts"` に `"dev": "vite"` を追加し、次で起動できます。  
     ```bash
     npm run dev -- --host --port 8000
     ```

3. ブラウザで確認  
   - ローカル: `http://localhost:8000/`  
   - 同一ネットワークから: `http://<あなたのローカルIP>:8000/`

## 備考
- Vite 6 系を使用しています。  
- Tailwind, React 18 などが peerDependencies として要求されています。  
- ファイアウォールでアクセス許可が求められた場合は「プライベートネットワーク」を許可してください。
  