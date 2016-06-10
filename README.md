# スクリーンショット撮るだけ

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f5b83ab3d9584b08b5eaf89050562c2c)](https://www.codacy.com/app/y-sato/sscaptor?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=medi-y-sato/sscaptor&amp;utm_campaign=Badge_Grade)

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
