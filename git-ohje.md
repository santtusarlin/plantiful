# Git-käyttöohje

## Init

git init // alusta oma kansio

git remote add origin https://github.com/jamktiko/plantiful.git

git branch --set-upstream-to=origin/master master // oma master-haara trackaa serverin masteria

git pull origin master 

---

## Workflow

git pull // päivitetään oma master branch hakemalla serverin master

git branch < omahaara > master // luodaan masterista oma branch

git checkout < omahaara > // muutokset tehdään omalla haaralla

git checkout master

git pull // ennen mergeä päivitetään master

git merge <omahaara>

git push