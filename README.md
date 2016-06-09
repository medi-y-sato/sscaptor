# スクリーンショット撮るだけ

phantomjsを使って指定したページのスクリーンショットを保存します

## 使いかた

```sh
$ git clone https://github.com/medi-y-sato/sscaptor
$ cd sscaptor/
$ npm install
$ npm run ss -- https://yahoo.jp device=iphone6 o=test.png
```

## オプション

* `o` : 出力ファイル名
* `device` : デバイスを指定(予め`userAgents`に定義したものの中から指定する)
