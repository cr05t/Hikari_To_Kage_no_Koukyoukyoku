https://rdlp.jp/archives/otherdesign/lp/226123

# 光と影の交響曲 (Access Project Link)

このリポジトリは「光と影の交響曲」(Access Project Link) のコード一式です。オリジナルのFigmaデザイン: https://www.figma.com/design/0Sp72xDIh3yCcxwwUCzTdJ/Access-Project-Link

## 動作方法

依存関係のインストール: `npm install`

開発サーバーの起動: `npm run dev`

## 閲覧と共有

- `index.html` を `file://` で直接開かないでください。Vite がモジュール解決と TSX バンドルを行うため、開発サーバーまたはビルド成果物経由で表示する必要があります。  
- ローカルで確認する手順:  
  1. `npm install`  
  2. `npm run dev -- --host --port 5173`  
  3. ブラウザで `http://localhost:5173` を開く  
- プレビュー用ビルド:  
  1. `npm run build`  
  2. `npx vite preview --host --port 4173`  
  3. ブラウザで `http://localhost:4173` を開く  
- 他の人と共有する場合: `dist` をホスティングサービスにデプロイしてください（例: Vercel / Netlify / Cloudflare Pages / GitHub Pages / S3+CloudFront）。多くのサービスはリポジトリから自動ビルド・公開が可能なので、デプロイ後のURLを共有すればOKです。
  
