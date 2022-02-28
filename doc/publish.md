# Publish packages

you'll find doc about 2 way to publish packages here:

- 1 - canary
- 2 - latest

## 1 - Canary

### app-player + components

go to the lerna root, checkout your branch

```
git checkout wip
```

then run

```
npm run publish:canary
```

a prompt will ask you to confirm

```
> lerna publish --canary --exact --cd-version=patch --skip-git

lerna info version 2.1.1
lerna info versioning independent
lerna info canary enabled
lerna info Checking for updated packages...
lerna info Comparing with d6fba416^..d6fba416.

Changes:
- @coorpacademy/app-player: 12.1.24 => 12.1.25-alpha.d6fba416
- @coorpacademy/app-template: 5.3.36 => 5.3.37-alpha.d6fba416
- @coorpacademy/components: 7.1.19 => 7.1.20-alpha.d6fba416
- @coorpacademy/css-modules-require-hook: 0.0.2 => 0.0.3-alpha.d6fba416
- @coorpacademy/history: 5.3.10 => 5.3.11-alpha.d6fba416
- @coorpacademy/nova-icons: 1.1.19 => 1.1.20-alpha.d6fba416
- @coorpacademy/progression-engine: 9.1.9 => 9.1.10-alpha.d6fba416
- @coorpacademy/redux-history: 5.3.11 => 5.3.12-alpha.d6fba416
- @coorpacademy/redux-router: 5.4.5 => 5.4.6-alpha.d6fba416
- @coorpacademy/redux-task: 0.0.5 => 0.0.6-alpha.d6fba416
- @coorpacademy/translate: 5.3.11 => 5.3.12-alpha.d6fba416
- @coorpacademy/treantjs-adapter-angular: 7.0.1 => 7.0.2-alpha.d6fba416
- @coorpacademy/treantjs-adapter-dust: 7.0.0 => 7.0.1-alpha.d6fba416
- @coorpacademy/webpack-config: 6.2.2 => 6.2.3-alpha.d6fba416
```

then wait for the success message

```
lerna info canary Resetting git state
Successfully published:
 - @coorpacademy/app-player@12.1.28-alpha.3dccd0f6
 - @coorpacademy/app-template@5.3.37-alpha.3dccd0f6
 - @coorpacademy/components@7.1.23-alpha.3dccd0f6
 - @coorpacademy/css-modules-require-hook@0.0.3-alpha.3dccd0f6
 - @coorpacademy/history@5.3.11-alpha.3dccd0f6
 - @coorpacademy/nova-icons@1.1.21-alpha.3dccd0f6
 - @coorpacademy/progression-engine@9.1.11-alpha.3dccd0f6
 - @coorpacademy/redux-history@5.3.12-alpha.3dccd0f6
 - @coorpacademy/redux-router@5.4.6-alpha.3dccd0f6
 - @coorpacademy/redux-task@0.0.6-alpha.3dccd0f6
 - @coorpacademy/translate@5.3.12-alpha.3dccd0f6
 - @coorpacademy/treantjs-adapter-angular@7.0.2-alpha.3dccd0f6
 - @coorpacademy/treantjs-adapter-dust@7.0.1-alpha.3dccd0f6
 - @coorpacademy/webpack-config@6.2.3-alpha.3dccd0f6
lerna success publish finished
```

If the publish failed because of a `lerna` error that resembles the following message:

```
  lerna ERR! E403 You cannot publish over the previously published versions: 10.5.7-alpha.13.xxxxx
```

Then you can re-try the canary publish, you have take the version that follows the `-alpha.` string,
`13` in this example, add one version to that number `14`now and run the command as follows `--preid alpha.THE_NEXT_VERSION`:

```
npm run publish:canary -- --preid alpha.14
```


### mooc

deps are now ready to be used for the mooc.

checkout your branch:

```
git checkout wip
```

```
yarn add @coorpacademy/app-player@12.1.28-alpha.3dccd0f6
yarn add @coorpacademy/components@7.1.23-alpha.3dccd0f6
```

```
[5/5] Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
└─ @coorpacademy/app-player@12.1.28-alpha.3dccd0f6
```

Your branch is now ready to be deployed.

### canary known issues

hashes issues https://github.com/lerna/lerna/issues/277

## 2 - Release
- ### Prerequisite 

  - Have merged your PR on `master` 

  - Be at lerna root, checkout and pull master

    ```
    > git checkout master
    > git pull origin master
    ```
    - **warning:** if you have conflicts, be sure to reset your branch to `origin/master` before proceeding!

      ```
      > git reset --hard origin/master
      ```

  - Check that you are connected to NPM 

    ```
    > npm whoami
    ```
      - If not: 
        ```
        > npm login
        ```
  - Check that you haven't a package-lock at the root of the project. If the package-lock exists, delete it:
    ```
    > git clean -xdf
    ```

### Publish a release

call lerna publish

```
> npm run publish:latest
```

lerna will prompt for the version

```
> lerna publish --exact

lerna info version 2.1.1
lerna info versioning independent
lerna info Checking for updated packages...
lerna info Comparing with @coorpacademy/app-player@12.1.21.
? Select a new version for @coorpacademy/app-player (currently 12.1.24)
❯ Patch (12.1.25)
  Minor (12.2.0)
  Major (13.0.0)
  Prepatch (12.1.25-0)
  Preminor (12.2.0-0)
  Premajor (13.0.0-0)
  Prerelease
  Custom
```

An automatic PR will be open on the mooc, but you may have changes to apply.
If you do, manually add the deps on your branch:

```
> yarn add @coorpacademy/app-player@12.1.25
> yarn add @coorpacademy/components@7.1.24
```

now you can push your branch and PR the bump.

# troobleshooting

sometimes the publishing fails but the git tags are already created.
you have to revert the commit and delete the tags before to run the publish again:

```sh
> git reset --soft HEAD~1
> git checkout HEAD .
> git tag -d @coorpacademy/package1@x.x.x
> git tag -d @coorpacademy/package2@x.x.x
> git tag -d @coorpacademy/package3@x.x.x
> npm run publish:latest
```

if your release is successful, but the packages don't make it to npmjs.com, republish the packages manually by going to each package that should have been released, and for each of them, do :
```
 > npm publish
```

## issues with tags

you can check the versions using

```sh
> npm info @coorpacademy/components dist-tags
{ latest: '8.6.2',
  beta: '7.0.0-next.4',
  next: '7.0.0-next.1',
  canary: '8.6.3-alpha2.6' }
```

sometimes you need to republish a new canary with the same semver.
If so, you may need to remove the current tag (be sure to play with `canary` only!!!):

```
> npm dist-tag rm @coorpacademy/player-web canary
```

then publish with a new `preid`

```
> npx lerna publish --canary --exact --cd-version=patch --skip-git --preid alpha2
```
