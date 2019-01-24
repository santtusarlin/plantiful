# Git-käyttöohje

## Init

git init // alusta oma kansio

git remote add origin https://github.com/jamktiko/plantiful.git

git pull origin prod 

git branch --set-upstream-to=origin/prod master // oma master-haara trackaa serverin prodia

---

## Workflow

git pull // päivitetään oma master branch hakemalla serverin prod

git branch < omahaara > master // luodaan masterista oma branch

git checkout < omahaara > // muutokset tehdään omalla haaralla

git checkout master

git pull // ennen mergeä päivitetään master

git merge < omahaara >

git push origin HEAD:prod