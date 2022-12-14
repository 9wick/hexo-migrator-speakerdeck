# @9wick/hexo-migrator-speakerdeck

Migrate your blog from SpeakerDeck to [Hexo].
You can import only public page.

## Install

``` bash
$ npm install @9wick/hexo-migrator-speakerdeck --save
```

## Usage

Execute the following command after installed. `username` is the Speaker Deck username.

``` bash
$ hexo migrate speakerdeck <username> [--options]
```

- **alias**: Populates the `alias` setting in the front-matter, for use with the [hexo-generator-alias](http://github.com/hexojs/hexo-generator-alias) module. This is useful for generating redirects.
- **redirect**: Populates the `redirect` setting in the front-matter, for use with the [hexo-generator-alias](http://github.com/hexojs/hexo-generator-alias) module. This is useful for generating redirects.
- **addtag**: add 'speakerdeck' tag.
- **limit**: Maximum number of posts to import from the feed. All posts are imported by default.
    * Example:
  ``` bash
  $ hexo migrate speakerdeck wicket --redirect --addtag
  ```
- **skipduplicate**: Skip posts with similar title as existing ones.
    * If a feed contains a post titled 'Foo Bar' and there is an existing post named 'Foo-Bar.md', then that post will not be migrated.
    * The comparison is case-insensitive; a post titled 'FOO BAR' will be skipped if 'foo-bar.md' exists.
    * Without this option (default), this plugin will continue to migrate that post and create a post named 'Foo-Bar-1.md'

[Hexo]: https://hexo.io/